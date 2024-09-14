import React from 'react'
import CustomInput from '../shared/CustomInput'
import Link from 'next/link'
import Button from '../shared/Button'

const PersonalDetails = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center w-full' >
                <h1 className='text-center sm:text-4xl text-2xl font-semibold text-labelColor '>How should we greet you?</h1>
                <div className='xl:w-[50%] md:w-[65%] w-[90%] flex flex-col items-center gap-2 mt-2'>
                    <CustomInput
                        type={'text'}
                        label={'First Name'}
                    />
                    <CustomInput
                        type={'text'}
                        label={'Last Name'}
                    />
                    <CustomInput
                        type={'text'}
                        label={'Phone Number'}
                    />
                    <CustomInput
                        type={'email'}
                        label={'Email (should auto fill)'}
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

export default PersonalDetails
