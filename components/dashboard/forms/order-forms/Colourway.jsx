'use client';
import ColorsForm from '@/components/shared/Forms/ColorsForm';
import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '@/components/provider/context-provider'; // Assuming context provider is set up
import { Colors } from '@/data'; // Assuming Colors is the array of predefined colors

const Colourway = () => {
  const { formData, setFormData } = useContext(MyContext); // Use context for formData and setFormData

  const [selectedColor, setSelectedColor] = useState(
    Colors.some(color => color.colorCode === formData?.color.color_code)
      ? formData?.color.color_code
      : null
  );

  const [customColor, setCustomColor] = useState(
    Colors.every(color => color.colorCode !== formData?.color.color_code)
      ? formData?.color.color_code
      : ''
  );

  const [file, setFile] = useState(formData?.color.custom_data.file || null); // For handling file uploads
  const [textareaValue, setTextareaValue] = useState(formData?.color.custom_data.comments || ''); // For handling comments in the textarea


  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCustomColor(''); // Clear custom color when a predefined color is selected
  };

  // Handle custom color input
  const handleCustomColorChange = (e) => {
    const inputColor = e.target.value;

    // Check if the custom color matches any of the predefined colors
    const matchedColor = Colors.find((color) => color.colorCode.toLowerCase() === inputColor.toLowerCase());

    if (matchedColor) {
      // If it matches a predefined color, set it as the selected color
      setSelectedColor(matchedColor.colorCode);
      setCustomColor(''); // Clear custom color since it matches a predefined one
    } else {
      // Otherwise, set it as the custom color and clear the selectedColor state
      setCustomColor(inputColor);
      setSelectedColor(null); // Clear selected color since it's a custom input
    }
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
        color_code: selectedColor || customColor, // Use selected color or custom input
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
