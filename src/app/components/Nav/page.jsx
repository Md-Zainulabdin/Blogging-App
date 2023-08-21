"use client";
import { styles } from "@/app/lib/style";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { data, status } = useSession();

  return (
    <nav
      className={`w-full h-[45px] bg-[--primary-color] text-[white] flex items-center justify-between ${styles.paddingX}`}
    >
      <div className="logo">
        <h1 className="text-lg font-semibold">Personal Blogging App</h1>
      </div>
      <div className="menu flex items-center gap-8">
        {
          (data?.user) ? (<div className="name">{`${data?.user?.firstname} ${data?.user?.lastname}`}</div>) : null
        }
        <div className="auth">
          {status === "authenticated" ? (
            <button
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          ) : (
            <Link href={"/auth/login"}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
