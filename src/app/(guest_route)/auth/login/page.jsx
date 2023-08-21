"use client";
import Form from "@/app/components/Form/page";
import Header from "@/app/components/Header/page";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { push } = useRouter();

  const errorMessage = (err) => {
    toast.error(err, { autoClose: 3000, position: "top-center", closeOnClick });
  };

  const signUpMessage = (mess) => {
    toast.success(mess, { autoClose: 1000, position: "top-center", closeOnClick: true, });
  };

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
