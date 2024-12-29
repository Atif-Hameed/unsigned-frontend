'use client';
import React, { useState, useEffect, useContext } from 'react';
import NumberInput from '../NumberInput';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import Heading from '../Heading';
import { MyContext } from '@/components/provider/context-provider';
import CustomTooltip from '../CustomTooltip';

const QuantityForm = ({ error }) => {
    const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

    // Get form data and setter from context
    const { formData, setFormData } = useContext(MyContext);

    const [totalQuantity, setTotalQuantity] = useState(0);
    // const [error, setError] = useState('');

    const handleInputChange = (size, value) => {
        // Update the quantity in the formData
        const updatedQuantities = {
            ...formData.quantity.quantities,
            [size]: Number(value), // Ensure the value is a number
        };

        // Update form data in context
        setFormData((prevData) => ({
            ...prevData,
            quantity: {
                ...prevData.quantity,
                quantities: updatedQuantities,
            },
        }));
    };

    const handleTextareaChange = (e) => {
        // Update comments in the formData
        setFormData((prevData) => ({
            ...prevData,
            quantity: {
                ...prevData.quantity,
                custom_data: {
                    ...prevData.quantity.custom_data,
                    comments: e.target.value,
                },
            },
        }));
    };

    useEffect(() => {
        // Calculate the total quantity from formData
        const total = Object.values(formData.quantity.quantities).reduce((sum, val) => sum + val, 0);
        setTotalQuantity(total);

        // Show error if the total quantity is less than 50
        // if (total < 50) {
        //     setError('Minimum order quantity is 50 pieces in total.');
        // } else {
        //     setError('');
        //     setTotalQuantity(total);
        // }
    }, [formData.quantity.quantities]);

    return (
        <div className="">
            <div className="bg-lightBackground sm:p-6 p-3 shadow-md">
                <h2 className="text-2xl flex font-semibold mb-4">
                    <Heading>How many items would you like to produce</Heading>
                    <CustomTooltip
                    width='lg:w-[25rem] sm:w-[16rem] w-[8rem] sm:mr-0 mr-10'
                    tooltipText={"Please enter a minimum of 50 in total across the sizes."}
                >
                    <HiQuestionMarkCircle className='text-lightBlue sm:mr-0 mr-7 sm:text-2xl text-xl w-8' />
                </CustomTooltip>
                </h2>

                <div className="flex overflow-auto md:w-[30vw] gap-2 md:gap-4 mb-4">
                    {sizes.map((size) => (
                        <div key={size} className="text-center">
                            <label htmlFor={size} className="block text-sm font-medium text-gray-700">
                                {size}
                            </label>
                            <NumberInput
                                id={size}
                                value={formData.quantity.quantities[size] || 0} // Use context value
                                onChange={(e) => handleInputChange(size, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
                {error && (
                    <p className="text-red-500">{error}</p>
                )}
            </div>

            <textarea
                className="w-full mt-4 bg-transparent text-dark p-4 border border-gray-400 focus:outline-none"
                placeholder="Special requests or comments"
                rows={3}
                value={formData.quantity.custom_data.comments} // Controlled textarea using context
                onChange={handleTextareaChange} // Handle textarea change
            ></textarea>
        </div>
    );
};

export default QuantityForm;
