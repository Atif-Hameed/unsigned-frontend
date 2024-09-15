'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import DesignPage from '../cards/DesignPage';


const SampleBar = () => {
    const [activeTab, setActiveTab] = useState('Drafts');
    const [showDesignPage, setShowDesignPage] = useState(false); // State to control visibility of DesignPage

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleStartNewDesign = () => {
        setShowDesignPage(true); // Show the DesignPage component
    };

    const handleCloseDesignPage = () => {
        setShowDesignPage(false); // Hide the DesignPage component
    };

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex justify-between w-full">
                <h1 className="text-2xl text-gray-600 font-bold">My Orders</h1>
            </div>

            <div className="md:flex justify-between w-full md:space-y-0 space-y-4 py-4">
                <div className="bg-gray-50 rounded-full">
                    <Link href="/dashboard/drafts">
                        <button
                            onClick={() => handleTabClick('Drafts')}
                            className={`px-4 pt-3 pb-2 hover:bg-labelColor rounded-full ${activeTab === 'Drafts' ? 'bg-bgColor text-white' : ''}`}
                        >
                            Drafts 40
                        </button>
                    </Link>
                    <Link href="/dashboard/samples">
                        <button
                            onClick={() => handleTabClick('Samples')}
                            className={`px-4 pt-3 pb-2 rounded-full ${activeTab === 'Samples' ? 'bg-bgColor text-white' : ''}`}
                        >
                            Samples
                        </button>
                    </Link>
                    <Link href="/dashboard/bulks">
                        <button
                            onClick={() => handleTabClick('Bulks')}
                            className={`px-4 pb-2 pt-3 rounded-full ${activeTab === 'Bulks' ? 'bg-bgColor text-white' : ''}`}
                        >
                            Bulks
                        </button>
                    </Link>
                </div>
                <div>
                    <button
                        onClick={handleStartNewDesign} // Open DesignPage on click
                        className="bg-bgColor hover:bg-labelColor text-white px-4 py-2 flex items-center gap-2 rounded-full"
                    >
                        <GoPlus size={20} /> Start new design
                    </button>
                </div>
            </div>

            {/* Conditionally render the DesignPage component */}
            {showDesignPage && (
                <div className="fixed inset-0 bg-white z-50">
                    <DesignPage onClose={handleCloseDesignPage} /> {/* Pass a prop to close the DesignPage */}
                </div>
            )}
        </div>
    )
}

export default SampleBar;