'use client'
import React, { useState } from 'react';

const CustomTooltip = ({ children, tooltipText, width = 'auto' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative flex items-center  justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <div className="absolute bottom-full mb-1 flex  flex-col items-center">
                    {/* Tooltip Box */}
                    <div className="bg-[#4a6980]  text-white font-normal text-sm px-4 py-2 rounded-lg shadow-lg "
                        style={{ width }}
                    >
                        {tooltipText}
                    </div>
                    {/* Tooltip Triangle */}
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#4a6980]"></div>
                </div>
            )}
        </div>
    );
};

export default CustomTooltip