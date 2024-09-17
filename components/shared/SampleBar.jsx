'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the usePathname hook
import React, { useState, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';
import DesignPage from '../dashboard/startingCards/DesignPage';
import { useTranslation } from 'next-i18next'; // Import useTranslation

const SampleBar = () => {
    const pathname = usePathname(); // Get the current path
    const [showDesignPage, setShowDesignPage] = useState(false); // State to control visibility of DesignPage
    const { t } = useTranslation(); // Destructure t function for translations

    const handleStartNewDesign = () => {
        setShowDesignPage(true); // Show the DesignPage component
        document.body.style.overflow = 'hidden'; // Hide the scroll bar
    };

    const handleCloseDesignPage = () => {
        setShowDesignPage(false); // Hide the DesignPage component
        document.body.style.overflow = ''; // Restore scroll bar
    };

    // Cleanup in case the component unmounts
    useEffect(() => {
        return () => {
            document.body.style.overflow = ''; // Ensure the overflow is reset on component unmount
        };
    }, []);

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex justify-between w-full">
                <h1 className="sm:text-4xl text-2xl font-bold">{t('myOrders')}</h1>
            </div>

            <div className="md:flex justify-between w-full md:space-y-0 space-y-4 py-4">
                <div className="bg-gray-50 rounded-full">
                    <Link href="/dashboard/drafts">
                        <button
                            className={`px-4 py-3 rounded-full ${pathname === '/dashboard/drafts' ? 'bg-labelColor text-white' : ''}`}
                        >
                            {t('drafts')}
                        </button>
                    </Link>
                    <Link href="/dashboard/samples">
                        <button
                            className={`px-4 py-3 rounded-full ${pathname === '/dashboard/samples' ? 'bg-labelColor text-white' : ''}`}
                        >
                            {t('samples')}
                        </button>
                    </Link>
                    <Link href="/dashboard/bulks">
                        <button
                            className={`px-4 py-3 rounded-full ${pathname === '/dashboard/bulks' ? 'bg-labelColor text-white' : ''}`}
                        >
                            {t('bulks')}
                        </button>
                    </Link>
                </div>
                <div>
                    <button
                        onClick={handleStartNewDesign} // Open DesignPage on click
                        className="bg-lightBlue hover:scale-105 text-white px-4 py-3 flex items-center gap-2 rounded-full"
                    >
                        <GoPlus className="text-2xl" /> {t('startNewDesign')}
                    </button>
                </div>
            </div>

            {/* Conditionally render the DesignPage component */}
            {showDesignPage && (
                <div className="fixed inset-0 bg-white z-50 overflow-hidden">
                    <DesignPage onClose={handleCloseDesignPage} /> {/* Pass a prop to close the DesignPage */}
                </div>
            )}
        </div>
    );
};

export default SampleBar;
