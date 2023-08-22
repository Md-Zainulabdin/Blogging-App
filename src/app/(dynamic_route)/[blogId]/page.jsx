import Header from '@/app/components/Header/page'
import Link from 'next/link'
import React from 'react'

const UserBlog = () => {
  return (
    <div className='w-full'>
       <Link href={`/`}><Header value={`< Back to all blogs`}/></Link>
    </div>
  )
}

export default UserBlog