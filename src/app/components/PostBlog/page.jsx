'use client'
import React from 'react'
import { useRef } from 'react'
const PostBlog = () => {
    const titleRef = useRef('');
    const descRef = useRef('');

  return (
    <div className='w-[70%] p-6 border'>
        <div className='border'>
            <div className="title">
                <input type="text" name='title' ref={titleRef} className='border'/>
            </div>
            <div className="desc">
                <textarea name="desc" id="desc"  rows="6" className='border'></textarea>
            </div>
            <div className="submit"></div>
        </div>
    </div>
  )
}

export default PostBlog