'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/images/logoSmall.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'
import { IoArrowBack } from "react-icons/io5";
import TrnaslateButton from '@/components/shared/TrnaslateButton'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/config/firebase-config'

const Page = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            toast.error('Please enter a valid email address', {
                duration: 4000,
            });
            setLoading(false);
            return;
        }
        const loadingToastId = toast.loading('loading...');
        try {

            await sendPasswordResetEmail(auth, trimmedEmail);
            // const response = await axios.post('/api/reset-pass', { email: trimmedEmail });
            router.push(`/send-email?email=${trimmedEmail}&type=pass`);
            setLoading(false);
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send verification email', {
                id: loadingToastId,
                duration: 4000,
            });
            setLoading(false);
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
                    <Image alt={t('logoAlt')} src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                <div className='absolute right-10 top-3' >
                    <TrnaslateButton />
                </div>

                {/* main container */}
                <div className='bg-white relative sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full flex flex-col sm:gap-8 gap-6  sm:p-8 p-4 sm:py-10 '>

                    {/* back button */}
                    <Link href={'/'} className='absolute -top-[10%] left-4 text-lightBlueText flex items-center gap-2'>
                        <IoArrowBack className='text-xl' />
                        {t('back')}
                    </Link>

                    <h1 className='text-center sm:text-4xl text-2xl font-semibold'>
                        {t('forgotPassword')}
                    </h1>
                    <p className='text-center sm:text-2xl text-lg'>
                        {t('enterEmail')}
                    </p>
                    <div className='space-y-6'>
                        <CustomInput
                            type='text'
                            label={t('email')}
                            isRequired={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className=' w-full '>
                            <Button label={t('sendLink')} disabled={loading} onClick={handleSubmit} />
                        </div>
                    </div>

                </div>

            </div>
        </MaxContainer>
    )
}

export default Page;
