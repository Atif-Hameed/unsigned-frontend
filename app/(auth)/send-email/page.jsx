'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '@/assets/images/logoSmall.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'
import { useRouter, useSearchParams } from 'next/navigation'
import TrnaslateButton from '@/components/shared/TrnaslateButton'
import { useTranslation } from 'next-i18next'
import img from '@/assets/images/emailSent.png'



const Page = () => {

    const { t } = useTranslation();
    const params = useSearchParams();
    const email = params.get('email')
    const type = params.get('type')
    const router = useRouter();

    useEffect(() => {
        // Check if the type is 'pass' to set up the redirect
        if (type === 'pass') {
            const timer = setTimeout(() => {
                router.push('/login');
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [router, type]);

    return (
        <MaxContainer>
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>

                <div className='lg:absolute flex justify-center top-1 left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                <div className='absolute right-10 top-3' >
                    <TrnaslateButton />
                </div>

                <div className='bg-white sm:mt-0 mt-16  w-full space-y-6 sm:p-8 p-4 sm:py-10 ' >
                    <div className='flex flex-col items-center gap-6'>
                        <h1 className='text-center sm:text-4xl text-2xl font-semibold '>{t('checkEmail')}</h1>
                        <p className='text-center text-lg'>{t('emailSend')} <br /><span className='font-bold'>{email}</span></p>
                        <p className='text-center'>Please Check Your Spam Folder if email not found</p>
                    </div>

                    <div className='flex justify-center w-full'>
                        <Image alt='' src={img} />
                    </div>

                    <div className='flex items-center text-center flex-wrap gap-4 justify-center text-xl'>
                        <h1 className='text-labelColor'>{t('noReceive')}?</h1><Link href={type == 'pass' ? '/forgot-password' : '/signUp'} className='text-lightBlueText'>{t('resend')}</Link>
                    </div>
                </div>
            </div>
        </MaxContainer>
    )
}

export default Page
