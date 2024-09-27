'use client'
import React, { useState } from 'react';
import NecklabelForm from '@/components/shared/Forms/NecklabelForm';

const Necklabel = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedLabelOption, setSelectedLabelOption] = useState('standard');
    const [selectedMaterialOption, setSelectedMaterialOption] = useState('cotton_canvas');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [customSelectedFile, setCustomSelectedFile] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');
    const [isLabelVisible, setIsLabelVisible] = useState(true); // New state for label visibility

    // Handle changes to the textarea
    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };

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
