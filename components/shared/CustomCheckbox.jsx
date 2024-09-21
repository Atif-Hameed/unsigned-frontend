'use client'
import React from 'react';

const CustomCheckbox = ({ checked, onChange, name }) => {
  return (
    <label className="flex items-center cursor-pointer flex-shrink-0">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`relative w-5 h-5 border-2 border-dark rounded-md transition-colors duration-300 flex items-center justify-center ${checked ? 'bg-lightBlueText border-none' : 'bg-transparent'}`}
      >
        {/* Checkmark */}
        {checked && (
          <span className="absolute mt-1 w-2 h-3 border-b-2 border-r-2 border-white transform rotate-45 -translate-y-1"></span>
        )}
      </span>
    </label>
  );
};

export default CustomCheckbox;
