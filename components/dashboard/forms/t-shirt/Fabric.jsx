'use client'
import FabricForm from '@/components/shared/Forms/FabricForm'
import Heading from '@/components/shared/Heading'
import React, { useState } from 'react'

const Fabric = () => {

    const [selectedFabric, setSelectedFabric] = useState(''); // To track selected checkbox
    const [file, setFile] = useState(null); // To handle file in CustomDataUpload
    const [textareaValue, setTextareaValue] = useState(''); // To handle textarea in CustomDataUpload

    const handleFileChange = (file) => {
        setFile(file);
    };

    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };


    const fabricData = [
        { label: 'Custom Fabric Request', name: 'Custom-Fabric-Request' },
        { label: 'Jersey, 185GSM, 100% organic cotton', name: 'Jersey-185GSM-100%-organic-cotton' },
        { label: 'Jersey, 235GSM, 100% cotton', name: 'Jersey-235GSM-100%-cotton' },
        { label: 'Jersey, 235GSM, 100% organic cotton', name: 'Jersey-235GSM-100%-organic-cotton' },
        { label: 'Jersey, 295GSM, 100% cotton', name: 'Jersey-295GSM-100%-cotton' },
    ]

    return (
            <FabricForm
                data={fabricData}
                selectedFabric={selectedFabric}
                setSelectedFabric={setSelectedFabric}
                file={file}
                setFile={handleFileChange}
                textareaValue={textareaValue}
                setTextareaValue={handleTextareaChange}
            />
    )
}

export default Fabric
