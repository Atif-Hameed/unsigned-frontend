'use client'
import React, { useState } from 'react'
import { HiQuestionMarkCircle } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomRadioButton from '@/components/shared/CustomRadioButton';
import img from '@/assets/images/shirtDesign.png'
import Image from 'next/image';
import NumberInput from '@/components/shared/NumberInput';
import { SizeChartData } from '@/data';
import CustomDataUpload from '@/components/shared/CustomDataUpload';


const Fit = () => {

    return (
        <div className='w-full flex items-start gap-4'>


            <div className='w-[19%] flex flex-col gap-3' >

                {/* select fit */}
                <div className='bg-lightBackground rounded-3xl p-10' >
                    <h1 className='flex items-center gap-1 text-4xl font-bold text-dark'>
                        Choose your fit <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                    </h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CustomRadioButton name='radio' label={'Regular fit'} />
                        <CustomRadioButton name='radio' label={'Boxy fit'} />
                        <CustomRadioButton name='radio' label={'Acne Fit'} />
                        <CustomRadioButton name='radio' label={'Kanye Fit'} />
                        <CustomRadioButton name='radio' label={'Zero Waste 1.0'} />
                    </div>
                </div>

                {/* custom data */}

                <CustomDataUpload />

            </div>

            {/* details */}
            <div className='w-full flex-1 bg-lightBackground p-10 rounded-3xl' >
                <h1 className='flex items-center gap-1 text-4xl font-bold text-dark'>
                    Fill in the size chart <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                </h1>

                <div className='flex justify-between items-center '>
                    <div className='w-[60%] '>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="">
                                    <tr className=''>
                                        <th className="px-1 text-center   text-sm "></th>
                                        <th className="px-1 text-center   text-sm ">XXS</th>
                                        <th className="px-1 text-center   text-sm ">XS</th>
                                        <th className="px-1 text-center   text-sm ">S</th>
                                        <th className="px-1 text-center   text-sm ">M</th>
                                        <th className="px-1 text-center   text-sm ">L</th>
                                        <th className="px-1 text-center   text-sm ">XL</th>
                                        <th className="px-1 text-center   text-sm ">XXL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SizeChartData.map((e, i) => (
                                        <tr key={i}>
                                            <td className="px-1 w-48  py-2 whitespace-normal  text-sm text-start">
                                                <div className='flex items-center gap-2'>
                                                    <div className='bg-dark text-white  px-2 pt-0.5 rounded-full' >
                                                        G
                                                    </div>
                                                    {e.name}
                                                </div>
                                            </td>
                                            <td className="px-1 w-16  py-2 whitespace-nowrap  text-sm text-start">
                                                <NumberInput value={e.xxs} />
                                            </td>
                                            <td className="px-1 w-16  py-2 whitespace-nowrap  text-sm text-start">
                                                <NumberInput value={e.xs} />
                                            </td>
                                            <td className="px-1 w-16  py-2 whitespace-nowrap  text-sm text-start">
                                                <NumberInput value={e.s} />
                                            </td>
                                            <td className="px-1 w-16  py-2 whitespace-nowrap  text-sm text-start">
                                                <NumberInput value={e.m} />
                                            </td>
                                            <td className="px-1 w-16  py-2 whitespace-nowrap  text-sm text-start">
                                                <NumberInput value={e.l} />
                                            </td>
                                            <td className="px-1 w-16  py-2 whitespace-nowrap  text-sm text-start">
                                                <NumberInput value={e.xl} />
                                            </td>
                                            <td className="px-1 w-16  py-2 whitespace-nowrap  text-sm text-start">
                                                <NumberInput value={e.xxl} />
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='w-[40%]'>
                        <Image alt='' src={img} className='w-full h-full' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Fit
