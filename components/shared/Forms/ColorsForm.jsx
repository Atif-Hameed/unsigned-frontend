import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import CustomTooltip from '../CustomTooltip';
import { Colors } from '@/data';
import CustomInput from '../CustomInput';
import CustomInputTransparent from '../CustomInputTransparent';
import CustomDataUpload from '../CustomDataUpload';



const ColorsForm = () => {
    return (
        <div className='flex items-start gap-3'>
            <div className='w-[75%] bg-lightBackground p-4 rounded-3xl'>
                {/* heading */}
                <div className='flex items-center gap-3  w-full'>
                    <p className='lg:text-3xl sm:text-2xl text-lg font-medium text-dark'>Choose your fabric color</p>
                    <CustomTooltip width='30rem' tooltipText={'Basic colorways are BLACK and WHITE. Any other color is done with garment dye. Either select a pre-engineered color way or fill in your own color from the Pantone TCX range.'} >
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
                                className='w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer'
                                style={{ backgroundColor: color.colorCode }}
                            ></div>
                        </CustomTooltip>
                    ))}
                </div>

                <div className='mt-16'>
                    <p className=' sm:text-2xl text-lg font-medium text-dark'>Custom Color</p>
                    <div className='w-full mt-4'>
                        <CustomInputTransparent
                            type={'text'} label={'Custom Color'} bgColorLabel='#eeeeee'
                            onChange={''}
                            value={''}
                            name={''}
                        />
                    </div>
                </div>
            </div>

            <div className='w-[25%]'>
                <CustomDataUpload />
            </div>
        </div>
    );
};

export default ColorsForm;
