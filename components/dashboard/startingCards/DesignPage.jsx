import React from 'react';
import { useRouter } from 'next/navigation';
import { IoCloseOutline } from 'react-icons/io5';
import Image from 'next/image';

const DesignPage = ({ onClose }) => {
    const router = useRouter();

    const items = [
        { name: 'T-Shirt', icon: '' },
        { name: 'Hoodie', icon: '' },
        { name: 'Crewneck', icon: '' },
        { name: 'Zip-Hoodie', icon: '' },
        { name: 'Long Sleeve', icon: '' },
        { name: 'Tank Top', icon: '' },
        { name: 'Sweatpants I', icon: '' },
        { name: 'Sweatpants II', icon: '' },
        { name: 'Shorts', icon: '' },
    ];

    return (
        <div className="fixed inset-0 bg-background h-full w-full z-50 overflow-auto">
            <div className="px-2 w-full h-full md:w-[80%] mx-auto">
                <div className="rounded-lg w-full">
                    <div>
                        <div>
                            <h2 className="text-center md:text-4xl sm:text-3xl text-2xl py-7 text-dark font-medium">
                                What would you like to design?
                            </h2>
                            <button onClick={onClose} className='md:h-12 h-8 w-8 md:w-12 bg-white shadow rounded-full justify-center flex items-center absolute right-10 top-7 text-lightBlue'>
                                <IoCloseOutline size={24} />
                            </button>
                        </div>
                        <h3 className='text-center sm:text-2xl text-lg py-3 font-medium text-dark'>Basic</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-20">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                style={{ borderRadius: '30px' }}
                                className="p-6 bg-cardColor rounded-2xl shadow hover:shadow-md transition cursor-pointer flex flex-col items-center"
                                onClick={() => router.push(`/design/${item.name.toLowerCase()}`)}
                            >
                                <Image src={item.icon} alt={item.name} width={100} height={100} />
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
