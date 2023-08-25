"use client";
import { dateBuilder } from "@/app/lib/currentDate";
import { styles } from "@/app/lib/style";
import { errorMessage } from "@/app/lib/toastMessage";
import { useSession } from "next-auth/react";
import React from "react";

const PostBlog = () => {
  const { status, data } = useSession();

  const onPublishHandler = async (formData) => {
    const title = formData.get("title");
    const desc = formData.get("desc");
    const date = dateBuilder(new Date());

    if (title.length == 0 && desc.length == 0) {
      errorMessage("Please Fill Required Fields!");
    } else if (title.length < 5 || title.length > 50) {
      errorMessage("title should contain character between 5 to 50");
    }

    if (status === "authenticated") {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: `${data?.user?.firstname} ${data?.user?.lastname}`,
          title,
          desc,
          date,
          img: `/dummyprofile.jpg`,
          email: data?.user?.email,
        }),
      });

      if (res.ok) {
        window.location.reload();
      }
    } else {
      errorMessage("Only Authenticate User Can Post Blog");
    }
  };

  return (
    <div className="w-[90%] md:w-[70%] p-4 border rounded-md shadow-sm bg-white">
      <div className="w-full">
        <form action={onPublishHandler} className="flex flex-col gap-5">
          <div className="title">
            <input
              type="text"
              name="title"
              placeholder="Title.."
              minLength={5}
              maxLength={50}
              required
              className="border w-full px-3 py-3 rounded-md outline-indigo-500"
            />
          </div>
          <div className="desc">
            <textarea
              name="desc"
              id="desc"
              rows="6"
              placeholder="Enter Description.."
              minLength={10}
              maxLength={3000}
              required
              className="border w-full p-4 rounded-md outline-indigo-500"
            ></textarea>
          </div>
          <div className="submit mt-[-10px]">
            <button
              type="submit"
              className={`${styles.button} hover:scale-[0.98]`}
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
