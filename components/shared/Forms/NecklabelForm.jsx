'use client';
import React, { useState } from 'react';
import Heading from '../Heading';
import CustomTooltip from '../CustomTooltip';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import CustomRadioButton from '../CustomRadioButton';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import necklabel from '@/assets/images/neckLabelNew.png';
import neckLabelUplaod from '@/assets/images/neckLabelUplaod.png';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CustomDataUpload from '../CustomDataUpload';
import toast, { Toaster } from 'react-hot-toast';


const NecklabelForm = ({
    selectedColor,
    onTextareaChange,
    onColorSelect,
    selectedLabelOption,
    onLabelOptionSelect,
    selectedMaterialOption,
    onMaterialOptionSelect,
    selectedFiles = [],
    onFilesChange = () => { },
    onFileRemove = () => { },
    customFile,
    onCustomFileChange,
    onCustomFileRemove,
    error
}) => {

    // Handle multiple file uploads
    const handleImageFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newFiles = [...selectedFiles, ...files];
        if (newFiles.length > 5) {
            toast.error('You cannot upload more than 5 files.');
            return;
        }
        onFilesChange(newFiles);
    };

    const handleFileRemove = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        onFilesChange(updatedFiles);
    };

    // Display uploaded files with delete option
    const renderUploadedFiles = () => {
        return (selectedFiles || []).map((file, index) => (
            <div key={index} className='relative w-12 h-12 bg-lightBlueText flex items-center justify-center rounded-lg'>
                <span className='text-blue-500 font-bold'>{file.type.split('/')[1].toUpperCase()}</span>
                <button
                    className='absolute -bottom-1 z-20 -right-2 bg-white p-1 rounded-full text-red-500'
                    onClick={() => handleFileRemove(index)}
                >
                    <RiDeleteBin6Line className='text-sm' />
                </button>
            </div>
        ));
    };

    const Colors = [
        { label: 'White', title: 'White', colorCode: '#ffffff' },
        { label: 'Black', title: 'Black', colorCode: '#000000' }
    ];

    return (
        <div className='w-full flex sm:flex-row flex-col items-start gap-3'>
            <Toaster />
            <div className='lg:w-[32%] sm:w-[42%] w-full flex flex-col  gap-3'>
                {/* Label Option Section */}
                <div className='p-5 bg-lightBackground '>
                    <div className='flex items-center gap-3  w-full'>
                        <Heading>Select a label option</Heading>
                        <CustomTooltip width='30rem' tooltipText={'Select the label attachment here. Labels get attached with tone-in-tone threads as standard.'}>
                            <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                        </CustomTooltip>
                    </div>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CustomRadioButton
                            value='no_label'
                            onChange={onLabelOptionSelect}
                            isChecked={selectedLabelOption === 'no_label'}
                            name='labelOption'
                            label={'No label'}
                        />
                        <CustomRadioButton
                            value='standard'
                            onChange={onLabelOptionSelect}
                            isChecked={selectedLabelOption === 'standard'}
                            name='labelOption'
                            label={'Standard'}
                        />
                    </div>
                </div>

                {/* Material Option Section */}
                {selectedLabelOption === 'standard' && (
                    <div className='p-5 bg-lightBackground '>
                        <div className='flex items-center gap-3 w-full'>
                            <Heading>Choose the material</Heading>
                            <CustomTooltip width='30rem' tooltipText={"Labels come in different materials. As standard, labels are done in a printed polyester."}>
                                <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                            </CustomTooltip>
                        </div>
                        <div className='flex flex-col gap-2 mt-3'>
                            <CustomRadioButton
                                value='cotton_canvas'
                                onChange={onMaterialOptionSelect}
                                isChecked={selectedMaterialOption === 'cotton_canvas'}
                                name='materialOption'
                                label={'MOQ 200 to Cotton Canvas'}
                            />
                            <CustomRadioButton
                                value='woven_label'
                                onChange={onMaterialOptionSelect}
                                isChecked={selectedMaterialOption === 'woven_label'}
                                name='materialOption'
                                label={'MOQ 500 to Woven Label'}
                            />
                        </div>
                    </div>
                )}

                {/* Color Selection Section */}
                {selectedLabelOption === 'standard' && (
                    <div className='p-5 bg-lightBackground '>
                        <div className='flex items-center gap-3  w-full'>
                            <Heading>Choose the label color</Heading>
                            <CustomTooltip width='30rem' tooltipText={"Labels are in a limited range of colors available."}>
                                <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                            </CustomTooltip>
                        </div>
                        <div className='flex flex-wrap gap-4 mt-4'>
                            {Colors.map((color, index) => (
                                <CustomTooltip key={index} tooltipText={<span>{color.label}<br />{color.title}</span>}>
                                    <div
                                        className={`w-12 h-12 rounded-full border-2 cursor-pointer flex items-center justify-center ${selectedColor === color.colorCode ? 'border-lightBlueText' : 'border-gray-300'}`}
                                        style={{ backgroundColor: color.colorCode }}
                                        onClick={() => onColorSelect(color.colorCode)}
                                    >
                                        {selectedColor === color.colorCode && <FaCheck className='text-lightBlueText text-xl' />}
                                    </div>
                                </CustomTooltip>
                            ))}
                        </div>

                        {error && (
                            <p className="text-red-500">{error}</p>
                        )}
                    </div>
                )}
            </div>

            <div className='lg:w-[68%] sm:w-[58%] w-full'>
                {/* Conditionally Render Image Upload Section */}
                {selectedLabelOption === 'standard' && (
                    <div className=' bg-lightBackground justify-between mb-3 p-5 flex items-center  py-20'>
                        <div className='md:w-[45%] w-[55%]'>
                            <Image alt='' src={necklabel} className='w-full h-full' />
                        </div>
                        <div className='sm:w-[45%] w-[40%] relative flex justify-center'>
                            <div className='w-full relative flex flex-col items-center'>

                                {/* Display uploaded files */}
                                <div className='flex gap-2 mb-4'>
                                    {renderUploadedFiles()}
                                </div>

                                {/* Upload and delete button */}
                                <div className='flex items-center w-full relative'>
                                    <Image alt='' src={neckLabelUplaod} className='z-30 w-full ' />

                                    <div className='bg-lightBlueText cursor-pointer absolute right-[40%] top-[30%] p-2 z-40 rounded-full hover:bg-lightBlue'>
                                        <IoCloudUploadOutline className='text-lg text-white' />
                                        <input
                                            type='file'
                                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                                            onChange={handleImageFileChange}
                                            multiple
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className='w-full text-gray-700 text-xs absolute -bottom-[25%] text-center -left-[60%]'>
                                <p>Please provide us with every Size Label for every Size. For example, if you have 5 Sizes you need to upload 5 files, one with S one with M one with L and so on.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Custom File Upload */}
                <CustomDataUpload
                    file={customFile}
                    onFileChange={onCustomFileChange}
                    onFileRemove={onCustomFileRemove}
                />
            </div>
        </div>
    );
};

export default NecklabelForm;
