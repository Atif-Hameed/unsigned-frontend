'use client'
import React from 'react';
import Heading from '../Heading';
import CustomTooltip from '../CustomTooltip';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import CustomRadioButton from '../CustomRadioButton';
import CustomDataUpload from '../CustomDataUpload';
import Image from 'next/image';
import carelabel from '@/assets/images/carelabel.png';
import carelabelEmpty from '@/assets/images/carelabelEmpty.png';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CarelabelForm = ({
  selectedLabel,
  onSelect,
  file,
  onFileChange,
  textareaValue, 
  onTextareaChange,
  brandFile, // Accept the new file state for "My Brand Logo"
  onBrandFileChange, // Accept the new file change handler for "My Brand Logo"
}) => {

  const handleBrandFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onBrandFileChange(file); // Trigger the parent function to update brand file state
    }
  };

  // Handle file removal for "My Brand Logo"
  const onBrandFileRemove = () => {
    onBrandFileChange(null); // Pass null to indicate removal of the file
  };

  return (
    <div className='w-full flex sm:flex-row flex-col'>
      <div className='lg:w-[32%] sm:w-[42%] w-full flex flex-col gap-3'>
        {/* Label Option Section */}
        <div className='sm:p-5 p-3 bg-lightBackground'>
          <div className='flex items-center sm:gap-3 gap-2 w-full'>
            <Heading>Select your care label option</Heading>
            <CustomTooltip width='lg:w-[30rem] sm:mr-0 mr-10 sm:w-[20rem] w-[10rem] ' tooltipText={'Care labels are made from polyester and will be printed. If you want fully custom care labels, please specify this in the special request box.'}>
              <HiQuestionMarkCircle className='text-lightBlue  sm:mr-0 mr-10 sm:text-2xl text-xl w-8' />
            </CustomTooltip>
          </div>
          <div className='flex flex-col gap-2 mt-3'>
            <CustomRadioButton
              value='my_brand'
              onChange={() => onSelect('my_brand')}
              isChecked={selectedLabel === 'my_brand'}
              name='labelOption'
              label={'My brand logo'}
            />
            <CustomRadioButton
              value='no_logo'
              onChange={() => onSelect('no_logo')}
              isChecked={selectedLabel === 'no_logo'}
              name='labelOption'
              label={'No Logo'}
            />
            <CustomRadioButton
              value='unsigned'
              onChange={() => onSelect('unsigned')}
              isChecked={selectedLabel === 'unsigned'}
              name='labelOption'
              label={'Unsigned'}
            />
          </div>
        </div>

        <div className='w-full mt-3'>
          <CustomDataUpload
            file={file}
            onFileChange={onFileChange}
            textareaValue={textareaValue}
            onTextareaChange={onTextareaChange}
          />
        </div>
      </div>

      <div className='lg:w-[68%] sm:w-[58%] flex justify-center items-center w-full'>
        <div className='xl:w-[45%] md:w-[65%] sm:w-[80%]'>
          {/* Conditional rendering of images based on selected label */}
          {selectedLabel === 'no_logo' ? (
            <Image alt='Care label empty' src={carelabelEmpty} />
          ) : selectedLabel === 'unsigned' ? (
            <Image alt='Care label' src={carelabel} />
          ) : (
            <div className='relative'>
              <Image alt='Care label empty' src={carelabelEmpty} />
              <div className='z-20 absolute top-8 left-1/2 -translate-x-1/2 cursor-pointer py-3 flex flex-col justify-start gap-2 items-center'>
                {/* Display uploaded file name or type */}
                <div>
                  {brandFile ? (
                    <div className='w-12 h-12 bg-lightBlueText flex items-center justify-center rounded-lg'>
                      <span className='text-blue-500 font-bold'>
                        {brandFile.type.split('/')[1].toUpperCase()}
                      </span>
                    </div>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-40'>
                {/* Upload button if no file is uploaded */}
                {!brandFile && (
                  <div className='bg-lightBlueText p-2 z-40 rounded-full hover:bg-lightBlue'>
                    <IoCloudUploadOutline className='text-lg text-white' />
                    <input
                      type='file'
                      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                      onChange={handleBrandFileChange} // Handle brand logo file upload
                    />
                  </div>
                )}
                {/* Delete button if file is uploaded */}
                {brandFile && (
                  <div
                    onClick={onBrandFileRemove}
                    className='bg-white cursor-pointer z-40 p-2 relative rounded-full hover:bg-[#f3f6f9] mt-4'
                  >
                    <RiDeleteBin6Line className='text-lightBlue text-xl' />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarelabelForm;
