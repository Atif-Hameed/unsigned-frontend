import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/mainLogo.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'
import { IoArrowBack } from "react-icons/io5";


const Page = () => {
    return (
        <MaxContainer>
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>

                {/* logo */}
                <div className='lg:absolute flex justify-center -top-[2%] left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>


                {/* main continer */}
              
                <div className='bg-white relative sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full sm:space-y-12 space-y-6 sm:p-8 p-4 sm:py-10 ' >
                   
                   {/* back button */}
                   <Link href={'/'} className='absolute -top-[10%] left-4 text-lightBlueText flex items-center gap-2' > <IoArrowBack className='text-xl' />Back</Link>
                   
                    <h1 className='text-center sm:text-4xl text-2xl font-semibold '>Forgot Password</h1>
                    <p className='text-center sm:text-2xl text-lg'>Enter your email so we can send a password reset link</p>
                    <div className='space-y-6'>
                        <CustomInput
                            type='text'
                            label='Email'
                            isRequired={true}
                        />

                        <div className=' w-full '>
                            <Link href={'/reset-password'} className='w-full'>
                            <Button label={'Send me the link'} />
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </div >
        </MaxContainer>
    )
}

export default Page
