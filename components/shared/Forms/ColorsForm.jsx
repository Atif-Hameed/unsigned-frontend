'use client';
import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa'; // For the tick mark
import CustomTooltip from '../CustomTooltip';
import { Colors } from '@/data';
import CustomInputTransparent from '../CustomInputTransparent';
import CustomDataUpload from '../CustomDataUpload';

const ColorsForm = ({ selectedColor, onColorSelect, customColor, onCustomColorChange, file, onFileChange, textareaValue, onTextareaChange, error }) => {
    // Handle color selection
    const handleColorSelect = (color) => {
        if (selectedColor === color) {
            // If the clicked color is already selected, unselect it by passing null
            onColorSelect(null);
        } else {
            onColorSelect(color);
        }
    };

    return (
        <div className='flex items-start flex-wrap gap-3'>
            <div className='lg:w-[74%] w-full bg-lightBackground sm:p-4 p-3 '>
                {/* Heading */}
                <div className='flex items-center sm:gap-3 gap-2  w-full'>
                    <p className='lg:text-3xl sm:text-2xl text-lg font-medium text-dark'>Choose your fabric color</p>
                    <CustomTooltip width='lg:w-[32rem] sm:w-[20rem] w-[9rem]' tooltipText={'You can select one of our colors or enter your own by providing the Pantone code in the box.'}>
                        <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                    </CustomTooltip>
                </div>

                {/* Color options */}
                <div className='flex flex-wrap gap-3 mt-4 md:px-0 sm:px-6 px-4'>
                    {Colors.map((color, index) => (
                        <CustomTooltip
                            width='sm:w-[10rem] w-[7rem]'
                            key={index}
                            tooltipText={<span className='sm:whitespace-nowrap'>{color.label}<br />{color.title}</span>}
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
                    <div className='w-full sm:mt-4'>
                        <CustomInputTransparent
                            type={'text'}
                            label={'Please provide us with a Pantone Code of your choice '}
                            bgColorLabel='#eeeeee'
                            onChange={onCustomColorChange} // Trigger on change
                            value={customColor} // Bind value from parent component
                            name={'customColor'}
                        />
                    </div>
                </div>
                {error && (
                    <p className="text-red-500">{error}</p>
                )}
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
