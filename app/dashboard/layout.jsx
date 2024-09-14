import MaxContainer from '@/components/layout/MaxContainer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='flex w-full justify-center'>
            <MaxContainer>
                <div className='lg:w-[94%] w-full px-6' >
                    <Navbar />
                    {children}
                </div>
            </MaxContainer>
        </div>
    )
}

export default layout
