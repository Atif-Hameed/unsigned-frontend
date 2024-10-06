'use client';
import ColorsForm from '@/components/shared/Forms/ColorsForm';
import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '@/components/provider/context-provider'; // Assuming context provider is set up

const Colourway = () => {
  const { formData, setFormData } = useContext(MyContext); // Use context for formData and setFormData

  const [selectedColor, setSelectedColor] = useState(null); // To track selected color
  const [customColor, setCustomColor] = useState(''); // For custom color input
  const [file, setFile] = useState(null); // For handling file uploads
  const [textareaValue, setTextareaValue] = useState(''); // For handling comments in the textarea

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

  // Update formData in context when any of the color-related fields change
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      color: {
        color_code: selectedColor ? selectedColor : customColor, // Use selected color or custom input
        custom_data: {
          comments: textareaValue,
          file: file,
        }
      }
    }));
  }, [selectedColor, customColor, file, textareaValue, setFormData]);

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
