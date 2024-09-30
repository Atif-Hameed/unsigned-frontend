'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/images/logoSmall.png';
import CustomInput from '@/components/shared/CustomInput';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import MaxContainer from '@/components/layout/MaxContainer';
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { IoArrowBack } from 'react-icons/io5';
import TrnaslateButton from '@/components/shared/TrnaslateButton';
import { useTranslation } from 'next-i18next';


const Page = () => {
    const [password, setPassword] = useState('');
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isLowerCase, setIsLowerCase] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isMinLength, setIsMinLength] = useState(false);
    const { t } = useTranslation();

    // Handle password change and validation
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // Validate conditions
        setIsUpperCase(/[A-Z]/.test(value));
        setIsLowerCase(/[a-z]/.test(value));
        setIsNumber(/[0-9]/.test(value));
        setIsMinLength(value.length >= 8);
    };

    return (
        <MaxContainer>
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>
                {/* logo */}
                <div className='lg:absolute flex justify-center top-0 left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                <div className='absolute right-10 top-3' >
                    <TrnaslateButton />
                </div>

                {/* login container */}
                <div className='bg-white relative sm:mt-6 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full flex flex-col sm:gap-8 gap-6 sm:p-8 p-4 sm:py-10'>

                    {/* back button */}
                    <Link href={'/'} className='absolute -top-[9%] left-4 text-lightBlueText flex items-center gap-2' > <IoArrowBack className='text-xl' />{t('back')}</Link>

                    <h1 className='text-center sm:text-4xl text-2xl font-semibold'>{t('createPass')}</h1>

                    <div className='space-y-6'>
                        <CustomInput
                            type='password'
                            label='Password'
                            value={password}
                            isRequired={true}
                            onChange={handlePasswordChange}
                        />
                        <CustomInput
                            type='password'
                            label={t('repeat') + " " + 'Password'}
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        {/* Password requirements */}
                        <ul className="space-y-1 text-sm">
                            <li className={`flex items-center ${isMinLength ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isMinLength ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('minChar')} </span>
                            </li>
                            <li className={`flex items-center ${isUpperCase ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isUpperCase ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('uppercase')} </span>
                            </li>
                            <li className={`flex items-center ${isLowerCase ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isLowerCase ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('lowercase')} </span>
                            </li>
                            <li className={`flex items-center ${isNumber ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isNumber ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('number')} </span>
                            </li>
                        </ul>

                        <div className='w-full'>
                            <Link href={'/signUp/details'}>
                                <Button label={t('createAccount')} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MaxContainer>
    );
};

export default Page;