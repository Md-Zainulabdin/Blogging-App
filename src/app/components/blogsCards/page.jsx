"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const BlogsCards = ({ blogs, edit }) => {

  const session = useSession();

  const onDeleteHandler = async (id) => {
    let flag = confirm("You want to delete this blog!");
    if (!flag) return;

    const res = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="w-[90%] md:w-[70%] flex flex-col gap-4">
      {blogs.length !== 0 ? (
        blogs?.map((currElem) => (
          <div
            className="border p-5 bg-white shadow-sm rounded-md cursor-pointer"
            key={currElem.id}
          >
            <div className="row-1 flex gap-4 items-center">
              <div className="profile-pic">
                <img
                  src={currElem.img}
                  alt="Profile Picture"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="profile-title flex flex-col">
                <div className="title">
                  <strong className="text-[22px] font-semibold text-[--primary-black]">
                    {currElem.title}
                  </strong>
                </div>
                <div className="data">
                  <span className="text-[16px] text-slate-500">{`${currElem.fullname} - ${currElem.date}`}</span>
                </div>
              </div>
            </div>
            <div className="row-2 py-3">
              <blockquote className="text-slate-700 text-lg">
                {currElem.desc}
              </blockquote>
            </div>
            <div className="row-3 flex gap-3 text-[--primary-color]">
              {edit ? (
                <button>Edit</button>
              ) : (
                <Link href={`/${currElem.fullname.split(" ").join("")}`}>See all from this user</Link>
              )}
              {edit ? (
                <button
                  onClick={() => {
                    onDeleteHandler(currElem.id);
                  }}
                >
                  Delete
                </button>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <div className="text-2xl text-[--primary-black]">No Blog...</div>
      )}
    </div>
  );
};

export default BlogsCards;
