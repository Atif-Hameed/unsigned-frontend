'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'


const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/drafts')
  }, [])

  return <div className="text-center text-lightBlue flex items-center min-h-screen justify-center">Loading...</div>
}

export default Page
