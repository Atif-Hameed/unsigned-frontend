import React from 'react';
import { useRouter } from 'next/navigation';
import { IoCloseOutline } from 'react-icons/io5';
import Image from 'next/image';
import shirt from '@/assets/images/shirt.png'
import hoodie from '@/assets/images/hoodie.png'
import crewneck from '@/assets/images/crewneck.png'
import ziphoodie from '@/assets/images/ziphoodie.png'
import longsleeve from '@/assets/images/longsleeve.png'
import tanktop from '@/assets/images/tanktop.png'
import openleg from '@/assets/images/openleg.png'
import cuffed from '@/assets/images/cuffed.png'
import shorts from '@/assets/images/shorts.png'
import { useTranslation } from 'next-i18next';


const DesignPage = ({ onClose }) => {
    const router = useRouter();
    const { t } = useTranslation()

    const items = [
        { name: t('tshirt'), key: 'T-Shirt', icon: shirt },
        { name: t('hoodie'), key: "Hoodie", icon: hoodie },
        { name: t('crewNeck'), key: "Crewneck", icon: crewneck },
        { name: t('zipHoodie'), key: "Zip-Hoodie", icon: ziphoodie },
        { name: t('longSleeve'), key: "Long-Sleeve", icon: longsleeve },
        { name: t('tankTop'), key: "Tank-Top", icon: tanktop },
        { name: t('joggerOpenLeg'), key: "Jogger-Open-Leg", icon: openleg },
        { name: t('joggerCuffed'), key: "Jogger-Cuffed", icon: cuffed },
        { name: t('shorts'), key: "Shorts", icon: shorts },
    ];

    return (
        <div className="fixed inset-0 bg-white h-full w-full z-50 overflow-auto">
            <div className="px-2 w-full h-full md:w-[80%] mx-auto">
                <div className="rounded-lg w-full">
                    <div>
                        <div>
                            <h2 className="text-center md:text-4xl sm:text-3xl text-2xl py-7 text-dark font-medium">
                                {t('whatWouldYouLikeToDesign?')}
                            </h2>
                            <button onClick={onClose} className='md:h-12 h-8 w-8 md:w-12 bg-white shadow rounded-full justify-center flex items-center absolute right-10 top-7 text-lightBlue'>
                                <IoCloseOutline size={24} />
                            </button>
                        </div>
                        <h3 className='text-center sm:text-2xl text-lg py-3 font-medium text-dark'>{t('basic')}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-20">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 bg-lightBackground  shadow hover:shadow-md transition cursor-pointer flex flex-col items-center"
                                onClick={() => router.push(`/dashboard/designs/${item.key.toLowerCase()}`)}
                            >
                                <Image src={item.icon} alt={item.name} className='w-56 ' />
                                <h3 className="text-xl font-medium text-gray-800">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignPage;
