'use client'
import React from 'react'
import { HiQuestionMarkCircle } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";


const Fit = () => {
    return (
        <div className='w-full flex items-start gap-4'>
            {/* side cards */}
            <div className='min-w-[20%]' >
                <div className='bg-lightBackground rounded-3xl p-10' >
                    <h1 className='flex items-center gap-1'>Choose your fit <HiQuestionMarkCircle /></h1>
                    <div>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="fit" id="" />
                            <p className='text-sm'>Reuglar fit</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="fit" id="" />
                            <p className='text-sm'>Reuglar fit</p>
                        </div>
                    </div>
                </div>
                <div className='bg-lightBackground rounded-3xl p-10' >
                    <textarea name="" className='w-full outline-none bg-transparent h-full' placeholder='special requests or comments' id=""></textarea>
                    <div className='flex justify-end w-full mt-5 my-3' >
                        <div className='bg-white p-1.5 rounded-full relative hover:bg-[#f3f6f9]' >
                            <GrAttachment className='text-lightBlue' />
                            <input type="file" className='absolute w-full h-full opacity-0 cursor-pointer' name="" id="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* details */}
            <div className='w-full flex-1 bg-lightBackground' ></div>
        </div>
    )
}

export default Fit
