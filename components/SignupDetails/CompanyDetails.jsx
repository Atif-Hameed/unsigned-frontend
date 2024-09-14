import React from 'react'
import CustomInput from '../shared/CustomInput'
import Link from 'next/link'
import Button from '../shared/Button'

const CompanyDetails = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center w-full' >
                <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor '>Tell us more about your brand</h1>
                <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                    <CustomInput
                        type={'text'}
                        label={'Brand Name'}
                        isRequired={true}
                    />
                    <CustomInput
                        type={'text'}
                        label={'VAT'}
                        isRequired={true}
                    />
                    <CustomInput
                        type={'text'}
                        label={'Company Website'}
                        isRequired={true}
                    />
                    <CustomInput
                        type={'text'}
                        label={'Instagram Link'}
                    />
                    <p className='text-xs w-full text-labelColor text-start'>*required field</p>
                    <div className='w-full mt-6' >
                        <Button label={'Continue'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails
