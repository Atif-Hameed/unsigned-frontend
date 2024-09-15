'use client'
import React, { useState } from 'react'
import MaxContainer from './MaxContainer'
import Image from 'next/image'
import logo from '@/assets/images/logoSmall.png'
import german from '@/assets/icons/germany.png'
import american from '@/assets/icons/america.png'
import { BsPersonFill } from "react-icons/bs";


const Navbar = () => {

    const [openPopup, setOpenPopup] = useState(false);

    const handlePopup = () => {
        setOpenPopup((prev) => (!prev))
    }

    return (
        <div className='w-full flex justify-center'>
            <MaxContainer>
                <div className='flex justify-between w-full items-center' >
                    <div>
                        <Image alt='' src={logo} className='w-48' unoptimized priority />
                    </div>
                    <div className='flex items-center gap-10'>
                        <div className='flex items-center gap-1'>
                            <div>
                                <Image alt='' src={german} className='w-20' unoptimized priority />
                            </div>
                            <p className='text-labelColor text-2xl'>Englisch</p>
                        </div>
                        <div onClick={handlePopup} className='cursor-pointer relative flex items-center gap-2'>
                            <div className='p-2  hover:scale-105 rounded-full bg-white' >
                                <BsPersonFill className='text-4xl text-black' />
                            </div>
                            {
                                openPopup &&
                                <div className='absolute  right-0 top-0 flex flex-col px-4 py-2 rounded-lg bg-white' >
                                    <p className='py-2 w-full cursor-pointer rounded-md hover:bg-[#d6ece3]'>Profile</p>
                                    <p className='py-2 w-full cursor-pointer rounded-md hover:bg-[#d6ece3]'>Logout</p>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </MaxContainer>
        </div>
    )
}

export default Navbar
