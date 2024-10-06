'use client';
import React, { useState, useEffect, useContext } from 'react';
import NecklabelForm from '@/components/shared/Forms/NecklabelForm';
import { MyContext } from '@/components/provider/context-provider'; // Assuming context provider is set up

const Necklabel = () => {
    const { formData, setFormData } = useContext(MyContext); // Use context for formData and setFormData

    const [selectedColor, setSelectedColor] = useState(null); // To track selected color
    const [selectedLabelOption, setSelectedLabelOption] = useState('standard'); // For label option
    const [selectedMaterialOption, setSelectedMaterialOption] = useState('cotton_canvas'); // For material option
    const [selectedFile, setSelectedFile] = useState(null); // For handling single file uploads
    const [selectedFiles, setSelectedFiles] = useState([]); // For handling multiple file uploads
    const [customSelectedFile, setCustomSelectedFile] = useState(null); // For custom file uploads
    const [textareaValue, setTextareaValue] = useState(''); // For handling comments in the textarea
    const [isLabelVisible, setIsLabelVisible] = useState(true); // For label visibility

    // Handle changes to the textarea
    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };

    // Handle changes to the file input
    const handleFilesChange = (newFiles) => {
        setSelectedFiles(newFiles); // Update the state with the new files
    };

    // Toggle label visibility based on selected option
    const handleLabelOptionChange = (labelOption) => {
        setSelectedLabelOption(labelOption);
        if (labelOption === 'no_label') {
            setIsLabelVisible(false);
        } else {
            setIsLabelVisible(true);
        }
    };

    // Update formData in context when any neck label fields change
    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            neck_label: {
                label_name: selectedLabelOption, // Label option ('standard', 'no_label', etc.)
                label_material: selectedMaterialOption, // Material option ('cotton_canvas', etc.)
                label_color: selectedColor, // Selected color for the label
                custom_data: {
                    comments: textareaValue, // Comments entered in the textarea
                    file: selectedFile, // Single file uploaded
                    custom_file: customSelectedFile, // Custom file uploaded
                    files: selectedFiles, // Array of files uploaded
                },
            },
        }));
    }, [selectedLabelOption, selectedMaterialOption, selectedColor, selectedFile, customSelectedFile, selectedFiles, textareaValue, setFormData]);

    return (
        <div>
            <NecklabelForm
                selectedColor={selectedColor}
                selectedFiles={selectedFiles}
                onFilesChange={handleFilesChange}
                onColorSelect={setSelectedColor}
                selectedLabelOption={selectedLabelOption}
                onLabelOptionSelect={handleLabelOptionChange} // Updated to handle label visibility
                selectedMaterialOption={selectedMaterialOption}
                onMaterialOptionSelect={setSelectedMaterialOption}
                selectedFile={selectedFile}
                onFileChange={setSelectedFile}
                onFileRemove={() => setSelectedFile(null)}
                customFile={customSelectedFile}
                onCustomFileChange={setCustomSelectedFile}
                onCustomFileRemove={() => setCustomSelectedFile(null)}
                textareaValue={textareaValue} // Pass the textarea value
                onTextareaChange={handleTextareaChange} // Function to update the textarea
                isLabelVisible={isLabelVisible} // New prop for label visibility
            />
        </div>
    );
};

export default Necklabel;
