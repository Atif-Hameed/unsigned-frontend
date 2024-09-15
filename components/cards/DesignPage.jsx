
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoCloseOutline } from 'react-icons/io5';

const DesignPage = ({ onClose }) => {
    const router = useRouter();

    const items = [
        { name: 'T-Shirt', icon: '/path-to-tshirt-icon.svg' },
        { name: 'Hoodie', icon: '/path-to-hoodie-icon.svg' },
        { name: 'Crewneck', icon: '/path-to-crewneck-icon.svg' },
        { name: 'Zip-Hoodie', icon: '/path-to-zip-hoodie-icon.svg' },
        { name: 'Long Sleeve', icon: '/path-to-long-sleeve-icon.svg' },
        { name: 'Tank Top', icon: '/path-to-tank-top-icon.svg' },
        { name: 'Tank Top', icon: '/path-to-tank-top-icon.svg' },
        { name: 'Tank Top', icon: '/path-to-tank-top-icon.svg' },
        { name: 'Tank Top', icon: '/path-to-tank-top-icon.svg' },
    ];

    return (
        <div className="bg-background">
            <div className="min-h-screen px-2 w-full max-w-6xl mx-auto">
                <div className="rounded-lg w-full">
                    <div className="">
                        <div className="">
                            <h2 className="text-center md:text-3xl py-7 text-labelColor font-semibold">
                                What would you like to design?
                            </h2>
                            <button onClick={onClose} className='md:h-12 h-8 w-8 md:w-12 bg-white shadow rounded-full justify-center flex items-center absolute right-10 top-7 text-lightBlue'><IoCloseOutline size={24} /></button>
                        </div>
                        <h3 className='text-center text-xl py-3 font-medium  text-labelColor'>Basic</h3>
                    </div>
                    <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="p-6  bg-cardColor rounded-2xl shadow hover:shadow-md transition cursor-pointer flex flex-col items-center"
                                onClick={() => router.push(`/design/${item.name.toLowerCase()}`)}
                            >
                                {/* Replace with actual icons */}
                                <img src={item.icon} alt={item.name} className="mb-4 w-16 h-16" />
                                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignPage;
