import CustomCheckbox from '@/components/shared/CustomCheckbox';
import CustomDataUpload from '@/components/shared/CustomDataUpload';
import Heading from '@/components/shared/Heading';
import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import CustomTooltip from '../CustomTooltip';

const FabricForm = ({ data, selectedFabric, setSelectedFabric, file, setFile, textareaValue, setTextareaValue, error }) => {

    const handleCheckboxChange = (name) => {
        setSelectedFabric(name); // Only one can be selected at a time
    };

    const handleBoxClick = (name) => {
        setSelectedFabric(name);
    };

    return (
        <div className='py-9'>
            <Heading>Choose your fabric</Heading>
            <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                {data.map((e, i) => (
                    <div
                        key={i}
                        className='bg-lightBackground sm:h-[132px] h-24 p-5 flex items-start cursor-pointer'
                        onClick={() => handleBoxClick(e.name)}
                    >
                        <div className='flex items-center gap-3 justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <CustomCheckbox
                                    name={e.name}
                                    checked={selectedFabric === e.name} // Only one can be checked
                                    onClick={(e) => e.stopPropagation()} // Prevent triggering box click on checkbox click
                                    onChange={() => handleCheckboxChange(e.name)}
                                />
                                <p className='sm:text-xl text-lg font-semibold text-dark'>{e.label}</p>
                            </div>
                            {
                                i === 0 ?
                                    <CustomTooltip width='20rem' tooltipText="Jersey MOQ 300pcs, Fleece/French Terry MOQ 150pcs">
                                        <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                                    </CustomTooltip>
                                    :
                                    <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
                            }
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

                {error && (
                    <p className="text-red-500">{error}</p>
                )}
            </div>
        </div>
    );
};

export default FabricForm;
