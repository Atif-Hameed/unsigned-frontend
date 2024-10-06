import React from 'react'

const Button = ({ label, onClick, className,disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`w-full sm:px-10 px-6 hover:scale-105 whitespace-nowrap py-3 text-white bg-black rounded-full ${className}`}>
            {label}
        </button>
    )
}

export default Button
