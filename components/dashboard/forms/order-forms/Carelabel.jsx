'use client'
import React, { useState } from 'react';
import CarelabelForm from '@/components/shared/Forms/CarelabelForm';

const Carelabel = () => {
    const [selectedLabel, setSelectedLabel] = useState('unsigned'); // Default to 'unsigned'
    const [file, setFile] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');

    // Handler for label selection
    const handleSelect = (value) => {
        setSelectedLabel(value); // Update state on radio button selection
    };

    // Handler for file upload
    const handleFileChange = (file) => {
        setFile(file);
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
            />
        </div>
    );
};

export default Carelabel;
