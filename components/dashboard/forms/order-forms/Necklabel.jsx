'use client'
import React, { useState } from 'react';
import NecklabelForm from '@/components/shared/Forms/NecklabelForm';

const Necklabel = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedLabelOption, setSelectedLabelOption] = useState('standard');
    const [selectedMaterialOption, setSelectedMaterialOption] = useState('cotton_canvas');
    const [selectedFile, setSelectedFile] = useState(null);
    const [customSelectedFile, customSetSelectedFile] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');


    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };

    return (
        <div>
            <NecklabelForm
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
                selectedLabelOption={selectedLabelOption}
                onLabelOptionSelect={setSelectedLabelOption}
                selectedMaterialOption={selectedMaterialOption}
                onMaterialOptionSelect={setSelectedMaterialOption}
                selectedFile={selectedFile}
                onFileChange={setSelectedFile}
                onFileRemove={() => setSelectedFile(null)}
                customFile={customSelectedFile}
                onCustomFileChange={customSetSelectedFile}
                onCustomFileRemove={() => customSetSelectedFile(null)}
                onTextareaChange={handleTextareaChange}
            />
        </div>
    );
};

export default Necklabel;
