import AllBlogs from "@/app/components/AllBlogs/page";
import Header from "@/app/components/Header/page";
import PostBlog from "@/app/components/PostBlog/page";
import { styles } from "@/app/lib/style";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Header value={"Dashboard"} />
      <div className={`${styles.paddingX} p-12`}>
        <PostBlog />
        <AllBlogs />
      </div>
    </div>
  );
};

export default Dashboard;
