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
        { label: '180GSM 100% Baumwolle Jersey', name: '180GSM-100%-Baumwolle-Jersey' },
        { label: '200GSM 100% Baumwolle Jersey', name: '200GSM-100%-Baumwolle-Jersey' },
        { label: '250GSM 100% Baumwolle Jersey', name: '250GSM-100%-Baumwolle-Jersey' },
        { label: '300GSM 100% Baumwolle Jersey', name: '300GSM-100%-Baumwolle-Jersey' },
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
