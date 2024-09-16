'use client'
import MaxContainer from '@/components/layout/MaxContainer';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/images/mainLogo.png';
import CustomInput from '@/components/shared/CustomInput';
import Button from '@/components/shared/Button';

const Page = () => {
    const [activeTab, setActiveTab] = useState('1');

    // Unified state for all form sections
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        brandName: '',
        vat: '',
        companyWebsite: '',
        instaLink: '',
        billingAddress1: '',
        billingAddress2: '',
        billingZipCode: '',
        billingCity: '',
        billingCountry: '',
        deliveryAddress1: '',
        deliveryAddress2: '',
        deliveryZipCode: '',
        deliveryCity: '',
        deliveryCountry: ''
    });

    // Handle input changes for the entire form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Function to navigate between steps
    const handleNextStep = () => {
        if (activeTab === '1') {
            setActiveTab('2');
        } else if (activeTab === '2') {
            setActiveTab('3');
        }
    };

    const tabs = [
        { name: 'Personal data', id: '1' },
        { name: 'Company data', id: '2' },
        { name: 'Shipping and billing address', id: '3' },
    ];

    const renderActiveTab = () => {
        switch (activeTab) {
            case '1':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor'>How should we greet you?</h1>
                            <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                                <CustomInput
                                    type={'text'}
                                    label={'First Name'}
                                    name={'firstName'}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <CustomInput
                                    type={'text'}
                                    label={'Last Name'}
                                    name={'lastName'}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                <CustomInput
                                    type={'text'}
                                    label={'Phone Number'}
                                    name={'phone'}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <CustomInput
                                    type={'email'}
                                    label={'Email (should auto fill)'}
                                    name={'email'}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <p className='text-xs w-full text-labelColor text-start'>*required field</p>
                                <div className='w-full mt-6'>
                                    <Button label={'Continue'} onClick={handleNextStep} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '2':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor'>Tell us more about your brand</h1>
                            <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                                <CustomInput
                                    type={'text'}
                                    label={'Brand Name'}
                                    name={'brandName'}
                                    value={formData.brandName}
                                    onChange={handleChange}
                                />
                                <CustomInput
                                    type={'text'}
                                    label={'VAT'}
                                    name={'vat'}
                                    value={formData.vat}
                                    onChange={handleChange}
                                />
                                <CustomInput
                                    type={'text'}
                                    label={'Company Website'}
                                    name={'companyWebsite'}
                                    value={formData.companyWebsite}
                                    onChange={handleChange}
                                />
                                <CustomInput
                                    type={'text'}
                                    label={'Instagram Link'}
                                    name={'instaLink'}
                                    value={formData.instaLink}
                                    onChange={handleChange}
                                />
                                <p className='text-xs w-full text-labelColor text-start'>*required field</p>
                                <div className='w-full mt-6'>
                                    <Button label={'Continue'} onClick={handleNextStep} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '3':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor'>What is your billing & delivery address?</h1>
                            <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                                <div className='w-full mt-3'>
                                    <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>Billing address</h1>
                                    <CustomInput
                                        type={'text'}
                                        label={'Address Line 1'}
                                        name={'billingAddress1'}
                                        value={formData.billingAddress1}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={'Address Line 2'}
                                        name={'billingAddress2'}
                                        value={formData.billingAddress2}
                                        onChange={handleChange}
                                    />
                                    <div className='w-full flex gap-2'>
                                        <div className='w-[40%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={'Zip Code'}
                                                name={'billingZipCode'}
                                                value={formData.billingZipCode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='w-[60%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={'City'}
                                                name={'billingCity'}
                                                value={formData.billingCity}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <CustomInput
                                        type={'text'}
                                        label={'Country'}
                                        name={'billingCountry'}
                                        value={formData.billingCountry}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='w-full mt-3'>
                                    <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>Delivery address</h1>
                                    <div className='flex items-center gap-2 w-full justify-start mt-2'>
                                        <input type="checkbox" className='h-5 w-5' name="" id="" />
                                        <p className='text-sm text-labelColor'>Delivery Address Same As Billing</p>
                                    </div>
                                    <CustomInput
                                        type={'text'}
                                        label={'Address Line 1'}
                                        name={'deliveryAddress1'}
                                        value={formData.deliveryAddress1}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={'Address Line 2'}
                                        name={'deliveryAddress2'}
                                        value={formData.deliveryAddress2}
                                        onChange={handleChange}
                                    />
                                    <div className='w-full flex gap-2'>
                                        <div className='w-[40%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={'Zip Code'}
                                                name={'deliveryZipCode'}
                                                value={formData.deliveryZipCode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='w-[60%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={'City'}
                                                name={'deliveryCity'}
                                                value={formData.deliveryCity}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <CustomInput
                                        type={'text'}
                                        label={'Country'}
                                        name={'deliveryCountry'}
                                        value={formData.deliveryCountry}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='w-full mt-6 flex justify-between items-center'>
                                    <button className='rounded-full text-lightBlueText hover:bg-blue-100 py-3 px-5'>
                                        Skip
                                    </button>
                                    <div className='w-fit'>
                                        <Button label={'Continue'} onClick={handleSubmit} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // Function to handle form submission and gather all the data
    const handleSubmit = () => {
        console.log('Form Data:', formData);
    };

    return (
        <MaxContainer>
            <div className='relative min-h-screen w-full sm:px-6 px-4 flex lg:flex-row flex-col justify-center lg:items-start items-center'>
                {/* logo */}
                <div className='lg:absolute flex justify-center -top-[2%] left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                {/* main container */}
                <div className='flex flex-col items-center lg:mt-12 mt-0 p-12 lg:w-1/2 sm:w-[75%] w-full  px-6'>
                    <div className='flex sm:gap-0 gap-2 sm:flex-nowrap flex-wrap'>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                // onClick={() => setActiveTab(tab.id)}
                                className={`w-full px-6 rounded-full text-lg whitespace-nowrap py-3 ${activeTab === tab.id ? 'bg-labelColor text-white ' : 'bg-white border border-labelColor  text-labelColor'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className='mt-12 py-12 w-full flex flex-col items-center h-full rounded-xl bg-white'>
                        {renderActiveTab()}
                    </div>

                  
                </div>
            </div>
        </MaxContainer>
    );
};

export default Page;
