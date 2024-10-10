'use client';
import React, { useContext, useState } from 'react';
import { LuArrowLeft } from 'react-icons/lu';
import Button from './Button';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import { updateOrder } from '@/app/action/orders-action';
import { MyContext } from '../provider/context-provider';

const Stepper = ({
    orderID,
    fitForm,
    fabricForm,
    colourwayForm,
    necklabelForm,
    carelabelForm,
    printForm,
    qunatityForm,
    packagingForm,
    deliveryForm,
    validateFabricForm,
    validateColorsForm,
    validateNecklabelForm,
    validateQuantityForm
}) => {
    const [activeTab, setActiveTab] = useState('1');

    const { formData, setFormData } = useContext(MyContext); // Use context for form data management

    const tabs = [
        { name: 'Fit', id: '1', component: fitForm, validate: '' },
        { name: 'Fabric', id: '2', component: fabricForm, validate: validateFabricForm },
        { name: 'Colourway', id: '3', component: colourwayForm, validate: validateColorsForm },
        { name: 'Necklabel', id: '4', component: necklabelForm, validate: validateNecklabelForm },
        { name: 'Carelabel', id: '5', component: carelabelForm, validate: '' },
        { name: 'Print', id: '6', component: printForm, validate: '' },
        { name: 'Quantity', id: '7', component: qunatityForm, validate: validateQuantityForm },
        { name: 'Packaging', id: '8', component: packagingForm, validate: '' },
        { name: 'Delivery', id: '9', component: deliveryForm, validate: '' },
    ];

    // Function to handle "Next" button
    const handleNext = async () => {
        const currentTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
        const currentTab = tabs[currentTabIndex];

        // Validate the current tab's form
        if (currentTab.validate) {
            const isValid = currentTab.validate();
            if (!isValid) {
                return;
            }
        }

        // Update order with current form data
        try {
            await updateOrder(orderID, formData);
            console.log('Order updated successfully.');
        } catch (error) {
            console.error('Failed to update order:', error.message);
        }

        // Proceed to the next tab
        if (currentTabIndex < tabs.length - 1) {
            setActiveTab(tabs[currentTabIndex + 1].id);
        }
    };

    return (
        <div className='w-full'>
            {/* steps */}
            <div className='flex flex-col items-center w-full'>
                <div className='flex items-center md:flex-row flex-col justify-start gap-4 w-full'>
                    {/* back button */}
                    <Link href='/dashboard' className='text-lightBlue whitespace-nowrap cursor-pointer justify-start sm:w-auto w-full flex items-center rounded-full gap-2 px-4 py-3 bg-transparent hover:bg-[#d5dbe6]'>
                        <LuArrowLeft className='text-2xl' />
                        <p>My Orders</p>
                    </Link>
                    <div className='w-full lg:flex-1 overflow-x-auto pb-2 flex justify-center'>
                        <div className='flex w-full gap-1'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-5 rounded-full text-base whitespace-nowrap py-3 ${activeTab === tab.id ? 'bg-labelColor text-white' : 'bg-[#f9f9f9] border text-dark'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Render the corresponding form based on the active tab */}
                <div className='py-8 w-full h-full'>
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-end items-center space-x-4 mb-4 w-full">
                    <Button
                        label={<span className='flex items-center gap-2'>Save and next <FaArrowRight className='text-lg flex-shrink-0' /></span>}
                        className="!bg-lightBlue !w-48"
                        onClick={handleNext}
                        disabled={activeTab === tabs[tabs.length - 1].id} // Disable on the last tab
                    />
                </div>
            </div>
        </div>
    );
};

export default Stepper;
