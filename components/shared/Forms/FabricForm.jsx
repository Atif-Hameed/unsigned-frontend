import CustomCheckbox from '@/components/shared/CustomCheckbox';
import CustomDataUpload from '@/components/shared/CustomDataUpload';
import Heading from '@/components/shared/Heading';
import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import CustomTooltip from '../CustomTooltip';

const FabricForm = ({ data, selectedFabric, setSelectedFabric, file, setFile, textareaValue, setTextareaValue }) => {

    const handleCheckboxChange = (name) => {
        setSelectedFabric(name); // Only one can be selected at a time
    };

    return (
        <div className='py-12'>
            <Heading>Choose your fabric</Heading>
            <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                {data.map((e, i) => (
                    <div key={i} className='bg-lightBackground rounded-3xl sm:h-[132px] h-24 p-5 flex items-start'>
                        <div className='flex items-center gap-3 justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <CustomCheckbox
                                    name={e.name}
                                    checked={selectedFabric === e.name} // Only one can be checked
                                    onChange={() => handleCheckboxChange(e.name)}
                                />
                                <p className='sm:text-xl text-lg font-semibold text-dark'>{e.label}</p>
                            </div>
                            <CustomTooltip width='20rem' tooltipText="Lemon Chrome\nPANTONE 13-0859 TCX">
                        <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                    </CustomTooltip>
                            {/* <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' /> */}
                        </div>
                    </div>
                ))}
                <div>
                    <CustomDataUpload
                        file={file}
                        onFileChange={setFile}
                        textareaValue={textareaValue}
                        onTextareaChange={setTextareaValue}
                    />
                </div>
            </div>
        </div>
    );
};

export default FabricForm;