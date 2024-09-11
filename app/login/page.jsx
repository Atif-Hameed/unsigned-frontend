import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/mainLogo.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'


const Page = () => {
    return (
        <MaxContainer>
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>

                {/* logo */}
                <div className='lg:absolute flex justify-center  3xl:top-[10%] 2xl:top-[5%] -top-[5%]  left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28 ' unoptimized />
                </div>


                {/* login continer */}
                <div className='bg-white sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full sm:space-y-12 space-y-6 sm:p-8 p-4 sm:py-10 ' >
                    <h1 className='text-center sm:text-4xl text-2xl font-semibold '>Log in</h1>
                    <div className='space-y-6'>
                        <CustomInput
                            type='text'
                            label='Email'
                        />
                        <CustomInput
                            type='password'
                            label='Password'
                        />
                        <div className='flex items-center justify-between sm:pl-8'>
                            <Link href={'/'} className='text-lightBlueText sm:text-xl text-lg'>Forgot password?</Link>
                            <div className='w-fit'>
                                <Button label={'Log in'} />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center text-center flex-wrap gap-4 justify-center text-xl'>
                        <h1 className='text-labelColor'>Don&apos;t have an account?</h1><Link href={'/'} className='text-lightBlueText'>Sign Up</Link>
                    </div>
                </div>

            </div >
        </MaxContainer>
    )
}

export default Page
