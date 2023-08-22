import React from "react";

const BlogsCards = ({ blogs }) => {
  return (
    <div>
      {blogs?.map((currElem) => (
        <div>
          <div className="row-1">
            <div className="profile-pic">
                <img src={currElem.img} alt="Profile Picture" className="w-[60px]"/>
            </div>
            <div className="profile-title"></div>
          </div>
          <div className="row-2">

          </div>
          <div className="row-3">

          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsCards;
