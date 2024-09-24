'use client';

import { useTranslation } from 'next-i18next'
import React, { useState, useRef, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const CustomInput = ({ type, label, id, name, onChange, value, style, inputStyle, isRequired = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputType, setInputType] = useState(type);
    const [error, setError] = useState(""); // State to handle error messages
    const inputRef = useRef(null);
    const { t } = useTranslation()

    // If the input has a predefined value, ensure the label starts in the "focused" position
    useEffect(() => {
        if (value) {
            setIsFocused(true);
        }
    }, [value]);

    const handleFocus = () => {
        setIsFocused(true);
        setError(''); // Clear error on focus
    };

    const handleBlur = (e) => {
        const { value } = e.target;
        setIsFocused(value !== '');

        // Required validation
        if (isRequired && !value) {
            setError(`${label} ${t('isRequire')}`);
            return;
        }

        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                setError('Email must be a valid email address');
                return;
            }
        }
    };

    const togglePasswordVisibility = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className="relative mt-4 w-full">
            <input
                ref={inputRef}
                id={id}
                name={name}
                type={inputType}
                onChange={onChange}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`peer w-full border  text-dark rounded-full ${inputStyle} px-7 py-2 focus:outline-none transition-all duration-200
                ${error ? 'border-red-500' : 'border-labelColor focus:border-lightBlue'} 
                ${isFocused ? 'sm:py-4 py-3.5' : 'sm:py-4 py-3.5'}`}
                required={isRequired} // Apply 'required' attribute if 'isRequired' is true
            />
            <label
                htmlFor={id}
                onClick={() => inputRef.current.focus()}
                className={`absolute left-[5%] transition-all duration-200 ${style} bg-white px-1 cursor-text
                ${error ? 'text-red-500' : 'text-labelColor'} 
                ${isFocused ? 'sm:-top-2.5 -top-1.5 sm:text-sm text-xs' : 'top-4  sm:text-lg text-sm'}`}>
                {label} {isRequired && <span className="font-medium">*</span>} {/* Show * if required */}
            </label>
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-5 text-lightBlue text-xl">
                    {inputType === 'password' ? <FiEye /> : <FiEyeOff />}
                </button>
            )}
            {error && <p className="mt-1 ml-4 text-sm text-red-500 lowercase">{error}</p>}
        </div>
    );
};

export default CustomInput;
