'use client'
import MaxContainer from '@/components/layout/MaxContainer';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/images/logoSmall.png';
import CustomInput from '@/components/shared/CustomInput';
import Button from '@/components/shared/Button';
import TrnaslateButton from '@/components/shared/TrnaslateButton';
import { useTranslation } from 'next-i18next';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";
import Link from 'next/link';


const Page = () => {
    const [activeTab, setActiveTab] = useState('1');
    const { t } = useTranslation();

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
        { name: t('personalData'), id: '1' },
        { name: t('companyData'), id: '2' },
        { name: t('shippingBillingAddress'), id: '3' }
    ];

    const renderActiveTab = () => {
        switch (activeTab) {
            case '1':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <div className=' flex justify-around w-full md:flex-row flex-col items-center gap-12 md:px-12 mt-2'>
                                <div className='w-full'>
                                    <h1 className='text-xl'>Contact</h1>

                                    <CustomInput
                                        type={'text'}
                                        label={t('firstName')}
                                        name={'firstName'}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('lastName')}
                                        name={'lastName'}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('phoneNumber')}
                                        name={'phone'}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'email'}
                                        label={t('email')}
                                        name={'email'}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='w-full'>
                                    <h1 className='text-xl'>Social media</h1>

                                    <CustomInput
                                        type={'text'}
                                        label={t('Instagram page')}
                                        name={'instagram'}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('Facebook page')}
                                        name={'facebook'}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('LinkedIn page')}
                                        name={'linkedIn'}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                );
            case '2':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>

                            <div className=' flex justify-around w-full md:flex-row flex-col items-center gap-12 md:px-12 mt-2'>
                                <div className='w-full'>
                                    <h1 className='text-xl'>Company</h1>

                                    <CustomInput
                                        type={'text'}
                                        label={t('brandName')}
                                        name={'brandName'}
                                        value={formData.brandName}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('vat')}
                                        name={'vat'}
                                        value={formData.vat}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('companyWebsite')}
                                        name={'companyWebsite'}
                                        value={formData.companyWebsite}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='w-full'>
                                    <h1 className='text-xl'>Company Social media</h1>

                                    <CustomInput
                                        type={'text'}
                                        label={t('Instagram page')}
                                        name={'instagram'}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('Facebook page')}
                                        name={'facebook'}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('LinkedIn page')}
                                        name={'linkedIn'}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                );
            case '3':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <div className=' flex justify-around w-full md:flex-row flex-col items-center gap-12 md:px-12 mt-2'>
                                <div className='w-full mt-3'>
                                    <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>{t('billingAddress')}</h1>
                                    <CustomInput
                                        type={'text'}
                                        label={t('addressLine1')}
                                        name={'billingAddress1'}
                                        value={formData.billingAddress1}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('addressLine2')}
                                        name={'billingAddress2'}
                                        value={formData.billingAddress2}
                                        onChange={handleChange}
                                    />
                                    <div className='w-full flex gap-2'>
                                        <div className='w-[40%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={t('zipCode')}
                                                name={'billingZipCode'}
                                                value={formData.billingZipCode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='w-[60%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={t('city')}
                                                name={'billingCity'}
                                                value={formData.billingCity}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <CustomInput
                                        type={'text'}
                                        label={t('country')}
                                        name={'billingCountry'}
                                        value={formData.billingCountry}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='w-full mt-3'>
                                    <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>{t('deliveryAddress')}</h1>

                                    <CustomInput
                                        type={'text'}
                                        label={t('addressLine1')}
                                        name={'deliveryAddress1'}
                                        value={formData.deliveryAddress1}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('addressLine2')}
                                        name={'deliveryAddress2'}
                                        value={formData.deliveryAddress2}
                                        onChange={handleChange}
                                    />
                                    <div className='w-full flex gap-2'>
                                        <div className='w-[40%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={t('zipCode')}
                                                name={'deliveryZipCode'}
                                                value={formData.deliveryZipCode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='w-[60%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={t('city')}
                                                name={'deliveryCity'}
                                                value={formData.deliveryCity}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <CustomInput
                                        type={'text'}
                                        label={t('country')}
                                        name={'deliveryCountry'}
                                        value={formData.deliveryCountry}
                                        onChange={handleChange}
                                    />
                                    <div className='flex items-center gap-2 w-full justify-start mt-2'>
                                        <input type="checkbox" className='h-5 w-5' name="" id="" />
                                        <p className='text-sm text-labelColor'>{t('samedelivery')}</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                );
        }
    };

    // Function to handle form submission and gather all the data
    const handleSubmit = () => {
        console.log('Form Data:', formData);
    };

    return (
        <div className=''>
            <div className=' w-full  sm:px-6 px-4 flex lg:flex-row flex-col justify-start lg:items-start items-center'>

                {/* main container */}
                <div className='flex flex-col  w-full md:p-12  sm:px-6'>
                    <div className='flex md:items-center md:flex-row flex-col gap-4'>
                        <Link href={'/dashboard/drafts'} className='p-3 w-fit rounded-full text-lightBlueText bg-lightBackground'>
                            <HiOutlineArrowLeft className='text-2xl' />
                        </Link>
                        <div className='flex md:gap-0 gap-2 md:flex-nowrap flex-wrap'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full px-6 rounded-full sm:text-lg sm:whitespace-nowrap whitespace-normal text-sm py-3 ${activeTab === tab.id ? 'bg-labelColor text-white' : 'bg-[#f9f9f9] border  text-dark'}`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='flex lg:items-start items-center lg:flex-row flex-col mt-12 w-full justify-between'>
                        <div className='p-6 rounded-full bg-lightBackground  relative'>
                            <IoPersonSharp className='lg:text-[8rem] text-[6rem]' />
                            <IoIosAddCircleOutline className='lg:text-5xl text-4xl absolute -bottom-3 left-1/2 -translate-x-1/2 text-lightBlue' />
                        </div>
                        <div className=' w-full flex flex-col  items-center h-full rounded-xl bg-white'>
                            {renderActiveTab()}
                        </div>
                    </div>

                    <div className='flex justify-between lg:flex-row flex-col my-4 gap-6 sm:text-base text-sm'>
                        {
                            activeTab === '1' ?
                                <div className='flex items-center lg:w-auto w-full  flex-wrap gap-4'>
                                    <button className='flex items-center gap-2 text-gray-600'><MdOutlineDeleteForever className='text-xl mb-1' /> Delete my profile</button>
                                    <button className='flex items-center gap-2 text-gray-600'> Change email</button>
                                    <button className='flex items-center gap-2 text-gray-600'> Change password</button>
                                </div>
                                :
                                <p className='opacity-0'>-</p>
                        }

                        <div className='flex gap-2 lg:w-auto w-full justify-end'>
                            <button className='p-3 rounded-full px-6 bg-lightBackground text-gray-600'>Cancel</button>
                            <button className='p-3 rounded-full px-6 bg-lightBlue text-white'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
