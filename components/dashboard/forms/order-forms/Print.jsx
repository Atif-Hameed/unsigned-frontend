'use client'
import React, { useState } from 'react';
import PrintForm from '@/components/shared/Forms/PrintForm';

const Print = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [textarea, setTextarea] = useState('');

    const handleFileChange = (file) => {
        setSelectedFile(file);
    };

    const handleTextareaChange = (text) => {
        setTextarea(text);
    };

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
