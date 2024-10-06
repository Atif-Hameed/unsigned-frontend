'use client';
import React, { useState, useEffect, useContext } from 'react';
import PrintForm from '@/components/shared/Forms/PrintForm';
import { MyContext } from '@/components/provider/context-provider'; // Assuming context provider is set up

const Print = () => {
    const { formData, setFormData } = useContext(MyContext); // Use context for formData and setFormData

    const [selectedFile, setSelectedFile] = useState(null); // For file upload
    const [textarea, setTextarea] = useState(''); // For comments textarea

    // Handler for file upload
    const handleFileChange = (file) => {
        setSelectedFile(file);
    };

    // Handler for textarea change
    const handleTextareaChange = (text) => {
        setTextarea(text);
    };

    // Update formData in context when the print fields change
    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            print: {
                template_file: selectedFile, // The selected print template file
                custom_data: {
                    comments: textarea, // The comments from the textarea
                    file: selectedFile, // Any additional file (same as the template file in this case)
                },
            },
        }));
    }, [selectedFile, textarea, setFormData]);

    return (
        <div>
            <PrintForm
                selectedFile={selectedFile}
                onFileChange={handleFileChange}
                textarea={textarea}
                onTextareaChange={handleTextareaChange}
            />
        </div>
    );
};

export default Print;
