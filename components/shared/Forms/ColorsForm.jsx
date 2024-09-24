'use client'
import React, { useState } from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa'; // For the tick mark
import CustomTooltip from '../CustomTooltip';
import { Colors } from '@/data';
import CustomInputTransparent from '../CustomInputTransparent';
import CustomDataUpload from '../CustomDataUpload';

const ColorsForm = ({ selectedColor, onColorSelect, customColor, onCustomColorChange, file, onFileChange, textareaValue, onTextareaChange }) => {
    // Handle color selection
    const handleColorSelect = (color) => {
        onColorSelect(color);  // Pass the selected color to the parent component
    };

    return (
        <div className='flex items-start flex-wrap gap-3'>
            <div className='lg:w-[74%] w-full bg-lightBackground p-4 rounded-3xl'>
                {/* Heading */}
                <div className='flex items-center gap-3  w-full'>
                    <p className='lg:text-3xl sm:text-2xl text-lg font-medium text-dark'>Choose your fabric color</p>
                    <CustomTooltip width='30rem' tooltipText={'Basic colorways are BLACK and WHITE. Any other color is done with garment dye. Either select a pre-engineered color way or fill in your own color from the Pantone TCX range.'}>
                        <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                    </CustomTooltip>
                </div>

                {/* Color options */}
                <div className='flex flex-wrap gap-4 mt-4'>
                    {Colors.map((color, index) => (
                        <CustomTooltip
                            key={index}
                            tooltipText={<span className='whitespace-nowrap'>{color.label}<br />{color.title}</span>}
                        >
                            <div
                                className={`w-12 h-12 rounded-full border-2 cursor-pointer flex items-center justify-center ${selectedColor === color.colorCode ? 'border-lightBlueText' : 'border-gray-300'
                                    }`}
                                style={{ backgroundColor: color.colorCode }}
                                onClick={() => handleColorSelect(color.colorCode)}
                            >
                                {selectedColor === color.colorCode && <FaCheck className='text-lightBlueText text-xl' />}
                            </div>
                        </CustomTooltip>
                    ))}
                </div>

                <div className='mt-16'>
                    <p className=' sm:text-2xl text-lg font-medium text-dark'>Custom Color</p>
                    <div className='w-full mt-4'>
                        <CustomInputTransparent
                            type={'text'}
                            label={'Custom Color'}
                            bgColorLabel='#eeeeee'
                            onChange={onCustomColorChange} // Trigger on change
                            value={customColor} // Bind value from parent component
                            name={'customColor'}
                        />
                    </div>
                </div>
            </div>

            <div className='lg:w-[24%] w-full'>
                <CustomDataUpload
                    file={file}
                    onFileChange={onFileChange}
                    textareaValue={textareaValue}
                    onTextareaChange={onTextareaChange}
                />
            </div>
        </div>
    );
};

export default ColorsForm;
