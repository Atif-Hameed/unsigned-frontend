import React from 'react'

const Heading = ({ children }) => {
    return (
        <h1 className='lg:text-4xl sm:text-3xl text-2xl text-dark font-medium'>
            {children}
        </h1>
    )
}

export default Heading
