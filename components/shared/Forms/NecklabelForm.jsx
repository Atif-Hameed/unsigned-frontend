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
import { getFileNameFromUrl, uploadMultiFiles } from '@/app/action/orders-action';

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
    error,
}) => {
    const [isUploading, setIsUploading] = useState(false); // State to manage upload status

    // Handle multiple file uploads
    const handleImageFileChange = async (e) => {
        const files = Array.from(e.target.files); // Get the newly selected files
        const newFiles = [...files];

        // Check the total number of files doesn't exceed the limit (e.g., 5)
        if (selectedFiles.length + newFiles.length > 5) {
            toast.error('You cannot upload more than 5 files.');
            return;
        }

        setIsUploading(true); // Set uploading status
        try {
            const downloadURLs = await uploadMultiFiles(newFiles); // Upload new files and get download URLs
            onFilesChange([...selectedFiles, ...downloadURLs]); // Merge existing and new download URLs
        } catch (error) {
            console.error('Error uploading files:', error);
        } finally {
            setIsUploading(false); // Reset uploading status
        }
    };


    const handleFileRemove = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        onFilesChange(updatedFiles);
    };

    // Display uploaded files with delete option
    const renderUploadedFiles = () => {
        return (selectedFiles || []).map((file, index) => (
            <div key={index} className='relative sm:w-12 w-9 sm:h-12 h-9 bg-lightBlueText flex items-center justify-center rounded-lg'>
                <span className='text-blue-500 font-bold'>{file.type?.split('/')[1]?.toUpperCase()}</span>
                <div className='sm:w-12 w-9 sm:h-12 h-9 bg-lightBlueText flex items-center justify-center rounded-lg'>
                    <span className='text-blue-500 font-bold'>{getFileNameFromUrl(file).split('.').pop()}</span>
                </div>
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

            {/* Uploading Overlay */}
            {isUploading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="text-white ">
                        <p >Uploading...</p>
                    </div>
                </div>
            )}

            <div className='lg:w-[32%] sm:w-[42%] w-full flex flex-col  gap-3'>
                {/* Label Option Section */}
                <div className='sm:p-5 p-3 bg-lightBackground '>
                    <div className='flex items-center gap-3  w-full'>
                        <Heading>Select a label option</Heading>
                        <CustomTooltip width='lg:w-[20rem] sm:w-[17rem] w-[8rem]' tooltipText={'Select whether you want a neck label or not.'}>
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
                    <div className='sm:p-5 p-3 bg-lightBackground '>
                        <div className='flex items-center gap-3 w-full'>
                            <Heading>Choose the material</Heading>
                            <CustomTooltip width='lg:w-[20rem] sm:w-[17rem] w-[9rem]' tooltipText={"We can produce your labels as either printed or woven."}>
                                <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                            </CustomTooltip>
                        </div>
                        <div className='flex flex-col gap-2 mt-3'>
                            <CustomRadioButton
                                value='printed_cotton_canvas_labels'
                                onChange={onMaterialOptionSelect}
                                isChecked={selectedMaterialOption === 'printed_cotton_canvas_labels'}
                                name='materialOption'
                                label={'Printed Cotton Canvas Labels (MOQ 200)'}
                            />
                            <CustomRadioButton
                                value='woven_cotton_canvas_labels'
                                onChange={onMaterialOptionSelect}
                                isChecked={selectedMaterialOption === 'woven_cotton_canvas_labels'}
                                name='materialOption'
                                label={'Woven Cotton Canvas Labels (MOQ 500)'}
                            />
                        </div>
                    </div>
                )}

                {/* Color Selection Section */}
                {selectedLabelOption === 'standard' && (
                    <div className='sm:p-5 p-3 bg-lightBackground '>
                        <div className='flex items-center gap-3  w-full'>
                            <Heading>Choose the label color</Heading>
                            <CustomTooltip width='lg:w-[20rem] sm:w-[14rem] w-[7rem]' tooltipText={"Choose between black or white."}>
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
                    <div className=' bg-lightBackground justify-between relative mb-3 sm:p-5 p-3 flex items-center  sm:pb-0 pb-20 sm:pt-0 pt-8 md:py-0 py-28'>
                        <div className='md:w-[45%] sm:w-[55%] w-1/2 '>
                            <Image alt='' src={necklabel} className='w-full h-full' />
                        </div>
                        <div className='sm:w-[45%]  w-1/2 relative flex justify-center'>
                            <div className='w-full relative space-y-2 flex flex-col items-center'>

                                {/* Display uploaded files */}
                                <div className='flex'>
                                    {renderUploadedFiles()}
                                </div>

                                {/* Upload and delete button */}
                                <div className='flex items-center w-full relative'>
                                    <Image alt='' src={neckLabelUplaod} className='z-30 w-full ' />

                                    <div className='bg-lightBlueText cursor-pointer absolute right-[40%] top-[20%] sm:p-2 p-1 z-40 rounded-full hover:bg-lightBlue'>
                                        <IoCloudUploadOutline className='sm:w-6 w-4 sm:h-6 h-4 text-white' />
                                        <input
                                            type="file"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            multiple
                                            onChange={handleImageFileChange}
                                            accept="image/*"
                                        />
                                    </div>
                                </div>

                                <div className='md:w-full w-[220px] text-gray-700 lg:text-xs text-[10px] absolute xl:-bottom-[25%] lg:-bottom-[40%] sm:bottom-[80%] -bottom-[80%] text-center sm:-left-[60%] -left-[80%]'>
                                    <p>Please provide us with every Size Label for every Size. For example, if you have 5 Sizes you need to upload 5 files, one with S one with M one with L and so on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <CustomDataUpload file={customFile} onFileChange={onCustomFileChange} onFileRemove={onCustomFileRemove} />
            </div>
        </div>
    );
};

export default NecklabelForm;
