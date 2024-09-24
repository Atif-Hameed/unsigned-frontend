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

const CarelabelForm = ({
  selectedLabel,
  onSelect,
  file,
  onFileChange,
  textareaValue,
  onTextareaChange,
}) => {
  return (
    <div className='w-full flex sm:flex-row flex-col'>
      <div className='lg:w-[32%] sm:w-[42%] w-full flex flex-col gap-3'>
        {/* Label Option Section */}
        <div className='p-5 bg-lightBackground rounded-3xl'>
          <div className='flex items-center gap-3 w-full'>
            <Heading>Select your care label option</Heading>
            <CustomTooltip width='30rem' tooltipText={'Care labels come as standard with a printed polyester label.'}>
              <HiQuestionMarkCircle className='text-lightBlue sm:text-2xl text-xl w-8' />
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
          ) : (
            <Image alt='Care label' src={carelabel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarelabelForm;
