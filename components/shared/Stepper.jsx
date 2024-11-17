'use client';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { LuArrowLeft } from 'react-icons/lu';
import Button from './Button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { updateOrder } from '@/app/action/orders-action';
import { MyContext } from '../provider/context-provider';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

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
    validateQuantityForm,
}) => {
    const [activeTab, setActiveTab] = useState('1');
    const [completedTabs, setCompletedTabs] = useState(['1']); // Track completed tabs

    const router = useRouter(); // Initialize useRouter
    const { formData, setFormData } = useContext(MyContext); // Use context for form data management

    const tabs = useMemo(() => [
        { name: 'Fit', id: '1', component: fitForm, validate: '' },
        { name: 'Fabric', id: '2', component: fabricForm, validate: validateFabricForm },
        { name: 'Colourway', id: '3', component: colourwayForm, validate: validateColorsForm },
        { name: 'Necklabel', id: '4', component: necklabelForm, validate: validateNecklabelForm },
        { name: 'Carelabel', id: '5', component: carelabelForm, validate: '' },
        { name: 'Print', id: '6', component: printForm, validate: '' },
        { name: 'Quantity', id: '7', component: qunatityForm, validate: validateQuantityForm },
        { name: 'Packaging', id: '8', component: packagingForm, validate: '' },
        { name: 'Delivery', id: '9', component: deliveryForm, validate: '' },
    ], [fitForm, fabricForm, colourwayForm, necklabelForm, carelabelForm, printForm, qunatityForm, packagingForm, deliveryForm, validateFabricForm, validateColorsForm, validateNecklabelForm, validateQuantityForm]);

    // Use effect to check if there's a saved tab when component loads
    useEffect(() => {
        const savedTab = localStorage.getItem(`order_${orderID}_activeTab`); // Use order ID to make the key unique
        if (savedTab && tabs.some((tab) => tab.id === savedTab)) {
            setActiveTab(savedTab); // Set saved tab as active
        }

        // Load completed tabs from localStorage if available
        const savedCompletedTabs = JSON.parse(localStorage.getItem(`order_${orderID}_completedTabs`));
        if (savedCompletedTabs) {
            setCompletedTabs(savedCompletedTabs);
        }
    }, [orderID, tabs]);

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

        // Prepare updated form data
        let updatedFormData = { ...formData }; // Clone the form data

        // If the current tab is the last one, update status to 'complete'
        if (currentTabIndex === tabs.length - 1) {
            updatedFormData = {
                ...updatedFormData,
                status: 'complete', // Update the status to 'complete'
            };
        } else {
            updatedFormData = {
                ...updatedFormData,
                currentStep: currentTabIndex, // Update the current step
            };
        }

        // Update order with current form data
        try {
            await updateOrder(orderID, updatedFormData); // Pass the updated form data
            console.log('Order updated successfully.');
        } catch (error) {
            console.error('Failed to update order:', error.message);
            return;
        }

        // Proceed to the next tab and mark it as completed
        if (currentTabIndex < tabs.length - 1) {
            const nextTabId = tabs[currentTabIndex + 1].id;
            setActiveTab(nextTabId);
            setCompletedTabs((prev) => {
                const updatedTabs = [...prev, nextTabId];
                // Save completed tabs to localStorage
                localStorage.setItem(`order_${orderID}_completedTabs`, JSON.stringify(updatedTabs));
                return updatedTabs;
            });

            // Save the next active tab to localStorage
            localStorage.setItem(`order_${orderID}_activeTab`, nextTabId);
        } else {
            toast.success('Order created Successfully');
            localStorage.removeItem(`order_${orderID}_activeTab`);
            localStorage.removeItem(`order_${orderID}_completedTabs`);

            router.push('/dashboard'); // Redirect to dashboard
        }
    };

    // Function to handle tab click
    const handleTabClick = (tabId) => {
        // Allow navigation only to completed or current tab
        if (completedTabs.includes(tabId)) {
            setActiveTab(tabId);

            // Save the active tab to localStorage
            localStorage.setItem(`order_${orderID}_activeTab`, tabId);
        }
    };

    return (
        <div className='w-full'>
            {/* steps */}
            <div className='flex flex-col items-center w-full'>
                <div className='flex items-center md:flex-row flex-col justify-start gap-4 w-full'>
                    {/* back button */}
                    <Link href='/dashboard/drafts' className='text-lightBlue whitespace-nowrap cursor-pointer justify-start sm:w-auto w-full flex items-center rounded-full gap-2 px-4 py-3 bg-transparent hover:bg-[#d5dbe6]'>
                        <LuArrowLeft className='text-2xl' />
                        <p>My Orders</p>
                    </Link>
                    <div className='w-full lg:flex-1 overflow-x-auto pb-2 flex justify-center'>
                        <div className='flex w-full gap-1'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabClick(tab.id)}
                                    className={`px-5 rounded-full text-base cursor-pointer whitespace-nowrap py-3 ${activeTab === tab.id
                                        ? 'bg-labelColor text-white'
                                        : completedTabs.includes(tab.id)
                                            ? 'bg-[#f9f9f9] border text-dark'
                                            : 'bg-[#e0e0e0] text-gray-500 cursor-auto'
                                        }`}
                                    disabled={!completedTabs.includes(tab.id) && tab.id !== activeTab}
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
                <div className='flex justify-end items-center space-x-4 mb-4 w-full'>
                    <Button
                        label={
                            <span className='flex items-center gap-2'>
                                Save and next <FaArrowRight className='text-lg flex-shrink-0' />
                            </span>
                        }
                        className='!bg-lightBlue !w-48'
                        onClick={handleNext}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stepper;
