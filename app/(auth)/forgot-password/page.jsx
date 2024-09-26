'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logoSmall.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'
import { IoArrowBack } from "react-icons/io5";
import TrnaslateButton from '@/components/shared/TrnaslateButton'
import { useTranslation } from 'next-i18next'

const Page = () => {
    const { t } = useTranslation();

    return (
        <MaxContainer>
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
                        />

                        <div className=' w-full '>
                            <Link href={'/reset-password'} className='w-full'>
                                <Button label={t('sendLink')} />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </MaxContainer>
    )
}

export default Page;
