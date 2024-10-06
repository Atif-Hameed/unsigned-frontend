/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useContext, useState, useEffect } from 'react';
import { HiQuestionMarkCircle } from "react-icons/hi";
import CustomRadioButton from '@/components/shared/CustomRadioButton';
import Image from 'next/image';
import NumberInput from '@/components/shared/NumberInput';
import { OrdersData } from '@/data/order-form-data';
import CustomDataUpload from '@/components/shared/CustomDataUpload';
import { usePathname } from 'next/navigation';
import CustomTooltip from '@/components/shared/CustomTooltip';
import { MyContext } from '@/components/provider/context-provider';

const Fit = () => {
    const path = usePathname();
    const currentOrder = OrdersData.find(order => path.includes(order.category));

    // Get formData and setFormData from MyContext
    const { formData, setFormData } = useContext(MyContext);

    if (!currentOrder) {
        return <div>No matching fit data found for this category.</div>;
    }

    // Local state to manage fit data
    const [fitData, setFitData] = useState(currentOrder.fitData);
    const [selectedFit, setSelectedFit] = useState(currentOrder.fitOptions[0].value);

    // Local state to manage custom data (comments and file)
    const [customData, setCustomData] = useState({
        comments: '',
        file: null,
    });

    // Effect to update context whenever local fitData, selectedFit, or customData changes
    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            fit: {
                fit_type: selectedFit,
                fit_values: fitData,
                custom_data: customData,  // Include custom data in fit object
            },
            category: currentOrder.type // Update the type or other relevant details
        }));
    }, [fitData, selectedFit, customData, setFormData, currentOrder.type, path]);

    // Handler to update the fit data
    const handleChange = (index, sizeKey, value) => {
        const newFitData = [...fitData];
        newFitData[index][sizeKey] = value; // Update the corresponding size value
        setFitData(newFitData); // Update the local state
    };

    const handleRadioChange = (value) => {
        setSelectedFit(value);
    };

    // Handlers for custom data (comments and file)
    const handleFileChange = (file) => {
        setCustomData((prevCustomData) => ({
            ...prevCustomData,
            file,
        }));
    };

    const handleTextareaChange = (value) => {
        setCustomData((prevCustomData) => ({
            ...prevCustomData,
            comments: value,
        }));
    };

    // Extract size headers from the keys of the first entry in fitData
    const sizeHeaders = Object.keys(currentOrder?.fitData[0]).filter(key => key !== 'name');

    return (
        <div className='w-full flex items-start flex-wrap gap-4'>
            <div className='lg:w-[19%] w-full flex flex-col gap-3'>
                <div className='bg-lightBackground p-10'>
                    <div className='flex items-center gap-1 mb-2'>
                        <h1 className=' w-fit lg:text-2xl text-xl font-bold text-dark '>
                            Choose your fit
                        </h1>
                        <div>
                            <CustomTooltip width='20rem' tooltipText={'Either select a pre-engineered fit or create a custom fit, meaning that you can adapt all measurements of the standard product for your own silhouette. Make sure to have a PLUS or ADVANCED subscription to access the custom fit feature ;)'}>
                                <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                            </CustomTooltip>
                        </div>
                    </div>
                    {currentOrder.fitOptions.map((fitOption, index) => (
                        <CustomRadioButton
                            key={index}
                            name='radio'
                            label={fitOption.label}
                            value={fitOption.value}
                            onChange={handleRadioChange}
                            isChecked={selectedFit === fitOption.value}
                        />
                    ))}
                </div>

                {/* CustomDataUpload component for handling file and comments */}
                <CustomDataUpload
                    onFileChange={handleFileChange}
                    onTextareaChange={handleTextareaChange}
                    file={customData.file}
                    textareaValue={customData.comments}
                />
            </div>

            <div className='w-full flex-1 bg-lightBackground lg:p-10 p-5 '>
                <div className='flex items-center gap-1'>
                    <h1 className=' lg:text-3xl text-xl font-bold text-dark'>
                        Fill in the size chart
                    </h1>
                    <div>
                        <CustomTooltip width='25rem' tooltipText={"Fill in all measurements here. If you don't want a specific size, fill in that size with zeros [ 0 ]. If you want to customize more than just the dimensions (e.g. delete or add pockets, 3-part hood, ...), please note it in the comment box and include specific drawings with according measurements."}>
                            <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                        </CustomTooltip>
                    </div>
                </div>

                <div className='flex justify-between flex-wrap items-start'>
                    <div className='lg:w-[55%] w-full'>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-1 text-center text-sm"></th>
                                        {sizeHeaders.map((size) => (
                                            <th key={size} className="px-1 text-center text-sm">{size.toUpperCase()}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {fitData.map((e, i) => (
                                        <tr key={i}>
                                            <td className="px-1 lg:w-48 py-2 whitespace-normal text-sm text-start">
                                                <div className='flex items-center gap-2'>
                                                    <div className='bg-dark text-white px-2 pt-0.5 rounded-full'>
                                                        {1 + i}
                                                    </div>
                                                    {e.name}
                                                </div>
                                            </td>
                                            {sizeHeaders.map((size) => (
                                                <td key={size} className="px-1 w-16 py-2 whitespace-nowrap text-sm text-start">
                                                    <NumberInput
                                                        value={e[size]}
                                                        onChange={(e) => handleChange(i, size, e.target.value)} // Pass the index and size key to the handler
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='lg:w-[45%] w-full h-full'>
                        <Image alt='Shirt design' src={currentOrder.fitImg} className='w-full object-cover object-center h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fit;
