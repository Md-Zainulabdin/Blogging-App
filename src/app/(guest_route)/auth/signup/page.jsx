"use client";
import Form from "@/app/components/Form/page";
import Header from "@/app/components/Header/page";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpPage = () => {

  const {push} = useRouter();

  const signUpMessage = (mess) => {
    toast.success(mess, { autoClose: 2000, position: "top-center", closeOnClick });
  };

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

      const resposne = await res.json();;
      console.log(resposne);
      if (res.ok) {
        signUpMessage("Sign Up Successfully");
        push('/auth/login')
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
