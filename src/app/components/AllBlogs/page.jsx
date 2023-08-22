import { getBlogs } from "@/handlers/handler";
import React from "react";
import BlogsCards from "../blogsCards/page";
import { getServerSession } from "next-auth";
import { Options } from "@/app/api/auth/[...nextauth]/route";

const AllBlogs = async () => {
  const session = await getServerSession(Options);
  const blogs = getBlogs();
  let edit = false;
  if (session?.user) {
    edit = true;
  }
  return (
    <div className="mt-8">
      <h1 className="text-2xl text-[--primary-black] font-semibold mb-8">
        All Blogs
      </h1>
      <div className="w-full sm:w-[80%] md:w-[70%]">
        <BlogsCards blogs={blogs} edit={edit} />
      </div>
    </div>
  );
};

export default AllBlogs;
