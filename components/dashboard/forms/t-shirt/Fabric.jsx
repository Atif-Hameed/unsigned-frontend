import CustomCheckBox from '@/components/shared/CustomCheckbox'
import CustomDataUpload from '@/components/shared/CustomDataUpload'
import Heading from '@/components/shared/Heading'
import React from 'react'
import { HiQuestionMarkCircle } from 'react-icons/hi'

const Fabric = () => {

    const data = [
        { label: 'Custom Fabric Request' },
        { label: 'Jersey, 185GSM, 100% organic cotton' },
        { label: 'Jersey, 235GSM, 100% cotton' },
        { label: 'Jersey, 235GSM, 100% organic cotton' },
        { label: 'Jersey, 295GSM, 100% cotton' },
    ]

    return (
        <div className='py-12'>
            <Heading >Choose your fabric</Heading>
            <div className='w-full grid grid-cols-3 gap-3' >
                {
                    data.map((e, i) => (
                        <div key={i} className='bg-[#eeeeee] rounded-3xl  h-[132px] p-5 flex items-start '>
                            <div className='flex items-center gap-3 justify-between w-full'>
                                <div className='flex items-center gap-2 '>
                                    <div className='w-5 h-5'>
                                        <input type="checkbox" className='w-full h-full' name="" id="" />
                                    </div>
                                    <p className='text-xl font-semibold text-dark ' >{e.label}</p>
                                </div>
                                <HiQuestionMarkCircle className='text-lightBlue text-2xl w-8' />
                            </div>
                        </div>
                    ))
                }
                <div>
                    <CustomDataUpload />
                </div>
            </div>
        </div>
    )
}

export default Fabric
