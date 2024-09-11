import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/mainLogo.png'
import CustomInput from '@/components/shared/CustomInput'


const Page = () => {
    return (
        <div className='relative min-h-screen w-full flex justify-center items-center'>

            {/* logo */}
            <div className='absolute -top-[5%]  left-[7%]'>
                <Image alt='' src={logo} className='w-48  flex-1 flex' unoptimized />
            </div>


            {/* login continer */}
            <div className='bg-white rounded-3xl shadow-xl w-[40%] p-8' >
                <h1 className='text-center text-3xl font-medium'>Log in</h1>
                <div>
                    <CustomInput
                        type='text'
                        label='Name'
                    />
                </div>
            </div>

        </div>
    )
}

export default Page
