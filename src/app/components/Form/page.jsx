"use client";
import { styles } from "@/app/lib/style";
import { validate } from "@/app/lib/validate";
import React, { useRef } from "react";
import Link from "next/link";
import { errorMessage } from "@/app/lib/toastMessage";

const Form = ({ signIn, onFormSubmit }) => {
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

    if (!signIn) {
      const error = validate(firstname, password, confirmPassword);
      if (error) {
        errorMessage(error);
        return;
      }
    }

    onFormSubmit(firstname, lastname, email, password);
  };

  return (
    <div className="w-[73%] sm:w-[63%] md:w-[53%] lg:w-[43%] xl:w-[33%] border p-8 shadow-sm">
      <form
        action="#"
        className="w-full flex flex-col gap-5"
        onSubmit={onSubmitHandler}
      >
        {!signIn ? (
          <>
            <div className="firstname flex flex-col">
              <input
                type="text"
                name="firstname"
                ref={firstNameRef}
                placeholder="Firstname.."
                required
                maxLength={20}
                className="p-3 border outline-none rounded-md"
              />
            </div>

            <div className="lastname flex flex-col">
              <input
                type="text"
                name="lastname"
                ref={lastNameRef}
                placeholder="Lastname.."
                required
                maxLength={20}
                className="p-3 border outline-none rounded-md"
              />
            </div>
          </>
        ) : null}

        <div className="email flex flex-col">
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Email.."
            required
            className="p-3 border outline-none rounded-md"
          />
        </div>

        <div className="password flex flex-col">
          <input
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password.."
            required
            className="p-3 border outline-none rounded-md"
          />
        </div>

        {!signIn ? (
          <div className="confirm password flex flex-col">
            <input
              type="password"
              name="confirm password"
              ref={confirmPasswordRef}
              placeholder="Confirm Password.."
              required
              className="p-3 border outline-none rounded-md"
            />
          </div>
        ) : null}

        <div>
          <span className="text-[#777] px-2">
            {!signIn ? (
              <Link href={"/auth/login"}>Already Have Account, Sign In!</Link>
            ) : (
              <Link href={"/auth/signup"}>Dont have Account, Sign Up!</Link>
            )}
          </span>
        </div>

        <div className="submit w-full flex justify-center ">
          <button className={`${styles.button}`} type="submit">
            {!signIn ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
