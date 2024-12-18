'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/images/logoSmall.png';
import CustomInput from '@/components/shared/CustomInput';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import MaxContainer from '@/components/layout/MaxContainer';
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";
import TrnaslateButton from '@/components/shared/TrnaslateButton';
import { useTranslation } from 'next-i18next';
import { useRouter, useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { confirmPasswordReset } from 'firebase/auth'; // Import Firebase's password reset function
import { auth } from '@/config/firebase-config'; // Your Firebase config

const Page = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isLowerCase, setIsLowerCase] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isMinLength, setIsMinLength] = useState(false);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const params = useSearchParams();
    const router = useRouter();
    const oobCode = params.get('oobCode'); // Get the oobCode from the URL

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

    // API call to submit the new password using Firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!password) {
            toast.error(t('passwordRequired'));
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            toast.error(t('passwordsDoNotMatch'));
            setLoading(false);
            return;
        }

        const loadingToastId = toast.loading(t('loading'));
        try {
            if (oobCode) {
                // Firebase's function to confirm the password reset using oobCode
                await confirmPasswordReset(auth, oobCode, password);
                toast.success(t('passwordUpdatedSuccessfully'));
                router.push('/login'); // Redirect to login page after success
            } else {
                toast.error(t('invalidOrExpiredLink'));
            }
        } catch (error) {
            console.error('Error setting password:', error);
            toast.error(t('failedToSetPassword'), {
                id: loadingToastId,
                duration: 4000,
            });
        } finally {
            setLoading(false);
            toast.dismiss(loadingToastId);
        }
    };

    return (
        <MaxContainer>
            <Toaster />
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>
                {/* logo */}
                <div className='lg:absolute flex justify-center top-0 left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                {/* <div className='absolute right-10 top-3'>
                    <TrnaslateButton />
                </div> */}

                {/* reset password container */}
                <div className='bg-white sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full sm:space-y-12 space-y-6 sm:p-8 p-4 sm:py-10'>
                    <h1 className='text-center sm:text-4xl text-2xl font-semibold'>{t('createnewpass')}</h1>

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
                            label={t('repeat') + " " + "Password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            isRequired={true}
                        />

                        {/* Password requirements */}
                        <ul className="space-y-1 text-sm">
                            <li className={`flex items-center ${isMinLength ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isMinLength ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('minChar')}</span>
                            </li>
                            <li className={`flex items-center ${isUpperCase ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isUpperCase ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('uppercase')}</span>
                            </li>
                            <li className={`flex items-center ${isLowerCase ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isLowerCase ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('lowercase')}</span>
                            </li>
                            <li className={`flex items-center ${isNumber ? 'text-green-500' : 'text-labelColor'}`}>
                                <span className='flex items-center gap-2'>{isNumber ? <CiCircleCheck className='text-xl' /> : <CiCircleRemove className='text-xl text-red-500' />}{t('number')}</span>
                            </li>
                        </ul>

                        <div className='w-full'>
                            <Button label={t('update') + " " + 'Password'} onClick={handleSubmit} disabled={loading} />
                        </div>
                    </div>
                </div>
            </div>
        </MaxContainer>
    );
};

export default Page;
