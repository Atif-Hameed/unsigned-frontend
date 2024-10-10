import React from 'react'
import Heading from '../Heading'
import CustomInput from '../CustomInput'
import { CiLock } from 'react-icons/ci'
import { useAuth } from '@/components/provider/auth_context'

const DeliveryForm = () => {
    const { user } = useAuth()
    return (
        <div className=''>
            <div className="">
                <Heading>Confirm shipping address</Heading>
            </div>
            <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
                <div className="bg-lightBackground p-5 rounded-3xl">
                    <div className="">
                        <h1>Billing Address</h1>
                    </div>
                    <div className="">
                        <CustomInput
                            type='text'
                            label='Compnay or recipients name'
                            isRequired={true}
                            inputStyle="!bg-lightBackground"
                            style='!bg-lightBackground'
                        />
                        <CustomInput
                            type='text'
                            label='Address Line 1'
                            isRequired={true}
                            inputStyle="!bg-lightBackground"
                            style='!bg-lightBackground'
                        />
                        <CustomInput
                            type='text'
                            label='Address Line 1'
                            inputStyle="!bg-lightBackground"
                            style='!bg-lightBackground'
                        />
                        <div className="flex gap-2 w-full">
                            <CustomInput
                                type='text'
                                label='Zip Code'
                                isRequired={true}
                                inputStyle="!bg-lightBackground "
                                style='!bg-lightBackground pl-3'
                            />
                            <CustomInput
                                type='text'
                                label='City'
                                isRequired={true}
                                inputStyle="!bg-lightBackground "
                                style='!bg-lightBackground'
                            />
                        </div>
                        <CustomInput
                            type='text'
                            label='Country'
                            isRequired={true}
                            inputStyle="!bg-lightBackground"
                            style='!bg-lightBackground'
                        />
                        <CustomInput
                            type='text'
                            label='VAT (Optional)'
                            inputStyle="!bg-lightBackground"
                            style='!bg-lightBackground'

                        />
                    </div>
                </div>
                <div className="">
                    <div className="bg-lightBackground p-5 rounded-3xl">
                        <div className="">
                            <h1>Delivery details</h1>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-gray-600 text-sm'>Same as billing address</label>
                            </div>
                        </div>
                        <div className="">
                            <CustomInput
                                type='text'
                                label='Compnay or recipients name'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                            />
                            <CustomInput
                                type='text'
                                label='Address Line 1'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                            />
                            <CustomInput
                                type='text'
                                label='Address Line 1'
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                            />
                            <div className="flex gap-2 w-full">
                                <CustomInput
                                    type='text'
                                    label='Zip Code'
                                    isRequired={true}
                                    inputStyle="!bg-lightBackground "
                                    style='!bg-lightBackground pl-3'
                                />
                                <CustomInput
                                    type='text'
                                    label='City'
                                    isRequired={true}
                                    inputStyle="!bg-lightBackground "
                                    style='!bg-lightBackground'
                                />
                            </div>
                            <CustomInput
                                type='text'
                                label='Country'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                            />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="bg-lightBackground p-5 rounded-3xl">
                        <div className="">
                            <h1>Contact information</h1>
                        </div>
                        <div className="">
                            <CustomInput
                                type='text'
                                label='Name'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                            />
                            <CustomInput
                                type='text'
                                label='Phone Number'
                                isRequired={true}
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                            />
                            <CustomInput
                                type='text'
                                label='Email'
                                inputStyle="!bg-lightBackground"
                                style='!bg-lightBackground'
                            />
                            <div className="flex ">
                                <CiLock size={32} className='pt-3' />
                                <p className='text-sm text-gray-600 px-4 py-3'>Your privacy is important to us. We will only contact you if there is an issue with your order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <textarea
                            className="w-full mt-4 bg-transparent text-lightBlue p-4 border border-gray-400 rounded-3xl focus:outline-none"
                            placeholder="Special requests or comments"
                            rows={3}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryForm