'use client';
import React from 'react';
import Heading from '../Heading';
import CustomTooltip from '../CustomTooltip';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import CustomRadioButton from '../CustomRadioButton';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import necklabel from '@/assets/images/Necklabel.png';
import necklabelUpload from '@/assets/images/necklabelUpload.svg';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CustomDataUpload from '../CustomDataUpload';

const NecklabelForm = ({
    selectedColor,
    onTextareaChange,
    onColorSelect,
    selectedLabelOption,
    onLabelOptionSelect,
    selectedMaterialOption,
    onMaterialOptionSelect,
    selectedFile,
    onFileChange,
    onFileRemove,
    customFile, // File for CustomDataUpload
    onCustomFileChange, // Handler for CustomDataUpload file change
    onCustomFileRemove // Handler for CustomDataUpload file remove
}) => {
    const validFileTypes = ['image/svg+xml', 'application/pdf', 'application/postscript'];

    // Handle file upload for the image section
    const handleImageFileChange = (e) => {
        const file = e.target.files[0];
        if (file && validFileTypes.includes(file.type)) {
            onFileChange(file); // Using parent handler for image section
        } else {
            alert('Only .svg, .pdf, .ai, or .eps files are allowed.');
        }
    };

    // Handle file upload for the CustomDataUpload section
    const handleCustomFileChange = (e) => {
        const file = e.target.files[0];
        if (file && validFileTypes.includes(file.type)) {
            onCustomFileChange(file); // Using separate handler for CustomDataUpload
        } else {
            alert('Only .svg, .pdf, .ai, or .eps files are allowed.');
        }
    };

    const Colors = [
        { label: 'White', title: 'White', colorCode: '#ffffff' },
        { label: 'Black', title: 'Black', colorCode: '#000000' }
    ];

    return (
        <div className='w-full flex sm:flex-row flex-col items-start gap-3'>
            <div className='lg:w-[32%] sm:w-[42%] w-full flex flex-col  gap-3'>
                {/* Label Option Section */}
                <div className='p-5 bg-lightBackground rounded-3xl'>
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
                    <div className='p-5 bg-lightBackground rounded-3xl'>
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
                    <div className='p-5 bg-lightBackground rounded-3xl'>
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
                    </div>
                )}
            </div>

            <div className='lg:w-[68%] sm:w-[58%] w-full'>
                {/* Conditionally Render Image Upload Section */}
                {selectedLabelOption === 'standard' && (
                    <div className=' bg-lightBackground justify-between p-5 flex items-center rounded-3xl py-20'>
                        <div className='md:w-[45%] w-[55%]'>
                            <Image alt='' src={necklabel} />
                        </div>
                        <div className='sm:w-[45%] w-[40%]  flex justify-center'>
                            <div className='w-fit relative'>
                                <p className='text-center text-sm text-gray-500'>3cm</p>
                                <div className='flex items-center'>
                                    <Image alt='' src={necklabelUpload} className='z-30 relative' />
                                    <div className='h-full flex justify-center items-center'>
                                        <p className='text-center text-sm text-gray-500'>3cm</p>
                                    </div>
                                </div>

                                <div className='bg-[#d6e2ec] h-[80%] w-[55%] z-20 absolute bottom-2 left-3 cursor-pointer py-3 flex flex-col justify-start gap-2 items-center'>
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
                                    {!selectedFile && (
                                        <div className='bg-lightBlueText p-2 z-40 rounded-full hover:bg-lightBlue'>
                                            <IoCloudUploadOutline className='text-lg text-white' />
                                            <input
                                                type='file'
                                                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                                                onChange={handleImageFileChange} // Handle image upload
                                                accept='.svg,.pdf,.ai,.eps'
                                            />
                                        </div>
                                    )}
                                    {selectedFile && (
                                        <div
                                            onClick={onFileRemove}
                                            className='bg-white cursor-pointer z-40 p-2 relative rounded-full hover:bg-[#f3f6f9] mt-4'
                                        >
                                            <RiDeleteBin6Line className='text-lightBlue text-xl' />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CustomDataUpload Section */}
                <div className='w-full mt-3'>
                    <CustomDataUpload
                        file={customFile} // Custom file for the component
                        onFileChange={handleCustomFileChange} // Separate handler for CustomDataUpload file change
                        onFileRemove={onCustomFileRemove} // Separate handler for CustomDataUpload file remove
                        onTextareaChange={onTextareaChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default NecklabelForm;
