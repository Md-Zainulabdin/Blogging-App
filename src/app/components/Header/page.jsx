import { styles } from "@/app/lib/style";
import React from "react";

const Header = ({ value }) => {
  return (
    <div className="w-full h-[80px] border-b flex items-center">
      <div className={`${styles.paddingX}`}>
        <h1 className="text-[26px] font-bold text-[--primary-black]">{value}</h1>
      </div>
    </div>
  );
};

export default Header;
