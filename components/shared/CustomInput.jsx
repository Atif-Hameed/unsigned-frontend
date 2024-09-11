'use client'

import React, { useState, useRef } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const CustomInput = ({ type, label, id, name, onChange, value }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputType, setInputType] = useState(type);
    const inputRef = useRef(null); // Create a ref for the input

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => setIsFocused(e.target.value !== "");
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
                className={`peer h-12 w-full border-2 border-gray-300 rounded-full px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-200
          ${isFocused ? "pt-6" : "pt-3"}`}
                required
            />
            <label
                htmlFor={id}
                onClick={() => inputRef.current.focus()} // Use ref to focus input
                className={`absolute left-3 transition-all duration-200 bg-white px-1 cursor-text text-gray-500 ${
                    isFocused ? "-top-2.5 text-sm" : "top-2.5 text-base"
                }`}
            >
                {label}
            </label>
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-500"
                >
                    {inputType === "password" ? <IoMdEye /> : <IoMdEyeOff />}
                </button>
            )}
        </div>
    );
};

export default CustomInput;
