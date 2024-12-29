/* eslint-disable react-hooks/rules-of-hooks */
'use client';
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
    const { formData, setFormData } = useContext(MyContext);

    // Get the current order based on the selected category
    const currentOrder = OrdersData.find(order => formData?.category?.toLowerCase() === order.category.toLowerCase());

    // Handle case where no current order is found
    if (!currentOrder) {
        return <div>No matching fit data found for this category.</div>;
    }

    // Extract the initial selected fit and fit data
    const [selectedFit, setSelectedFit] = useState(
        formData?.fit?.fit_type || currentOrder.fitOptions?.[0]?.value || ''
    );
    const [fitData, setFitData] = useState(
        Array.isArray(formData?.fit?.fit_values)
            ? formData.fit.fit_values
            : Array.isArray(currentOrder[selectedFit])
                ? currentOrder[selectedFit]
                : []
    );

    // Local state for custom data (comments and file)
    const [customData, setCustomData] = useState({
        comments: formData?.fit?.custom_data?.comments || '',
        file: formData?.fit?.custom_data?.file || null,
    });

    // Update formData in the context whenever selectedFit, fitData, or customData changes
    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            fit: {
                fit_type: selectedFit,
                fit_values: fitData,
                custom_data: customData,
            },
        }));
    }, [fitData, selectedFit, customData, setFormData, path]);

    // Update fit data whenever selected fit changes
    useEffect(() => {
        setFitData(currentOrder[selectedFit] || []);
    }, [selectedFit, currentOrder]);

    // Handler for radio button changes
    const handleRadioChange = (value) => {
        setSelectedFit(value);
    };

    // Handler to update fit data for specific size
    const handleChange = (index, sizeKey, value) => {
        const updatedFitData = [...fitData];
        updatedFitData[index][sizeKey] = value;
        setFitData(updatedFitData);
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

    console.log(fitData)

    // Extract size headers dynamically based on fitData
    const sizeHeaders = Object.keys(currentOrder.fitData[0]).filter(key => key !== 'name');

    return (
        <div className='w-full flex items-start flex-wrap gap-4'>
            <div className='lg:w-[19%] w-full flex flex-col gap-3'>
                <div className='bg-lightBackground p-10'>
                    <div className='flex items-center gap-1 mb-2'>
                        <h1 className='w-fit lg:text-2xl text-xl font-bold text-dark'>
                            Choose your fit
                        </h1>
                        <CustomTooltip width='sm:w-[20rem] w-[12rem]' tooltipText={'You can select our fit or create your own by typing in your measurements.'}>
                            <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                        </CustomTooltip>
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

                {/* CustomDataUpload for file and comments */}
                <CustomDataUpload
                    onFileChange={handleFileChange}
                    onTextareaChange={handleTextareaChange}
                    file={customData.file}
                    textareaValue={customData.comments}
                />
            </div>

            <div className='w-full flex-1 bg-lightBackground lg:p-10 sm:p-5 p-3'>
                <div className='flex items-center gap-1'>
                    <h1 className='lg:text-3xl text-xl font-bold text-dark'>Fill in the size chart</h1>
                    <CustomTooltip width='lg:w-[32rem] sm:w-[20rem] w-[11rem]' tooltipText={"Please enter all the measurements you have. If you don't have a specific measurement, enter '0' and we will assist you. If you need to add more dimensions, type your extra measurements in the special request box. You don't need to fill in all the sizes—one is enough."}>
                        <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                    </CustomTooltip>
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
                                    {fitData?.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-1 lg:w-48 py-2 text-start text-sm">
                                                <div className='flex items-center gap-2'>
                                                    <div className='bg-dark text-white px-2 pt-0.5 rounded-full'>{1 + index}</div>
                                                    {item.name}
                                                </div>
                                            </td>
                                            {sizeHeaders.map((size) => (
                                                <td key={size} className="px-1 w-16 py-2 text-start text-sm">
                                                    <NumberInput
                                                        value={item[size]}
                                                        onChange={(e) => handleChange(index, size, e.target.value)}
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
                        <Image alt='Fit design' src={currentOrder.fitImg} className='w-full object-cover object-center h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fit;
