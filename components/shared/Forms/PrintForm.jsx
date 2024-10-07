'use client';
import React, { useContext } from 'react';
import Heading from '../Heading';
import CustomTooltip from '../CustomTooltip';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import Image from 'next/image';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import { MyContext } from '@/components/provider/context-provider';
import { OrdersData } from '@/data/order-form-data';

const PrintForm = ({ selectedFile, onFileChange, textarea, onTextareaChange }) => {
    const path = usePathname();
    const currentOrder = OrdersData.find(order => path.includes(order.category));

    // console.log(currentOrder)

    // If no matching data is found for the category, return a message
    if (!currentOrder) {
        return <div>No matching print data found for this category.</div>;
    }

    const handleImageFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileChange(file); // Call the parent handler
        }
    };

    const onFileRemove = () => {
        onFileChange(null); // Call the parent handler to clear the file
    };

    const downloadTemplate = () => {
        const link = document.createElement('a');
        link.href = '../../../public/template.zip';
        link.download = 'template.zip';
        link.click();
    };

    return (
        <div className='w-full'>
            <div className='flex items-center gap-3 w-full'>
                <Heading>Add your customization</Heading>
                <CustomTooltip
                    width='30rem'
                    tooltipText={'This is where it gets really fun! Download the template and drop your designs in there. Make sure to read our PRODUCT GUIDE for an overview of customization options.'}
                >
                    <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                </CustomTooltip>
            </div>

            <p className='my-4'>To make sure we get it right, please do the following:</p>

            <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                <div className='bg-lightBackground flex flex-col items-center gap-10 p-5 '>
                    <h1 className='lg:text-2xl md:text-xl text-lg text-dark font-medium'>1. Download the template and add your design</h1>
                    <div>
                        <Image alt='Template' src={currentOrder.printSimpleImg} className='w-full object-cover' />
                    </div>
                    <button className='text-white px-4 flex items-center gap-2 py-2 bg-lightBlueText rounded-full' onClick={downloadTemplate}>
                        <IoCloudUploadOutline className='text-xl rotate-180' /> Download Template
                    </button>
                </div>

                <div className='bg-lightBackground flex flex-col items-center gap-10 p-5 '>
                    <h1 className='lg:text-2xl md:text-xl text-lg text-dark font-medium'>2. Upload edited template with your design</h1>
                    <div>
                        <Image alt='Print Example' src={currentOrder.printDesignImg} className='w-full object-cover' />
                    </div>

                    <div className='flex items-center justify-center gap-3'>
                        <div>
                            {selectedFile &&
                                <div className='w-12 h-12 bg-lightBlueText flex items-center justify-center rounded-lg'>
                                    <span className='text-blue-500 font-bold'>{selectedFile.type.split('/')[1].toUpperCase()}</span>
                                </div>
                            }
                        </div>
                        {!selectedFile && (
                            <div className='text-white relative flex items-center gap-2 px-4 py-2 bg-lightBlueText rounded-full'>
                                <IoCloudUploadOutline className='text-xl text-white' />
                                <input
                                    type='file'
                                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                                    onChange={handleImageFileChange}
                                    accept='.svg,.pdf,.ai,.eps'
                                />
                                Upload File
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

                <div className='flex flex-col items-center gap3'>
                    <div className='bg-lightBackground p-5 '>
                        <h1 className='lg:text-2xl md:text-xl text-lg text-dark font-medium'>There are only 3 rules of thumb:</h1>
                        <div className='text-sm mt-2'>
                            <p>1. Your designs must be vectorized or high quality PNG</p>
                            <p>2. Indicate your logo with a Pantone Code</p>
                            <p>3. Describe with arrows the positioning and the size of your design </p>
                            <p>4. Write under the design what type of customization it should be, you have the following options: DTG, Screen Printing and Embroidery, Puff print, if you want something else, please write it also under the design </p>
                        </div>
                    </div>
                    <div className='bg-transparent  mt-3 w-full h-full border border-dark p-5'>
                        <textarea
                            className='w-full outline-none bg-transparent h-full'
                            placeholder='special requests or comments'
                            value={textarea}
                            onChange={(e) => onTextareaChange(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintForm;
