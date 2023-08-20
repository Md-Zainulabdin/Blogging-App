import { styles } from "@/app/lib/style";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav
      className={`w-full h-[45px] bg-[--primary-color] text-[white] flex items-center justify-between ${styles.paddingX}`}
    >
      <div className="logo">
        <h1 className="text-lg font-semibold">Personal Blogging App</h1>
      </div>
      <div className="menu flex items-center gap-8">
        <div className="name">zain</div>
        <div className="auth">
          <Link href={"/"}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
