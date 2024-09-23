'use client';
import ColorsForm from '@/components/shared/Forms/ColorsForm';
import React, { useState } from 'react';

const Colourway = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [customColor, setCustomColor] = useState('');
  const [file, setFile] = useState(null);
  const [textareaValue, setTextareaValue] = useState('');

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Handle custom color input
  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
  };

  // Handle file change
  const handleFileChange = (file) => {
    setFile(file);
  };

  // Handle textarea change
  const handleTextareaChange = (value) => {
    setTextareaValue(value);
  };

  return (
    <div>
      <ColorsForm
        selectedColor={selectedColor}
        onColorSelect={handleColorSelect}
        customColor={customColor}
        onCustomColorChange={handleCustomColorChange}
        file={file}
        onFileChange={handleFileChange}
        textareaValue={textareaValue}
        onTextareaChange={handleTextareaChange}
      />
    </div>
  );
};

export default Colourway;
