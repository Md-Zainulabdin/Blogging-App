"use client";
import { styles } from "@/app/lib/style";
import React, { useRef } from "react";

const Form = ({ signIn }) => {
  let firstNameRef = useRef("");
  let lastNameRef = useRef("");
  let passwordRef = useRef("");
  let confirmPasswordRef = useRef("");
  let emailRef = useRef("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const firstname = firstNameRef.current.value;
        const lastname = lastNameRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            alert("Password Not Match")
        }

  }

  return (
    <div className="w-[73%] sm:w-[63%] md:w-[53%] lg:w-[43%] xl:w-[33%] border p-8 shadow-sm">
      <form action="#" className="w-full flex flex-col gap-5" onSubmit={onSubmitHandler}>
        <div className="firstname flex flex-col">
          <input
            type="text"
            name="firstname"
            ref={firstNameRef}
            placeholder="Firstname.."
            required
            className="p-3 border outline-none text-slate-700 rounded-sm"
          />
        </div>

        <div className="lastname flex flex-col">
          <input
            type="text"
            name="lastname"
            ref={lastNameRef}
            placeholder="Lastname.."
            required
            className="p-3 border outline-none text-slate-700 rounded-sm"
          />
        </div>

        <div className="email flex flex-col">
          <input
            type="text"
            name="email"
            ref={emailRef}
            placeholder="Email.."
            required
            className="p-3 border outline-none text-slate-700 rounded-sm"
          />
        </div>

        <div className="password flex flex-col">
          <input
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password.."
            required
            className="p-3 border outline-none text-slate-700 rounded-sm"
          />
        </div>

        <div className="confirm password flex flex-col">
          <input
            type="password"
            name="confirm password"
            ref={confirmPasswordRef}
            placeholder="Confirm Password.."
            required
            className="p-3 border outline-none text-slate-700 rounded-sm"
          />
        </div>

        <div className="submit w-full flex justify-center ">
            <button className={`${styles.button}`} type="submit">
                Sign Up
            </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
