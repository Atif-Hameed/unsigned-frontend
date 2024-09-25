'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import german from '@/assets/icons/ger.png';
import american from '@/assets/icons/usa.png';
import i18n from '@/utils/i18n';


const TrnaslateButton = () => {

    const [isGerman, setIsGerman] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsGerman(lang === 'gr'); // Update state based on selected language
    };

    return (
        <div onClick={() => changeLanguage(isGerman ? 'en' : 'gr')} className='flex  cursor-pointer items-center sm:gap-1'>
            <p className='text-labelColor sm:block hidden cursor-pointer '>{isGerman ? 'Englisch' : 'German'} </p>
            <p className='text-labelColor sm:hidden block cursor-pointer '>{isGerman ? 'Eng' : 'Ger'} </p>

            <div>
                <Image alt='' src={isGerman ? american : german} className='w-10' unoptimized priority />
            </div>
        </div>
    )
}

export default TrnaslateButton
