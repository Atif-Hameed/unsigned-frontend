'use client';
import React, { useState, useEffect, useContext } from 'react';
import CarelabelForm from '@/components/shared/Forms/CarelabelForm';
import { MyContext } from '@/components/provider/context-provider'; // Assuming context provider is set up

const Carelabel = () => {
    const { formData, setFormData } = useContext(MyContext); // Use context for formData and setFormData

    const [selectedLabel, setSelectedLabel] = useState('unsigned'); // For care label selection
    const [file, setFile] = useState(null); // For file upload
    const [textareaValue, setTextareaValue] = useState(''); // For comments textarea
    const [brandFile, setBrandFile] = useState(null); // For "My Brand Logo" file upload

    // Handler for label selection
    const handleSelect = (value) => {
        setSelectedLabel(value); // Update state on radio button selection
    };

    // Handler for file upload
    const handleFileChange = (file) => {
        setFile(file);
    };

    // Handler for brand logo file upload
    const handleBrandFileChange = (file) => {
        setBrandFile(file);
    };

    // Handler for textarea change
    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };

    // Update formData in context when any care label fields change
    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            care_label: {
                carelabel_name: selectedLabel, // Care label selection ('unsigned', etc.)
                custom_data: {
                    comments: textareaValue, // Comments entered in the textarea
                    file: file, // File uploaded (if any)
                    brand_file: brandFile, // Brand logo file uploaded (if any)
                },
            },
        }));
    }, [selectedLabel, file, brandFile, textareaValue, setFormData]);

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
