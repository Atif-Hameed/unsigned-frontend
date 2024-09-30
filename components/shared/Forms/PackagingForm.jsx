'use client'

import React, { useState } from 'react';
import Heading from '../Heading';
import CustomDataUpload from '../CustomDataUpload';
import Image from 'next/image';
import packaging from '@/assets/images/ploybag.png';
import polybagEmpty from '@/assets/images/polybagEmpty.png'
import CustomRadioButton from '../CustomRadioButton';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoCloudUploadOutline } from 'react-icons/io5';

const PackagingForm = () => {
    const [selectedOption, setSelectedOption] = useState('polybag');
    const [ownLogo, setOwnLogo] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const handleOwnLogoFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setOwnLogo(file);
        }
    };

    const onOwnLogoFileRemove = () => {
        setOwnLogo(null);
    };

    return (
        <>
            <div className="md:max-w-6xl">
                <div className="grid grid-cols-1 md:gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <div className="bg-lightBackground p-7 py-10">
                            <div>
                                <Heading>Choose your packaging</Heading>
                            </div>
                            <p className='py-7 text-gray-700 text-lg'>
                                Do you want us to pack every piece in an unbranded polybag, made from recycled plastic, or have them unpackaged?
                            </p>
                            <div className="flex gap-7 flex-wrap pt-10">
                                <div>
                                    <CustomRadioButton
                                        label={'Neutral Polybag'}
                                        name={'radio'}
                                        value={'polybag'}
                                        onChange={handleOptionChange}
                                        isChecked={selectedOption === 'polybag'} // Check if polybag is selected
                                    />
                                    {selectedOption === 'polybag' && (
                                        <p className="text-sm text-gray-500 ml-8">0.25€ per unit</p>
                                    )}
                                </div>
                                <div>
                                    <CustomRadioButton
                                        label={'Unpackaged'}
                                        name={'radio'}
                                        value={'unpackaged'}
                                        onChange={handleOptionChange}
                                        isChecked={selectedOption === 'unpackaged'} // Check if unpackaged is selected
                                    />
                                </div>
                                <div>
                                    <CustomRadioButton
                                        label={'Own logo'}
                                        name={'radio'}
                                        value={'ownlogo'}
                                        onChange={handleOptionChange}
                                        isChecked={selectedOption === 'ownlogo'} // Check if ownlogo is selected
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <CustomDataUpload />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        {
                            selectedOption === 'polybag' ? (
                                <Image src={packaging} alt='packaging' />
                            ) : selectedOption === 'ownlogo' ? (
                                <div className='relative w-fit'>
                                    <Image src={polybagEmpty} alt='packaging' />

                                    <div className='z-20 absolute top-12 left-1/2 -translate-x-1/2 cursor-pointer py-3 flex flex-col justify-start gap-2 items-center'>
                                        {/* Display uploaded file type or preview */}
                                        <div>
                                            {ownLogo ? (
                                                <div className='w-12 h-12 bg-lightBlueText flex items-center justify-center rounded-lg'>
                                                    <span className='text-blue-500 font-bold'>
                                                        {ownLogo.type.split('/')[1].toUpperCase()}
                                                    </span>
                                                </div>
                                            ) : (
                                                <p></p>
                                            )}
                                        </div>
                                    </div>

                                    <div className='absolute top-[20%] left-1/2 -translate-x-1/2 z-40'>
                                        {/* Upload button if no file is uploaded */}
                                        {!ownLogo && (
                                            <div className='flex flex-col items-center gap-3'>
                                            <div className='bg-lightBlueText p-2 z-40 rounded-full hover:bg-lightBlue'>
                                                <IoCloudUploadOutline className='text-2xl cursor-pointer text-white' />
                                                <input
                                                    type='file'
                                                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                                                    onChange={handleOwnLogoFileChange} // Handle logo file upload
                                                />
                                            </div>
                                            <p>Upload Own logo</p>
                                            </div>
                                        )}
                                        {/* Delete button if file is uploaded */}
                                        {ownLogo && (
                                            <div
                                                onClick={onOwnLogoFileRemove}
                                                className='bg-white cursor-pointer z-40 p-3 relative rounded-full hover:bg-[#f3f6f9] mt-4'
                                            >
                                                <RiDeleteBin6Line className='text-lightBlue text-2xl' />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackagingForm;
