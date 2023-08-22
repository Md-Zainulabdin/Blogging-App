import { getBlogs } from '@/handlers/handler'
import React from 'react'
import BlogsCards from '../blogsCards/page';

const AllBlogs = () => {
    const blogs = getBlogs();
    console.log(blogs);
  return (
    <div className='mt-8'>
        <h1 className='text-2xl text-[--primary-black] font-semibold mb-8'>All Blogs</h1>
        <BlogsCards blogs={blogs}/>
    </div>

  )
}

export default AllBlogs