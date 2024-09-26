'use client'
import React, { useState, useEffect, useRef } from 'react';
import MaxContainer from './MaxContainer';
import Image from 'next/image';
import logo from '@/assets/images/logoSmall.png';
import german from '@/assets/icons/germany.png';
import american from '@/assets/icons/america.png';
import { BsPersonFill } from "react-icons/bs";
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import i18n from '@/utils/i18n';
import TrnaslateButton from '../shared/TrnaslateButton';

const Navbar = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const popupRef = useRef(null);
    const pathname = usePathname();
    // const [isGerman, setIsGerman] = useState(false);
    const { t } = useTranslation();

    // const changeLanguage = (lang) => {
    //     i18n.changeLanguage(lang);
    //     setIsGerman(lang === 'gr'); // Update state based on selected language
    // };

    const handlePopup = () => {
        setOpenPopup((prev) => !prev);
    };

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setOpenPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close popup on route change
    useEffect(() => {
        setOpenPopup(false);
    }, [pathname]);

    return (
        <div className='w-full flex justify-center'>
            <MaxContainer>
                <div className='flex justify-between mb-8 gap-3 relative w-full py-2 items-center'>

                    <div className='flex items-center sm:gap-6 gap-4'>

                        <div onClick={handlePopup} className='cursor-pointer relative flex items-center gap-2' ref={popupRef}>
                            <div className='p-2 hover:scale-105 rounded-full bg-lightBackground'>
                                <BsPersonFill className=' sm:text-3xl text-3xl text-black' />
                            </div>
                            {openPopup && (
                                <div className='absolute left-1/2 -translate-x-1/2 top-14 flex flex-col p-2 rounded-lg bg-white'>
                                    <p className='py-2 px-4 cursor-pointer rounded-md hover:bg-[#d6ece3]'>Profile</p>
                                    <p className='py-2 px-4 cursor-pointer rounded-md hover:bg-[#d6ece3]'>Logout</p>
                                </div>
                            )}
                        </div>

                        <TrnaslateButton />
                    </div>

                    <div className='sm:absolute sm:left-1/2 sm:-translate-x-1/2 top-1'>
                        <Image alt='' src={logo} className='sm:w-40 w-28' unoptimized priority />
                    </div>
                </div>
            </MaxContainer>
        </div>
    );
};

export default Navbar;
