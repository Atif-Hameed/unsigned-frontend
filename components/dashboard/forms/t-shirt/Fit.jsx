'use client'
import React, { useState } from 'react'
import { HiQuestionMarkCircle } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomRadioButton from '@/components/shared/CustomRadioButton';
import img from '@/assets/images/shirtFit.png'
import Image from 'next/image';
import NumberInput from '@/components/shared/NumberInput';
import { SizeChartData } from '@/data';


const Fit = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleFileRemove = () => {
        setSelectedFile(null);
    };

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

                <div className='bg-lightBackground rounded-3xl border border-dark p-5' >
                    <textarea name="" className='w-full outline-none bg-transparent h-full px-5' placeholder='special requests or comments' id=""></textarea>

                    <div className='flex justify-between items-start w-full mt-5 my-3' >
                        <div>
                            {selectedFile && (
                                <div className="flex items-center space-x-4">
                                    <div className='flex items-center space-x-2'>
                                        {/* Icon representing file type */}
                                        <div className='w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg'>
                                            <span className='text-blue-500 font-bold'>{selectedFile.type.split('/')[1].toUpperCase()}</span>
                                        </div>

                                        {/* File Details */}
                                        <div>
                                            <p className='text-gray-800'>{selectedFile.name}</p>
                                            <p className='text-gray-500 text-sm'>{(selectedFile.size / 1024).toFixed(1)} KB</p>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>

                        {/* File Upload Input */}
                        {!selectedFile &&
                            <div className='bg-white p-2 relative rounded-full cursor-pointer hover:bg-[#f3f6f9]'>
                                <GrAttachment className='text-lightBlue text-xl' />
                                <input
                                    type="file"
                                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                                    onChange={handleFileChange}
                                    name="fileUpload"
                                    id="fileUpload"
                                />
                            </div>
                        }

                        {selectedFile &&
                            <div onClick={handleFileRemove} className='bg-white cursor-pointer p-2 relative rounded-full hover:bg-[#f3f6f9]'>
                                <RiDeleteBin6Line className='text-lightBlue text-xl' />
                            </div>
                        }
                    </div>
                </div>
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
