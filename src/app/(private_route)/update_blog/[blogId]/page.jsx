import Header from "@/app/components/Header/page";
import { styles } from "@/app/lib/style";
import React from "react";

const UpdateBlog = ({params}) => {
    const url = params.blogId;
  return (
    <div>
      <Header value={`Update Blog`} />
      <div className={`w-full ${styles.paddingX}`}>
        <div>
          <form action="">
            <div>
                <input type="text" name="title" className="border"/>
            </div>
            <div>
                <textarea name="desc" id="desc" cols="30" rows="6" className="border"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;