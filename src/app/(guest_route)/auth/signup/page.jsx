"use client";
import Form from "@/app/components/Form/page";
import Header from "@/app/components/Header/page";
import { useRouter } from "next/navigation";
import React from "react";
import { signUpMessage } from "@/app/lib/toastMessage";

const SignUpPage = () => {
  const { push } = useRouter();

  const onSignUp = async (firstname, lastname, email, password) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstname,
          lastname,
        }),
      });

      const resposne = await res.json();
      console.log(resposne);
      if (res.ok) {
        signUpMessage("Sign Up Successfully");
        push("/auth/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header value={"Sign Up"} />
      <div className="w-full h-[70vh] customflex">
        <Form signIn={false} onFormSubmit={onSignUp} />
      </div>
    </div>
  );
};

export default SignUpPage;
