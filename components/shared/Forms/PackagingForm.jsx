'use client'

import React, { useState } from 'react';
import Heading from '../Heading';
import CustomDataUpload from '../CustomDataUpload';
import Image from 'next/image';
import packaging from '../../../assets/images/packaging.png';
import CustomRadioButton from '../CustomRadioButton';

const PackagingForm = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <>
            <div className="md:max-w-6xl">
                <div className="grid grid-cols-1 md:gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <div className="bg-lightBackground p-7 py-10 rounded-3xl">
                            <div className="">
                                <Heading>Choose your packaging</Heading>
                            </div>
                            <p className='py-7 text-gray-700 text-lg'>
                                Do you want us to pack every piece in an unbranded polybag, made from recycled plastic, or have them unpackaged?
                            </p>
                            <div className="flex gap-7 pt-10">
                                <div>
                                    <CustomRadioButton
                                        label={'Neutral Polybag'}
                                        name={'radio'}
                                        onChange={() => handleOptionChange('polybag')}
                                    />
                                    {selectedOption === 'polybag' && (
                                        <p className="text-sm text-gray-500 ml-8">0.25€ per unit</p>
                                    )}
                                </div>
                                <div>
                                    <CustomRadioButton
                                        label={'Unpackaged'}
                                        name={'radio'}
                                        onChange={() => handleOptionChange('unpackaged')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <CustomDataUpload />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <Image src={packaging} alt='packaging' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackagingForm;
