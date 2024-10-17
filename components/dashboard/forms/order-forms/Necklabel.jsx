'use client';
import React, { useState, useEffect, useContext } from 'react';
import NecklabelForm from '@/components/shared/Forms/NecklabelForm';
import { MyContext } from '@/components/provider/context-provider';

const Necklabel = () => {
    const { formData, setFormData } = useContext(MyContext);

    const [selectedColor, setSelectedColor] = useState(formData?.neck_label.label_color || null);
    const [selectedLabelOption, setSelectedLabelOption] = useState(formData?.neck_label.label_name || 'standard');
    const [selectedMaterialOption, setSelectedMaterialOption] = useState(formData?.neck_label.label_material || 'cotton_canvas');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState(formData?.neck_label.files || []);
    const [customSelectedFile, setCustomSelectedFile] = useState(formData?.neck_label.custom_data.custom_file || null);
    const [textareaValue, setTextareaValue] = useState(formData?.neck_label.custom_data.comments || '');
    const [isLabelVisible, setIsLabelVisible] = useState(selectedLabelOption !== 'no_label');

    // Handle changes to the textarea
    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };

    // Handle changes to the file input
    const handleFilesChange = (newFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    // Toggle label visibility and clear related fields if "no_label" is selected
    const handleLabelOptionChange = (labelOption) => {
        setSelectedLabelOption(labelOption);
        if (labelOption === 'no_label') {
            setIsLabelVisible(false);
            setSelectedColor(null);
            setSelectedMaterialOption(''); // Clear the material selection
            setSelectedFile(null);
            setSelectedFiles([]);
        } else {
            setIsLabelVisible(true);
        }
    };

    console.log(selectedFiles)

    // Update formData in context when any neck label fields change
    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            neck_label: {
                label_name: selectedLabelOption,
                label_material: isLabelVisible ? selectedMaterialOption : '',
                label_color: isLabelVisible ? selectedColor : null,
                file: isLabelVisible ? selectedFile : null,
                files: isLabelVisible ? selectedFiles : [],
                custom_data: {
                    comments: textareaValue,
                    custom_file: customSelectedFile,
                },
            },
        }));
    }, [selectedLabelOption, selectedMaterialOption, selectedColor, selectedFile, customSelectedFile, selectedFiles, textareaValue, isLabelVisible, setFormData]);

    return (
        <div>
            <NecklabelForm
                selectedColor={selectedColor}
                selectedFiles={selectedFiles}
                onFilesChange={handleFilesChange}
                onColorSelect={setSelectedColor}
                selectedLabelOption={selectedLabelOption}
                onLabelOptionSelect={handleLabelOptionChange}
                selectedMaterialOption={selectedMaterialOption}
                onMaterialOptionSelect={setSelectedMaterialOption}
                selectedFile={selectedFile}
                onFileChange={setSelectedFile}
                onFileRemove={() => setSelectedFile(null)}
                customFile={customSelectedFile}
                onCustomFileChange={setCustomSelectedFile}
                onCustomFileRemove={() => setCustomSelectedFile(null)}
                textareaValue={textareaValue}
                onTextareaChange={handleTextareaChange}
                isLabelVisible={isLabelVisible}
                error={formData?.errors.neck_label}
            />
        </div>
    );
};

export default Necklabel;
