'use client'

import React, { useEffect, useState } from 'react'
import DesignPage from './DesignPage';

const EmptyCards = () => {

    const [showDesignPage, setShowDesignPage] = useState(false); // State to control visibility of DesignPage

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
        <>
            <div className="border border-lightBlue h-60 w-full flex justify-center items-center" style={{ borderRadius: '30px' }}>
                <button onClick={handleStartNewDesign} className="bg-lightBlue hover:scale-105 text-white px-6 py-3 rounded-full">Start design</button>
            </div>
            {/* Conditionally render the DesignPage component */}
            {showDesignPage && (
                <div className="fixed inset-0 bg-white z-50 overflow-hidden">
                    <DesignPage onClose={handleCloseDesignPage} /> {/* Pass a prop to close the DesignPage */}
                </div>
            )}
        </>

    )
}

export default EmptyCards
