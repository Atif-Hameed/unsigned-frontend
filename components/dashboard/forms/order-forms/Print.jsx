'use client';
import React, { useState, useEffect, useContext } from 'react';
import PrintForm from '@/components/shared/Forms/PrintForm';
import { MyContext } from '@/components/provider/context-provider'; // Assuming context provider is set up
import { uploadFile } from '@/app/action/orders-action'; // Import the file upload action

const Print = () => {
    const { formData, setFormData } = useContext(MyContext); // Use context for formData and setFormData
    const [selectedFile, setSelectedFile] = useState(formData?.print.template_file || null); // For template file upload
    const [textarea, setTextarea] = useState(formData?.print.custom_data.comments || ''); // For comments textarea
    const [isUploading, setIsUploading] = useState(false); // Loading state

    // Handler for template file upload
    const handleFileChange = async (file) => {
        if (file) {
            setIsUploading(true); // Set loading to true
            try {
                const fileUrl = await uploadFile(file); // Upload file to Firebase and get the URL
                if (fileUrl) {
                    setSelectedFile({ name: file.name, url: fileUrl, type: file.type }); // Save file info (name, URL, type)
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            } finally {
                setIsUploading(false); // Set loading to false
            }
        } else {
            setSelectedFile(null); // Remove file
        }
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
            {/* Display loading overlay while uploading */}
            {isUploading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-white text-lg">Uploading...</div>
                </div>
            )}
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
