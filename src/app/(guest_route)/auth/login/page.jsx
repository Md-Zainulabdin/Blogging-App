"use client";
import Form from "@/app/components/Form/page";
import Header from "@/app/components/Header/page";
import { errorMessage, signUpMessage } from "@/app/lib/toastMessage";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { push } = useRouter();

  const onSignIn = async (firstname, lastname, email, password) => {
    const data = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (data.error === null && data.ok === true) {
      signUpMessage("Login Successfully");
      push("/dashboard");
    }
     else if (data.error === "Incorrect Password") {
      errorMessage("Incorrect Password");
    } 
    else if (data.error === "User not Found") {
      errorMessage("User not Found");
    }
    else {
      return undefined;
    }
  };

  return (
    <div>
      <Header value={"Login"} />
      <div className="w-full h-[70vh] customflex">
        <Form signIn={true} onFormSubmit={onSignIn} />
      </div>
    </div>
  );
};

export default LoginPage;
