'use client'
import React from 'react';

const NumberInput = ({ name, value, onChange }) => {
    const handleFocus = (e) => {
        // if (e.target.value === '0') {
        //     e.target.value = ''; // Clear the value if it's 0
        // }
    };

    const handleBlur = (e) => {
        // if (e.target.value === '') {
        //     e.target.value = 0; // Restore 0 if input is empty
        // }
        // onChange(e); // Ensure parent receives the updated value
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue.length > 1 && newValue.startsWith('0')) {
            // Remove leading zero if the user types a new number
            e.target.value = newValue.replace(/^0+/, '');
        }
        onChange(e); // Pass the updated value to the parent
    };

    return (
        <div className='bg-[#f7f7f7] rounded-2xl border  border-transparent py-3 w-full hover:border-lightBlue'>
            <input
                type="number"
                name={name}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className='bg-transparent text-dark text-center flex justify-center  min-w-12 w-full outline-none'
                min="0"
                max={1000}
            />
        </div>
    );
};

export default NumberInput;
