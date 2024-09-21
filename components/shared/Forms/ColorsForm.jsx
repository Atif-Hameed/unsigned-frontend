import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import CustomTooltip from '../CustomTooltip';
import { Colors } from '@/data';



const ColorsForm = () => {
    return (
        <div className='flex items-start gap-3'>
            <div className='w-[75%] bg-lightBackground p-4 rounded-3xl'>
                {/* heading */}
                <div className='flex items-center gap-3 justify-between w-full'>
                    <p className='sm:text-xl text-lg font-semibold text-dark'>Choose your fabric color</p>
                    <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                </div>

                {/* Color options */}
                <div className='flex flex-wrap gap-4 mt-4'>
                    {Colors.map((color, index) => (
                        <CustomTooltip
                            key={index}
                            tooltipText={<span className='whitespace-nowrap'>{color.label}<br/>{color.title}</span>}
                        >
                            <div
                                className='w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer'
                                style={{ backgroundColor: color.colorCode }}
                            ></div>
                        </CustomTooltip>
                    ))}
                </div>
            </div>

            <div className='w-[25%]'></div>
        </div>
    );
};

export default ColorsForm;
