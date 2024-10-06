'use client'
import React, { useState } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CustomDataUpload = ({ onFileChange = () => { }, onTextareaChange = () => { }, file = null, textareaValue = "" }) => {
    const [selectedFile, setSelectedFile] = useState(file);
    const [textarea, setTextarea] = useState(textareaValue);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            onFileChange(file); // Notify parent component
        }
    };

    const handleTextareaChange = (e) => {
        const value = e.target.value;
        setTextarea(value);
        onTextareaChange(value); // Notify parent component
    };

    const handleFileRemove = () => {
        setSelectedFile(null);
        onFileChange(null); // Reset file in parent component
    };

    return (
        <div className='bg-transparent  border border-dark p-5'>
            <textarea
                className='w-full outline-none bg-transparent h-full px-5'
                placeholder='special requests or comments'
                value={textarea}
                onChange={handleTextareaChange}
            />

            <div className='flex justify-between items-start w-full '>
                <div>
                    {selectedFile && (
                        <div className="flex items-center space-x-4">
                            <div className='flex items-center space-x-2'>
                                <div className='w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg'>
                                    <span className='text-blue-500 font-bold'>{selectedFile.type.split('/')[1].toUpperCase()}</span>
                                </div>

                                <div>
                                    <p className='text-gray-800'>{selectedFile.name}</p>
                                    <p className='text-gray-500 text-sm'>{(selectedFile.size / 1024).toFixed(1)} KB</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {!selectedFile && (
                    <div className='bg-white p-2 relative rounded-full cursor-pointer hover:bg-[#f3f6f9]'>
                        <GrAttachment className='text-lightBlue text-xl' />
                        <input
                            type="file"
                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                            onChange={handleFileChange}
                            name="fileUpload"
                            id="fileUpload"
                        />
                    </div>
                )}

                {selectedFile && (
                    <div onClick={handleFileRemove} className='bg-white cursor-pointer p-2 relative rounded-full hover:bg-[#f3f6f9]'>
                        <RiDeleteBin6Line className='text-lightBlue text-xl' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomDataUpload;
