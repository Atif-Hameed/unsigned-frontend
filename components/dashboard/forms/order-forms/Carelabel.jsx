'use client';
import React, { useState, useEffect, useContext } from 'react';
import CarelabelForm from '@/components/shared/Forms/CarelabelForm';
import { MyContext } from '@/components/provider/context-provider'; // Assuming context provider is set up
import { uploadFile } from '@/app/action/orders-action';

const Carelabel = () => {
    const { formData, setFormData } = useContext(MyContext); // Use context for formData and setFormData

    const [selectedLabel, setSelectedLabel] = useState(formData?.care_label.carelabel_name || 'unsigned'); // For care label selection
    const [file, setFile] = useState(formData?.care_label.custom_data.file || null); // For file upload
    const [textareaValue, setTextareaValue] = useState(formData?.care_label.custom_data.comments || ''); // For comments textarea
    const [brandFile, setBrandFile] = useState(formData?.care_label.brand_file || null); // For "My Brand Logo" file upload
    
    // Handler for label selection
    const handleSelect = (value) => {
        setSelectedLabel(value); // Update state on radio button selection
    };

    // Handler for file upload
    const handleFileChange = (file) => {
        setFile(file);
    };

    // Handler for brand logo file upload
    const handleBrandFileChange = async (file) => {
        if (file) {
            const fileUrl = await uploadFile(file); // Upload file to Firebase and get the URL
            if (fileUrl) {
                setBrandFile({ name: file.name, url: fileUrl, type: file.type }); // Save file info (name, URL, type)
            }
        } else {
            setBrandFile(null); // Remove file
        }
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
                brand_file: brandFile, // Brand logo file uploaded (if any)
                custom_data: {
                    comments: textareaValue, // Comments entered in the textarea
                    file: file, // File uploaded (if any)
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
