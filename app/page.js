'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/login')
  }, [])

  return <div className="text-center text-lightBlue flex items-center min-h-screen justify-center">Loading...</div>
}
