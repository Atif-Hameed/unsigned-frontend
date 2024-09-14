import React from 'react'
import CustomInput from '../shared/CustomInput'
import Link from 'next/link'
import Button from '../shared/Button'

const ShippingDetails = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center w-full' >
                <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor '>What is your billing & delivery address?</h1>
                <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                    <div className='w-full mt-3'>
                        <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>Billing address</h1>
                        <CustomInput
                            type={'text'}
                            label={'Adress Line 1'}
                        />
                        <CustomInput
                            type={'text'}
                            label={'Adress Line 2'}
                        />
                        <div className='w-full flex gap-2'>
                            <div className='w-[40%]' >
                                <CustomInput
                                    type={'text'}
                                    label={'Zip Code'}
                                />
                            </div>
                            <div className='w-[60%]' >
                                <CustomInput
                                    type={'text'}
                                    label={'City'}
                                />
                            </div>
                        </div>
                        <CustomInput
                            type={'text'}
                            label={'Country'}
                        />
                    </div>
                    <div className='w-full mt-3'>
                        <h1 className='text-labelColor sm:text-2xl text-lg text-start w-full'>Delivery address</h1>
                        <div className='flex items-center gap-2 w-full justify-start mt-2'>
                            <input type="checkbox" className='h-5 w-5' name="" id="" />
                            <p className='text-sm text-labelColor'>Delivery Address Same As Billing</p>
                        </div>
                        <CustomInput
                            type={'text'}
                            label={'Adress Line 1'}
                        />
                        <CustomInput
                            type={'text'}
                            label={'Adress Line 2'}
                        />
                        <div className='w-full flex gap-2'>
                            <div className='w-[40%]' >
                                <CustomInput
                                    type={'text'}
                                    label={'Zip Code'}
                                />
                            </div>
                            <div className='w-[60%]' >
                                <CustomInput
                                    type={'text'}
                                    label={'City'}
                                />
                            </div>
                        </div>
                        <CustomInput
                            type={'text'}
                            label={'Country'}
                        />
                    </div>
                    <div className='w-full mt-6 flex justify-between items-center' >
                        <button className='rounded-full text-lightBlueText hover:bg-blue-100 py-3 px-5' >
                            Skip
                        </button>
                        <div className='w-fit'>
                            <Button label={'Continue'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingDetails
