import React from 'react'

const MaxContainer = ({ children }) => {
    return (
        <div className='w-full  flex justify-center h-full items-center'>
            <div className='w-full  max-w-[1950px]  h-full flex justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

export default MaxContainer
