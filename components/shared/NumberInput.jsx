import React from 'react'

const NumberInput = ({ name, value, onChange }) => {
    return (
        <div className='bg-[#f7f7f7] rounded-2xl border border-transparent py-3 w-full  hover:border-lightBlue'>
            <input
                type="number"
                name={name}
                value={value}
                onChange={onChange}
                className='bg-transparent text-dark text-center w-full outline-none'
                min="0" // Optional: to ensure only non-negative numbers are input

            />
        </div>
    )
}

export default NumberInput
