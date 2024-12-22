'use client'
import MaxContainer from '@/components/layout/MaxContainer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '@/assets/images/logoSmall.png';
import CustomInput from '@/components/shared/CustomInput';
import Button from '@/components/shared/Button';
import TrnaslateButton from '@/components/shared/TrnaslateButton';
import { useTranslation } from 'next-i18next';
import { useRouter, useSearchParams } from 'next/navigation';
import { updateUserData } from '@/app/action/profile-update-action';

const Page = () => {
    const [uid, setUid] = useState('');

    useEffect(() => {
        // Get the UID from local storage
        const storedUid = localStorage.getItem('uid'); // Replace 'uid' with the actual key used to store the UID
        if (storedUid) {
            setUid(storedUid); // Set the UID in the state
        }
    }, []);
    // const [email, setEmail] = useState("");
    const [activeTab, setActiveTab] = useState('1');
    const [isSameDelivery, setIsSameDelivery] = useState(false);
    const router = useRouter();
    const { t } = useTranslation();
    const params = useSearchParams();
    const email = params.get('email');
    const emailParam = params.get('email');
    // console.log(user)
    // Unified state for all form sections
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: emailParam || '',
        brandName: '',
        vat: '',
        companyWebsite: '',
        instaLink: '',
        billingAddress: {
            address1: '',
            address2: '',
            zipCode: '',
            city: '',
            country: ''
        },
        deliveryAddress: {
            address1: '',
            address2: '',
            zipCode: '',
            city: '',
            country: ''
        }
    });


    useEffect(() => {
        // Update email in formData if emailParam changes
        if (emailParam) {
            setFormData(prev => ({
                ...prev,
                email: emailParam
            }));
        }
    }, [emailParam]);

    // Handle input changes for the entire form
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('billing')) {
            const field = name.replace('billing', '').charAt(0).toLowerCase() + name.replace('billing', '').slice(1);
            setFormData((prev) => ({
                ...prev,
                billingAddress: {
                    ...prev.billingAddress,
                    [field]: value
                }
            }));
        } else if (name.startsWith('delivery')) {
            const field = name.replace('delivery', '').charAt(0).toLowerCase() + name.replace('delivery', '').slice(1);
            setFormData((prev) => ({
                ...prev,
                deliveryAddress: {
                    ...prev.deliveryAddress,
                    [field]: value
                }
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Handle checkbox change
    const handleCheckboxChange = () => {
        setIsSameDelivery(!isSameDelivery);
        if (!isSameDelivery) {
            // If checked, copy billing address to delivery address
            setFormData((prev) => ({
                ...prev,
                deliveryAddress: { ...prev.billingAddress }
            }));
        }
    };


    const handleNextStep = async () => {
        console.log('Current Active Tab:', activeTab);
        try {
            const data = await updateUserData(uid, formData); // Ensure data is updated
            console.log(data)
            setActiveTab((prev) => (prev < (tabs.length + 1) - 1 ? String(Number(prev) + 1) : prev));
        } catch (error) {
            console.error('Error updating user data:', error);
            // Optionally display an error message to the user
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
                            <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor'>{t('howGreet')}</h1>
                            <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                                <CustomInput
                                    type={'text'}
                                    label={t('firstName')}
                                    name={'firstName'}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    isRequired={true}
                                />
                                <CustomInput
                                    type={'text'}
                                    label={t('lastName')}
                                    name={'lastName'}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    isRequired={true}
                                />
                                <CustomInput
                                    type={'text'}
                                    label={t('phoneNumber')}
                                    name={'phone'}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    isRequired={true}
                                />
                                <CustomInput
                                    type={'email'}
                                    label={t('email')}
                                    name={'email'}
                                    value={emailParam}
                                />
                                <p className='text-xs w-full text-labelColor text-start'>{t('requiredField')}</p>
                                <div className='w-full mt-6'>
                                    <Button label={t('continue')} onClick={handleNextStep} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '2':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor'>{t('brandInfo')}</h1>
                            <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
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
                                <CustomInput
                                    type={'text'}
                                    label={t('instaLink')}
                                    name={'instaLink'}
                                    value={formData.instaLink}
                                    onChange={handleChange}
                                />
                                <p className='text-xs w-full text-labelColor text-start'>{t('requiredField')}</p>
                                <div className='w-full mt-6 gap-4 flex justify-between items-center'>
                                    <button onClick={handleNextStep} className='rounded-full text-lightBlueText hover:bg-sky-300 bg-sky-100 py-3 px-5'>
                                        {t('skip')}
                                    </button>
                                    <Button label={t('continue')} onClick={handleNextStep} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '3':
                return (
                    <div className='w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor'>{t('billingDeliveryAddress')}</h1>
                            <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                                <div className='w-full mt-3'>
                                    <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>{t('billingAddress')}</h1>
                                    <CustomInput
                                        type="text"
                                        label={t('addressLine1')}
                                        name="billingAddress1"
                                        value={formData.billingAddress.address1}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        type={'text'}
                                        label={t('addressLine2')}
                                        name={'billingAddress2'}
                                        value={formData.billingAddress.address2}
                                        onChange={handleChange}
                                    />
                                    <div className='w-full flex gap-2'>
                                        <div className='w-[40%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={t('zipCode')}
                                                name={'billingZipCode'}
                                                value={formData.billingAddress.zipCode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='w-[60%]'>
                                            <CustomInput
                                                type={'text'}
                                                label={t('city')}
                                                name={'billingCity'}
                                                value={formData.billingAddress.city}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <CustomInput
                                        type={'text'}
                                        label={t('country')}
                                        name={'billingCountry'}
                                        value={formData.billingAddress.country}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Checkbox for Same Delivery Address */}
                                <div className='w-full mt-3'>
                                    <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>{t('deliveryAddress')}</h1>
                                    <div className='flex items-center gap-2 w-full justify-start mt-2'>
                                        <input
                                            type="checkbox"
                                            className='h-5 w-5'
                                            checked={isSameDelivery}
                                            onChange={handleCheckboxChange}
                                        />
                                        <p className='text-sm text-labelColor'>{t('samedelivery')}</p>
                                    </div>

                                    {/* Conditionally hide delivery address form */}
                                    {!isSameDelivery && (
                                        <>
                                            <CustomInput
                                                type={'text'}
                                                label={t('addressLine1')}
                                                name={'deliveryAddress1'}
                                                value={formData.deliveryAddress.address1}
                                                onChange={handleChange}
                                            />
                                            <CustomInput
                                                type={'text'}
                                                label={t('addressLine2')}
                                                name={'deliveryAddress2'}
                                                value={formData.deliveryAddress.address2}
                                                onChange={handleChange}
                                            />
                                            <div className='w-full flex gap-2'>
                                                <div className='w-[40%]'>
                                                    <CustomInput
                                                        type={'text'}
                                                        label={t('zipCode')}
                                                        name={'deliveryZipCode'}
                                                        value={formData.deliveryAddress.zipCode}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='w-[60%]'>
                                                    <CustomInput
                                                        type={'text'}
                                                        label={t('city')}
                                                        name={'deliveryCity'}
                                                        value={formData.deliveryAddress.city}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <CustomInput
                                                type={'text'}
                                                label={t('country')}
                                                name={'deliveryCountry'}
                                                value={formData.deliveryAddress.country}
                                                onChange={handleChange}
                                            />
                                        </>
                                    )}
                                </div>

                                <div className='w-full mt-6 flex justify-between items-center'>
                                    <button onClick={handleSubmit} className='rounded-full text-lightBlueText hover:bg-sky-300 bg-sky-100 py-3 px-5'>
                                        {t('skip')}
                                    </button>
                                    <div className='w-fit'>
                                        <Button label={t('continue')} onClick={handleSubmit} />
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
        handleNextStep();
        console.log('Form Data:', formData);
        router.push('/dashboard')

    };

    return (
        <MaxContainer>
            <div className='relative min-h-screen w-full sm:px-6 px-4 flex lg:flex-row flex-col justify-center lg:items-start items-center'>
                {/* logo */}
                <div className='lg:absolute flex justify-center top-0 left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                {/* <div className='absolute right-10 top-3' >
                    <TrnaslateButton />
                </div> */}

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
