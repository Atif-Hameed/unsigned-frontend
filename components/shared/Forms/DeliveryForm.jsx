'use client';
import React, { useContext, useEffect } from 'react';
import Heading from '../Heading';
import CustomInput from '../CustomInput';
import { CiLock } from 'react-icons/ci';
import { MyContext } from '@/components/provider/context-provider';
import { useAuth } from '@/components/provider/auth_context';

const DeliveryForm = () => {
    const { formData, setFormData } = useContext(MyContext);
    const { user } = useAuth();
    console.log("User Data:", user);
    console.log("Initial Form Data:", formData);

    // Set initial values from user if formData is empty
    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                delivery: {
                    billingAddress: {
                        companyName: user?.brandName,
                        addressLine1: user?.billingAddress?.address1,
                        addressLine2: user?.billingAddress?.address2,
                        zipCode: user?.billingAddress?.zipCode,
                        city: user?.billingAddress?.city,
                        country: user?.billingAddress?.country,
                        vat: user?.vat
                    },
                    deliveryAddress: {
                        companyName: user?.brandName,
                        addressLine1: user?.deliveryAddress?.address1,
                        addressLine2: user?.deliveryAddress?.address2,
                        zipCode: user?.deliveryAddress?.zipCode,
                        city: user?.deliveryAddress?.city,
                        country: user?.deliveryAddress?.country,
                        sameAsBilling: false,
                    },
                    contactInfo: {
                        name: user?.firstName + " " + user?.lastName,
                        phone: user?.phone,
                        email: user?.reloadUserInfo.email,
                        specialRequests: ''
                    }
                }
            }));
        }
    }, [user]);

    // Handle input changes
    const handleInputChange = (section, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            delivery: {
                ...prevData.delivery,
                [section]: {
                    ...prevData.delivery[section],
                    [field]: value
                }
            }
        }));
    };

    // Handle checkbox for "same as billing"
    const handleSameAsBilling = () => {
        setFormData((prevData) => ({
            ...prevData,
            delivery: {
                ...prevData.delivery,
                deliveryAddress: {
                    ...prevData.delivery.billingAddress,
                    sameAsBilling: !prevData.delivery.deliveryAddress.sameAsBilling
                }
            },
        }));
    };

    return (
        <div className=''>
            <div className="">
                <Heading>Confirm shipping address</Heading>
            </div>
            <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
                {/* Billing Address Section */}
                <div className="bg-lightBackground p-5 rounded-3xl">
                    <h1>Billing Address</h1>
                    <CustomInput
                        type='text'
                        label='Company or recipient name'
                        isRequired={true}
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.billingAddress.companyName}
                        onChange={(e) => handleInputChange('billingAddress', 'companyName', e.target.value)}
                    />
                    <CustomInput
                        type='text'
                        label='Address Line 1'
                        isRequired={true}
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.billingAddress.addressLine1}
                        onChange={(e) => handleInputChange('billingAddress', 'addressLine1', e.target.value)}
                    />
                    <CustomInput
                        type='text'
                        label='Address Line 2'
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.billingAddress.addressLine2}
                        onChange={(e) => handleInputChange('billingAddress', 'addressLine2', e.target.value)}
                    />
                    <div className="flex gap-2 w-full">
                        <CustomInput
                            type='text'
                            label='Zip Code'
                            isRequired={true}
                            inputStyle="!bg-lightBackground"
                            style='!bg-lightBackground'
                            value={formData.delivery.billingAddress.zipCode}
                            onChange={(e) => handleInputChange('billingAddress', 'zipCode', e.target.value)}
                        />
                        <CustomInput
                            type='text'
                            label='City'
                            isRequired={true}
                            inputStyle="!bg-lightBackground"
                            style='!bg-lightBackground'
                            value={formData.delivery.billingAddress.city}
                            onChange={(e) => handleInputChange('billingAddress', 'city', e.target.value)}
                        />
                    </div>
                    <CustomInput
                        type='text'
                        label='Country'
                        isRequired={true}
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.billingAddress.country}
                        onChange={(e) => handleInputChange('billingAddress', 'country', e.target.value)}
                    />
                    <CustomInput
                        type='text'
                        label='VAT (Optional)'
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.billingAddress.vat}
                        onChange={(e) => handleInputChange('billingAddress', 'vat', e.target.value)}
                    />
                </div>

                {/* Delivery Address Section */}
                <div className="bg-lightBackground p-5 rounded-3xl">
                    <h1>Delivery details</h1>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={formData.delivery.deliveryAddress.sameAsBilling} onChange={handleSameAsBilling} />
                        <label className='text-gray-600 text-sm'>Same as billing address</label>
                    </div>
                    {!formData.delivery.deliveryAddress.sameAsBilling && (
                        <>
                            <CustomInput
                                type='text'
                                label='Company or recipient name'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                                value={formData.delivery.deliveryAddress.companyName}
                                onChange={(e) => handleInputChange('deliveryAddress', 'companyName', e.target.value)}
                            />
                            <CustomInput
                                type='text'
                                label='Address Line 1'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                                value={formData.delivery.deliveryAddress.addressLine1}
                                onChange={(e) => handleInputChange('deliveryAddress', 'addressLine1', e.target.value)}
                            />
                            <CustomInput
                                type='text'
                                label='Address Line 2'
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                                value={formData.delivery.deliveryAddress.addressLine2}
                                onChange={(e) => handleInputChange('deliveryAddress', 'addressLine2', e.target.value)}
                            />
                            <div className="flex gap-2 w-full">
                                <CustomInput
                                    type='text'
                                    label='Zip Code'
                                    isRequired={true}
                                    inputStyle="!bg-lightBackground"
                                    style='!bg-lightBackground'
                                    value={formData.delivery.deliveryAddress.zipCode}
                                    onChange={(e) => handleInputChange('deliveryAddress', 'zipCode', e.target.value)}
                                />
                                <CustomInput
                                    type='text'
                                    label='City'
                                    isRequired={true}
                                    inputStyle="!bg-lightBackground"
                                    style='!bg-lightBackground'
                                    value={formData.delivery.deliveryAddress.city}
                                    onChange={(e) => handleInputChange('deliveryAddress', 'city', e.target.value)}
                                />
                            </div>
                            <CustomInput
                                type='text'
                                label='Country'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                                value={formData.delivery.deliveryAddress.country}
                                onChange={(e) => handleInputChange('deliveryAddress', 'country', e.target.value)}
                            />
                        </>
                    )}
                </div>

                {/* Contact Information Section */}
                <div className="bg-lightBackground p-5 rounded-3xl">
                    <h1>Contact Information</h1>
                    <CustomInput
                        type='text'
                        label='Contact Person Name'
                        isRequired={true}
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.contactInfo.name}
                        onChange={(e) => handleInputChange('contactInfo', 'name', e.target.value)}
                    />
                    <CustomInput
                        type='tel'
                        label='Phone Number'
                        isRequired={true}
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.contactInfo.phone}
                        onChange={(e) => handleInputChange('contactInfo', 'phone', e.target.value)}
                    />
                    <CustomInput
                        type='email'
                        label='Email Address'
                        isRequired={true}
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.contactInfo.email}
                        onChange={(e) => handleInputChange('contactInfo', 'email', e.target.value)}
                    />
                    <CustomInput
                        type='textarea'
                        label='Special Requests(Optional)'
                        inputStyle="!bg-lightBackground"
                        style='!bg-lightBackground'
                        value={formData.delivery.contactInfo.specialRequests}
                        onChange={(e) => handleInputChange('contactInfo', 'specialRequests', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default DeliveryForm;
