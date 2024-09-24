'use client'
import React, { useState } from 'react';
import { LuArrowLeft } from 'react-icons/lu';
import Button from './Button';
import Link from 'next/link';

const Stepper = ({
    fitForm,
    fabricForm,
    colourwayForm,
    necklabelForm,
    carelabelForm,
    printForm,
    customizationForm,
    qunatityForm,
    packagingForm,
    deliveryForm
}) => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { name: 'Fit', id: '1', component: fitForm },
        { name: 'Fabric', id: '2', component: fabricForm },
        { name: 'Colourway', id: '3', component: colourwayForm },
        { name: 'Necklabel', id: '4', component: necklabelForm },
        { name: 'Carelabel', id: '5', component: carelabelForm },
        { name: 'Print', id: '6', component: printForm },
        { name: 'Customization', id: '7', component: customizationForm },
        { name: 'Quantity', id: '8', component: qunatityForm },
        { name: 'Packaging', id: '9', component: packagingForm },
        { name: 'Delivery', id: '10', component: deliveryForm },
    ];

    // Function to handle "Next" button
    const handleNext = () => {
        const currentTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
        if (currentTabIndex < tabs.length - 1) {
            setActiveTab(tabs[currentTabIndex + 1].id);  // Move to next tab
        }
    };

    return (
        <div className=' w-full '>
            {/* steps */}
            <div className='flex flex-col items-center w-full '>

                <div className='flex items-center md:flex-row flex-col  justify-start gap-4 w-full'>
                    {/* back button */}
                    <Link href='/dashboard' className='text-lightBlue  whitespace-nowrap cursor-pointer justify-start sm:w-auto w-full flex items-center rounded-full gap-2 px-4 py-3 bg-transparent hover:bg-[#d5dbe6]'>
                        <LuArrowLeft className='text-2xl' />
                        <p>My Orders</p>
                    </Link>
                    <div className='w-full lg:flex-1  overflow-x-auto pb-2 flex justify-center'>
                        <div className='flex w-full gap-1'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={` px-5 rounded-full text-base whitespace-nowrap py-3 ${activeTab === tab.id ? 'bg-labelColor text-white' : 'bg-white border  text-dark'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Render the corresponding form based on the active tab */}
                <div className='py-8 w-full h-full '>
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-end items-center space-x-4 w-full">
                    <Button
                        label="Save and next"
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
