import Header from "@/app/components/Header/page";
import BlogsCards from "@/app/components/blogsCards/page";
import { capitlize } from "@/app/lib/capitlize";
import { styles } from "@/app/lib/style";
import { getBlogs} from "@/handlers/handler";
import Link from "next/link";
import React from "react";

const UserBlog = ({ params }) => {
  const allBlogs = getBlogs();
  const filteredBlogs = allBlogs.filter(
    (blog) => blog.fullname.split(" ").join("") === params.blogId
  );
    
  return (
    <div className="w-full">
      <Link href={`/`}>
        <Header value={`< Back to all blogs`} />
      </Link>
      <div className={`all-blogs w-full h-screen ${styles.paddingX}`}>
        <div className="title py-8">
          <h1 className="text-2xl font-medium text-[--primary-black]">
            All from {capitlize(filteredBlogs[0]?.fullname)}
          </h1>
        </div>

        <div className="blogs-cards w-full flex flex-col-reverse md:flex-row gap-8">
          <div className="user-blogs w-full md:w-[80%]">
            <BlogsCards blogs={filteredBlogs}/>
          </div>
          <div className="user-profile w-full md:w-[30%] flex flex-col items-end gap-2">
            <div className="name text-xl sm:text-2xl text-[--primary-color] font-medium">{capitlize(filteredBlogs[0]?.fullname)}</div>
            <div className="email text-[26px] font-medium text-[--primary-black]">{filteredBlogs[0]?.email}</div>
            <div className="img mt-3">
              <img src={filteredBlogs[0]?.img} alt="profile pic" className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBlog;
