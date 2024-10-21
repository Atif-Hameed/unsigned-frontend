'use client'
import MaxContainer from '@/components/layout/MaxContainer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '@/assets/images/logoSmall.png';
import CustomInput from '@/components/shared/CustomInput';
import Button from '@/components/shared/Button';
import TrnaslateButton from '@/components/shared/TrnaslateButton';
import { useTranslation } from 'next-i18next';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IoCloseOutline, IoPersonSharp } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";
import Link from 'next/link';
import { useAuth } from '@/components/provider/auth_context';
import toast, { Toaster } from 'react-hot-toast';
import { deleteUserAccount, updateUserData } from '@/app/action/profile-update-action';
import { useRouter } from 'next/navigation';


const Page = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [Updateloading, setUpdateloading] = useState(false);
    const { user } = useAuth()
    const router = useRouter();

    console.log(user)

    const handleDeleteClick = () => {
        setShowDeleteDialog(true);
    };

    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
    };




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


    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                phone: user.phone || '',
                email: user.email || '',
                brandName: user.brandName || '',
                vat: user.vat || '',
                companyWebsite: user.companyWebsite || '',
                instaLink: user.instaLink || '',
                billingAddress1: user.billingAddress?.address1 || '',
                billingAddress2: user.billingAddress?.address2 || '',
                billingZipCode: user.billingAddress?.zipCode || '',
                billingCity: user.billingAddress?.city || '',
                billingCountry: user.billingAddress?.country || '',
                deliveryAddress1: user.deliveryAddress?.address1 || '',
                deliveryAddress2: user.deliveryAddress?.address2 || '',
                deliveryZipCode: user.deliveryAddress?.zipCode || '',
                deliveryCity: user.deliveryAddress?.city || '',
                deliveryCountry: user.deliveryAddress?.country || ''
            });
        }
    }, [user]);

    // Handle input changes for the entire form
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.name, e.target.value)
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
                            <div className=' flex justify-around w-full md:flex-row flex-col items-start gap-12 md:px-12 mt-2'>
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
                                        value={formData.instaLink}
                                        onChange={handleChange}
                                    />
                                    {/* <CustomInput
                                        type={'text'}
                                        label={t('Facebook page')}
                                        name={'facebook'}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    /> */}
                                    {/* <CustomInput
                                        type={'text'}
                                        label={t('LinkedIn page')}
                                        name={'linkedIn'}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    /> */}

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
                                    {/* <h1 className='text-xl'>Company Social media</h1> */}
                                    <h1 className='text-xl'>.</h1>

                                    {/* <CustomInput
                                        type={'text'}
                                        label={t('Instagram page')}
                                        name={'instagram'}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    /> */}
                                    {/* <CustomInput
                                        type={'text'}
                                        label={t('Facebook page')}
                                        name={'facebook'}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    /> */}
                                    {/* <CustomInput
                                        type={'text'}
                                        label={t('LinkedIn page')}
                                        name={'linkedIn'}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    /> */}

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
    const handleSubmit = async () => {
        console.log('Form Data:', formData);
        setUpdateloading(true);
        try {
            const res = await updateUserData(user?.uid, formData); // Pass the userId and formData to the update function

            // console.log(res)
            toast.success('User data updated successfully!'); // Show success toast
            setUpdateloading(false);
        } catch (error) {
            console.error('Failed to update user data:', error);
            toast.error('Failed to update user data. Please try again.'); // Show error toast
        } finally {
            setUpdateloading(false);
        }
    };



    const handleConfirmDelete = async () => {
        setLoading(true);
        try {
            await deleteUserAccount(user?.uid);
            toast.success('User Deleted successfully!');
            router.push('/login')
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
            setShowDeleteDialog(false);
        }
    };

    return (
        <div className=''>
            <Toaster />
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

                        <div className=' w-full flex flex-col  items-center h-full rounded-xl bg-white'>
                            {renderActiveTab()}
                        </div>
                    </div>

                    <div className='flex justify-between lg:flex-row flex-col my-4 gap-6 sm:text-base text-sm'>

                        <div className='flex items-center lg:w-auto w-full  flex-wrap gap-4'>

                            {/* <button onClick={() => handleDeleteClick()} className='flex items-center gap-2 text-gray-600'><MdOutlineDeleteForever className='text-xl mb-1' /> Delete my profile</button> */}
                            {/* <button className='flex items-center gap-2 text-gray-600'> Change email</button> */}
                            {/* <button className='flex items-center gap-2 text-gray-600'> Change password</button> */}
                        </div>


                        <div className='flex gap-2 lg:w-auto w-full justify-end'>
                            <button className='p-3 rounded-full px-6 bg-lightBackground text-gray-600'>Cancel</button>
                            <button onClick={handleSubmit} className='p-3 rounded-full px-6 bg-lightBlue text-white'>{Updateloading ? 'Updating...' : 'Save Changes'} </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            {showDeleteDialog && (
                <div className="">
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="relative">
                            <button
                                onClick={handleCancelDelete}
                                className="h-8 w-8 bg-white shadow rounded-full justify-center flex items-center absolute bottom-16 left-96 text-lightBlue"
                            >
                                <IoCloseOutline size={24} />
                            </button>
                        </div>
                        <div className="bg-cardColor p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
                            <h2 className="text-2xl font-medium text-labelColor text-center mb-4">
                                Are You confirm want to delete your account?
                            </h2>
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={handleCancelDelete}
                                    className="bg-bgColor text-white py-2 px-6 rounded-full"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    className="bg-lightBlueText text-white py-2 px-6 rounded-full"
                                    disabled={loading} // Disable button while loading
                                >
                                    {loading ? 'Deleting...' : 'Sure'} {/* Show loading state */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
