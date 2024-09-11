'use client'

import React, { useState, useRef } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CustomInput = ({ type, label, id, name, onChange, value }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputType, setInputType] = useState(type);
    const [error, setError] = useState(""); // State to handle error messages
    const inputRef = useRef(null); // Create a ref for the input

    const handleFocus = () => {
        setIsFocused(true);
        setError(""); // Clear error on focus
    };

    const handleBlur = (e) => {
        const { value } = e.target;
        setIsFocused(value !== "");

        // Required validation
        if (!value) {
            setError(`${label} is required`);
            return;
        }

        // Email validation
        if (type === "email" && value) { 
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                setError("Email must be a valid email address");
                return;
            }
        }

    };

    const togglePasswordVisibility = () => {
        setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    return (
        <div className="relative mt-4 w-full">
            <input
                ref={inputRef} // Attach the ref to the input
                id={id}
                name={name}
                type={inputType}
                onChange={onChange}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`peer w-full border text-dark rounded-full px-7 py-2 focus:outline-none transition-all duration-200
                ${error ? "border-red-500" : "border-labelColor focus:border-lightBlue"} 
                ${isFocused ? "py-4" : "py-4"}`}
                required
            />
            <label
                htmlFor={id}
                onClick={() => inputRef.current.focus()} // Use ref to focus input
                className={`absolute left-[5%] transition-all duration-200 bg-white px-1 cursor-text 
                ${error ? "text-red-500" : "text-labelColor"} 
                ${isFocused ? "-top-2.5 text-sm" : "sm:top-3 top-4 text-lg"} `}
            >
                {label} <span className="font-medium">*</span>
            </label>
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-5 text-lightBlue text-xl"
                >
                    {inputType === "password" ? <FiEye /> : <FiEyeOff />}
                </button>
            )}
            {error && <p className="mt-1 ml-4 text-sm text-red-500 lowercase">{error}</p>}
        </div>
    );
};

export default CustomInput;
