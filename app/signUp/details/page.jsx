'use client'
import MaxContainer from '@/components/layout/MaxContainer';
import Image from 'next/image';
import React, { useState } from 'react'
import logo from '@/assets/images/mainLogo.png'
import CustomInput from '@/components/shared/CustomInput';
import PersonalDetails from '@/components/SignupDetails/PersonalDetails';
import CompanyDetails from '@/components/SignupDetails/CompanyDetails';
import ShippingDetails from '@/components/SignupDetails/ShippingDetails';


const Page = () => {

    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { name: 'Personal data', id: '1', component: <PersonalDetails /> },
        { name: 'Company data', id: '2', component: <CompanyDetails/> },
        { name: 'Shipping and billing address', id: '3', component: <ShippingDetails/> },
    ];

    return (

        <MaxContainer>
            <div className='relative min-h-screen w-full sm:px-6 px-4 flex lg:flex-row flex-col justify-center lg:items-start items-center'>

                {/* logo */}
                <div className='lg:absolute flex justify-center -top-[2%] left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>


                {/* main continer */}
                <div className='flex flex-col items-center lg:mt-12 mt-0 p-12 lg:w-1/2 sm:w-[75%] w-full  px-6 '>
                    <div className='flex sm:gap-0 gap-2 sm:flex-nowrap flex-wrap' >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full px-6 rounded-full text-lg whitespace-nowrap py-3 ${activeTab === tab.id ? 'bg-labelColor text-white ' : 'bg-white border border-labelColor  text-labelColor'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className='mt-12 py-12 w-full  flex flex-col items-center h-full rounded-xl bg-white'>
                        {tabs.find((tab) => tab.id === activeTab)?.component}
                    </div>



                </div>

            </div >
        </MaxContainer>
    )
}

export default Page
