import { getServerSession } from 'next-auth'
import React from 'react'
import { Options } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

const Privatelayout = async ({children}) => {

    const session = await getServerSession(Options);
    if (!session?.user) redirect('/auth/login')

  return (
    <>{children}</>
  )
}

export default Privatelayout