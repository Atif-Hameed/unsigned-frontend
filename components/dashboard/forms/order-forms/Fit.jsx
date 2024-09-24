'use client'
import React from 'react'
import { HiQuestionMarkCircle } from "react-icons/hi";
import CustomRadioButton from '@/components/shared/CustomRadioButton';
import img from '@/assets/images/shirtDesign.png';
import Image from 'next/image';
import NumberInput from '@/components/shared/NumberInput';
import { OrdersData } from '@/data/order-form-data';
import CustomDataUpload from '@/components/shared/CustomDataUpload';
import { usePathname } from 'next/navigation';

const Fit = () => {
    const path = usePathname();

    // Find the matching category in OrdersData
    const currentOrder = OrdersData.find(order => path.includes(order.category));

    if (!currentOrder) {
        return <div>No matching fit data found for this category.</div>;
    }

    // Extract size headers from the keys of the first entry in fitData
    const sizeHeaders = Object.keys(currentOrder.fitData[0]).filter(key => key !== 'name');

    return (
        <div className='w-full flex items-start gap-4'>
            {/* Sidebar with options */}
            <div className='w-[19%] flex flex-col gap-3'>
                {/* Select fit */}
                <div className='bg-lightBackground rounded-3xl p-10'>
                    <h1 className='flex items-center gap-1 text-4xl font-bold text-dark'>
                        Choose your fit <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                    </h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CustomRadioButton name='radio' label={'Regular fit'} />
                        <CustomRadioButton name='radio' label={'Boxy fit'} />
                        <CustomRadioButton name='radio' label={'Acne Fit'} />
                        <CustomRadioButton name='radio' label={'Kanye Fit'} />
                        <CustomRadioButton name='radio' label={'Zero Waste 1.0'} />
                    </div>
                </div>

                {/* Custom data upload */}
                <CustomDataUpload />
            </div>

            {/* Main content */}
            <div className='w-full flex-1 bg-lightBackground p-10 rounded-3xl'>
                <h1 className='flex items-center gap-1 text-4xl font-bold text-dark'>
                    Fill in the size chart <HiQuestionMarkCircle className='text-lightBlue text-2xl w-10' />
                </h1>

                <div className='flex justify-between items-center'>
                    <div className='w-[60%]'>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-1 text-center text-sm"></th>
                                        {sizeHeaders.map((size) => (
                                            <th key={size} className="px-1 text-center text-sm">{size.toUpperCase()}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentOrder.fitData.map((e, i) => (
                                        <tr key={i}>
                                            <td className="px-1 w-48 py-2 whitespace-normal text-sm text-start">
                                                <div className='flex items-center gap-2'>
                                                    <div className='bg-dark text-white px-2 pt-0.5 rounded-full'>
                                                        G
                                                    </div>
                                                    {e.name}
                                                </div>
                                            </td>
                                            {sizeHeaders.map((size) => (
                                                <td key={size} className="px-1 w-16 py-2 whitespace-nowrap text-sm text-start">
                                                    <NumberInput value={e[size]} />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='w-[40%]'>
                        <Image alt='Shirt design' src={currentOrder.fitImg} className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fit;
