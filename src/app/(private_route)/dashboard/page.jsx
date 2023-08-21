import Header from '@/app/components/Header/page'
import PostBlog from '@/app/components/PostBlog/page'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full'>
      <Header value={'Dashboard'}/>
      <PostBlog/>
    </div>
  )
}

export default Dashboard