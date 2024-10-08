'use client'
import Carelabel from '@/components/dashboard/forms/order-forms/Carelabel';
import Colourway from '@/components/dashboard/forms/order-forms/Colourway';
import Delivery from '@/components/dashboard/forms/order-forms/Delivery';
import Fabric from '@/components/dashboard/forms/order-forms/Fabric';
import Fit from '@/components/dashboard/forms/order-forms/Fit';
import Necklabel from '@/components/dashboard/forms/order-forms/Necklabel';
import Packaging from '@/components/dashboard/forms/order-forms/Packaging';
import Print from '@/components/dashboard/forms/order-forms/Print';
import Qunatity from '@/components/dashboard/forms/order-forms/Qunatity';
import { MyContext } from '@/components/provider/context-provider';
import Stepper from '@/components/shared/Stepper';
import { validateColoursForm, validateFabricForm, validateNeckLabelForm, validateQuantityForm } from '@/utils/validations';
import React, { useContext } from 'react';

const Page = () => {
  const { formData, setFormData } = useContext(MyContext);

  return (
    <div className='w-full flex justify-center'>
      <Stepper
        fitForm={<Fit />}
        fabricForm={<Fabric />}
        colourwayForm={<Colourway />}
        necklabelForm={<Necklabel />}
        carelabelForm={<Carelabel />}
        printForm={<Print />}
        packagingForm={<Packaging />}
        qunatityForm={<Qunatity />}
        deliveryForm={<Delivery />}
        validateFabricForm={() => validateFabricForm(formData, setFormData)}
        validateColorsForm={() => validateColoursForm(formData, setFormData)}
        validateNecklabelForm={() => validateNeckLabelForm(formData, setFormData)}
        validateQuantityForm={() => validateQuantityForm(formData, setFormData)}
      />
    </div>
  );
};

export default Page;
