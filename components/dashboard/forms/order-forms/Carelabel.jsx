'use client'
import React, { useState } from 'react';
import CarelabelForm from '@/components/shared/Forms/CarelabelForm';

const Carelabel = () => {
    const [selectedLabel, setSelectedLabel] = useState('unsigned'); 
    const [file, setFile] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');
    const [brandFile, setBrandFile] = useState(null); 

    // Handler for label selection
    const handleSelect = (value) => {
        setSelectedLabel(value); // Update state on radio button selection
    };

    // Handler for other file uploads (if there are any)
    const handleFileChange = (file) => {
        setFile(file);
    };

    // Handler for "My Brand Logo" file upload
    const handleBrandFileChange = (file) => {
        setBrandFile(file);
    };

    // Handler for textarea change
    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };

    return (
        <div>
            <CarelabelForm
                selectedLabel={selectedLabel}
                onSelect={handleSelect}
                file={file}
                onFileChange={handleFileChange}
                textareaValue={textareaValue}
                onTextareaChange={handleTextareaChange}
                brandFile={brandFile} 
                onBrandFileChange={handleBrandFileChange} 
            />
        </div>
    );
};

export default Carelabel;
