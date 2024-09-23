'use client'
import React, { useState } from 'react'
import Heading from '../Heading'
import CustomTooltip from '../CustomTooltip'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import CustomRadioButton from '../CustomRadioButton'
import { FaCheck } from 'react-icons/fa'
import necklabel from '@/assets/images/Necklabel.png'
import necklabelUpload from '@/assets/images/necklabelUpload.svg'
import Image from 'next/image'
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from 'react-icons/ri'


const NecklabelForm = ({ selectedColor, onColorSelect, }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const validFileTypes = ['image/svg+xml', 'application/pdf', 'application/postscript'];

    // Handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file && validFileTypes.includes(file.type)) {
            setSelectedFile(file);
        } else {
            toaste('Only .svg, .pdf, .ai, or .eps files are allowed.');
        }
    };

    // Handle file removal
    const handleFileRemove = () => {
        setSelectedFile(null);
    };


    const Colors = [
        { label: 'White', title: 'White', colorCode: '#ffffff' },
        { label: 'Black', title: 'Black', colorCode: '#000000' },
    ];

    const handleColorSelect = (color) => {
        onColorSelect(color);
    };


    return (
        <div className='w-full flex items-start gap-3'>
            <div className='w-[32%] flex flex-col gap-3' >
                <div className='p-5 bg-lightBackground rounded-3xl' >
                    <div className='flex items-center gap-3  w-full'>
                        <Heading>Select a label option</Heading>
                        <CustomTooltip width='30rem' tooltipText={'Select the label attachment here. Labels get attached with tone-in-tone threads as standard. If you wish to have it in contrasts, leave a note in the comment box. Size tags are as standard attached separately.'}>
                            <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                        </CustomTooltip>
                    </div>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CustomRadioButton name='radio' label={'No label'} />
                        <CustomRadioButton name='radio' label={'Standard'} />
                    </div>
                </div>
                <div className='p-5 bg-lightBackground rounded-3xl' >
                    <div className='flex items-center gap-3  w-full'>
                        <Heading>Choose the material</Heading>
                        <CustomTooltip width='30rem' tooltipText={"Labels come in different materials. As standard, labels are done in a printed polyester. Cotton canvas printed labels are the most sustainable option. More premium are the woven labels. We'll store excess labels at our factory."}>
                            <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                        </CustomTooltip>
                    </div>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CustomRadioButton name='radio' label={'MOQ200 to Cotton Canvas'} />
                        <CustomRadioButton name='radio' label={'MOQ 500 to Woven Label'} />
                    </div>
                </div>
                <div className='p-5 bg-lightBackground rounded-3xl' >
                    <div className='flex items-center gap-3  w-full'>
                        <Heading>Choose the label color</Heading>
                        <CustomTooltip width='30rem' tooltipText={"Labels are in a limited range of colors available. For woven labels, additional colors are available on request."}>
                            <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                        </CustomTooltip>
                    </div>
                    {/* Color options */}
                    <div className='flex flex-wrap gap-4 mt-4'>
                        {Colors.map((color, index) => (
                            <CustomTooltip
                                key={index}
                                tooltipText={<span className='whitespace-nowrap'>{color.label}<br />{color.title}</span>}
                            >
                                <div
                                    className={`w-12 h-12 rounded-full border-2 cursor-pointer flex items-center justify-center ${selectedColor === color.colorCode ? 'border-lightBlueText' : 'border-gray-300'
                                        }`}
                                    style={{ backgroundColor: color.colorCode }}
                                    onClick={() => handleColorSelect(color.colorCode)}
                                >
                                    {selectedColor === color.colorCode && <FaCheck className='text-lightBlueText text-xl' />}
                                </div>
                            </CustomTooltip>
                        ))}
                    </div>
                </div>
            </div>


            <div className='w-[68%] bg-lightBackground justify-between p-5 flex items-center rounded-3xl py-20' >
                <div className='w-[45%]'>
                    <Image alt='' src={necklabel} />
                </div>
                <div className='w-[45%] flex justify-center'>
                    <div className=' w-fit relative'>
                        <p className='text-center text-sm text-gray-500' >3cm</p>
                        <div className='flex items-center'>
                            <Image alt='' src={necklabelUpload} className='z-30 relative' />
                            <div className='h-full flex justify-center items-center'>
                                <p className='text-center text-sm text-gray-500' >3cm</p>
                            </div>
                        </div>

                        <div className='bg-[#d6e2ec] h-[80%] w-[55%] z-20 absolute bottom-2 left-3 cursor-pointer py-3 flex flex-col justify-start gap-2 items-center'>
                            {/* File details (if file is selected) */}
                            <div>
                                {selectedFile ? (
                                    <div className='w-12 h-12 bg-lightBlueText flex items-center justify-center rounded-lg'>
                                        <span className='text-blue-500 font-bold'>{selectedFile.type.split('/')[1].toUpperCase()}</span>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </div>
                        </div>

                        <div className='absolute bottom-4 left-8 z-40'>
                            {/* Upload Button */}
                            {!selectedFile &&
                                <div className='bg-lightBlueText p-2 z-40 rounded-full  hover:bg-lightBlue'>
                                    <IoCloudUploadOutline className='text-lg text-white' />
                                    <input
                                        type='file'
                                        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                                        onChange={handleFileChange}
                                        accept='.svg,.pdf,.ai,.eps'
                                    />
                                </div>
                            }


                            {/* Delete Button (if file is selected) */}
                            {selectedFile && (
                                <div
                                    onClick={handleFileRemove}
                                    className='bg-white cursor-pointer z-40 p-2 relative rounded-full hover:bg-[#f3f6f9] mt-4'
                                >
                                    <RiDeleteBin6Line className='text-lightBlue text-xl' />
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default NecklabelForm
