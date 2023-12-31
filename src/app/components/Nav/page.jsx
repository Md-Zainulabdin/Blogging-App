"use client";
import { styles } from "@/app/lib/style";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { data, status } = useSession();
  const pathname = usePathname()
  console.log(pathname);

  return (
    <nav
      className={`w-full h-[45px] bg-[--primary-color] text-[white] flex items-center justify-between ${styles.paddingX}`}
    >
      <div className="logo">
        <Link href={"/"}>
          <h1 className="text-lg font-semibold">Personal Blogging App</h1>
        </Link>
      </div>
      <div className="menu flex items-center gap-8">
        {
          (pathname === '/') ? (
              <Link href={'/dashboard'}>Dashboard</Link>
          ) : (
            data?.user ? (
              <div className="name">{`${data?.user?.firstname} ${data?.user?.lastname}`}</div>
            ) : null
          )
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
