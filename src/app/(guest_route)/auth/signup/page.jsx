import Form from "@/app/components/Form/page";
import Header from "@/app/components/Header/page";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <Header value={"Sign Up"} />
      <div className="w-full h-[70vh] customflex">
        <Form signIn={false} />
      </div>
    </div>
  );
};

export default SignUpPage;
