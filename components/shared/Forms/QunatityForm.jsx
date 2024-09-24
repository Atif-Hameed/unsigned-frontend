'use client'
import React, { useState, useEffect } from 'react'
import NumberInput from '../NumberInput';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import Heading from '../Heading';

const QunatityForm = () => {
    const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const [quantities, setQuantities] = useState({
        XXS: 0,
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        XXL: 0
    });
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [error, setError] = useState('');

    const handleInputChange = (size, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [size]: value
        }));
    };

    useEffect(() => {
        const total = Object.values(quantities).reduce((sum, val) => sum + Number(val), 0);
        setTotalQuantity(total);
    }, [quantities]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (totalQuantity < 50) {
            setError('Minimum order quantity is 50 pieces in total.');
        } else {
            setError('');
            // Proceed with form submission logic
            console.log('Form submitted with quantities:', quantities);
        }
    };

    return (
        <div className="md:max-w-6xl">
            <form onSubmit={handleSubmit}>
                <div className="bg-lightBackground p-6 rounded-3xl shadow-md">
                    <h2 className="text-2xl flex font-semibold mb-4">
                        <Heading>How many items would you like to produce</Heading>
                        <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                    </h2>

                    <div className="grid grid-cols-7 md:w-[30vw] gap-2 md:gap-4 mb-4">
                        {sizes.map((size) => (
                            <div key={size} className="text-center">
                                <label htmlFor={size} className="block text-sm font-medium text-gray-700">
                                    {size}
                                </label>
                                <NumberInput
                                    id={size}
                                    value={quantities[size]}
                                    onChange={(e) => handleInputChange(size, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>

                <textarea
                    className="w-full mt-4 bg-transparent text-lightBlue p-4 border border-gray-400 rounded-3xl focus:outline-none"
                    placeholder="Special requests or comments"
                    rows={3}
                ></textarea>
            </form>
        </div>
    );
};

export default QunatityForm;
