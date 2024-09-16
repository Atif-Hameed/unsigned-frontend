import Image from 'next/image'
import React, { useState } from 'react'
import german from '@/assets/icons/germany.png';
import american from '@/assets/icons/america.png';
import i18n from '@/utils/i18n';


const TrnaslateButton = () => {

    const [isGerman, setIsGerman] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsGerman(lang === 'gr'); // Update state based on selected language
    };

    return (
        <div onClick={() => changeLanguage(isGerman ? 'en' : 'gr')} className='flex  cursor-pointer items-center gap-1'>
            <div>
                <Image alt='' src={isGerman ? american : german} className='w-14' unoptimized priority />
            </div>
            <p className='text-labelColor cursor-pointer text-xl'>{isGerman ? 'Englisch' : 'German'} </p>
        </div>
    )
}

export default TrnaslateButton
