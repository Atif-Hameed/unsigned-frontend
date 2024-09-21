'use client'
import React, { useState } from 'react';
import { LuArrowLeft } from 'react-icons/lu';

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

    return (
        <div className=' w-full '>


            {/* steps */}
            <div className='flex flex-col items-center w-full '>

                <div className='flex items-center sm:flex-row flex-col  justify-start gap-4 w-full'>
                    {/* back button */}
                    <div className='text-lightBlue whitespace-nowrap cursor-pointer justify-start sm:w-auto w-full flex items-center rounded-full gap-2 px-4 py-3 bg-transparent hover:bg-[#d5dbe6]'>
                        <LuArrowLeft className='text-2xl' />
                        <p>My Orders</p>
                    </div>
                    <div className='w-full flex-1  overflow-x-auto flex justify-center'>
                        <div className='flex w-full'>
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
            </div>
        </div>
    );
};

export default Stepper;
