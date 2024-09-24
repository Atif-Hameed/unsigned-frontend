'use client'
import FabricForm from '@/components/shared/Forms/FabricForm'
import Heading from '@/components/shared/Heading'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Fabric = () => {
    const currentPath = usePathname();

    const [selectedFabric, setSelectedFabric] = useState(''); // To track selected checkbox
    const [file, setFile] = useState(null); // To handle file in CustomDataUpload
    const [textareaValue, setTextareaValue] = useState(''); // To handle textarea in CustomDataUpload

    const handleFileChange = (file) => {
        setFile(file);
    };

    const handleTextareaChange = (value) => {
        setTextareaValue(value);
    };

    const fabricOptions = {
        labwears: [
            { label: 'Custom Fabric Request', name: 'Custom-Fabric-Request' },
            { label: '350 GSM 80% Baumwolle 20% Polyester brushed', name: '350GSM-80%-Baumwolle-20%-Polyester' },
            { label: '400 GSM 80% Baumwolle 20% Polyester brushed', name: '400GSM-80%-Baumwolle-20%-Polyester' },
            { label: '400 GSM 100% Baumwolle French Terry', name: '400GSM-100%-Baumwolle-French-Terry' },
            { label: '450 GSM 100% Baumwolle French Terry', name: '450GSM-100%-Baumwolle-French-Terry' },
            { label: '500 GSM 100% Baumwolle French Terry', name: '500GSM-100%-Baumwolle-French-Terry' },
        ],
        tShirts: [
            { label: 'Custom Fabric Request', name: 'Custom-Fabric-Request' },
            { label: '180GSM 100% Baumwolle Jersey', name: '180GSM-100%-Baumwolle-Jersey' },
            { label: '200GSM 100% Baumwolle Jersey', name: '200GSM-100%-Baumwolle-Jersey' },
            { label: '250GSM 100% Baumwolle Jersey', name: '250GSM-100%-Baumwolle-Jersey' },
            { label: '300GSM 100% Baumwolle Jersey', name: '300GSM-100%-Baumwolle-Jersey' },
        ]
    };

    // Function to get the appropriate fabric data based on current path
    const getFabricData = () => {
        return ['t-shirt', 'tank-top', 'long-sleeve']?.some(item => currentPath.includes(item))
            ? fabricOptions.tShirts
            : fabricOptions.labwears;
    };


    return (
        <FabricForm
            data={getFabricData()}
            selectedFabric={selectedFabric}
            setSelectedFabric={setSelectedFabric}
            file={file}
            setFile={handleFileChange}
            textareaValue={textareaValue}
            setTextareaValue={handleTextareaChange}
        />
    );
}

export default Fabric;
