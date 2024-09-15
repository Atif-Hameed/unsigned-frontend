'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/drafts')
  }, [])

  return <div></div>
}
