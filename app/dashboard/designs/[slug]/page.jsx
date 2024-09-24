import Colourway from '@/components/dashboard/forms/order-forms/Colourway'
import Delivery from '@/components/dashboard/forms/order-forms/Delivery'
import Fabric from '@/components/dashboard/forms/order-forms/Fabric'
import Fit from '@/components/dashboard/forms/order-forms/Fit'
import Necklabel from '@/components/dashboard/forms/order-forms/Necklabel'
import Packaging from '@/components/dashboard/forms/order-forms/Packaging'
import Qunatity from '@/components/dashboard/forms/order-forms/Qunatity'
import Stepper from '@/components/shared/Stepper'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex justify-center '>
      <Stepper
        fitForm={<Fit />}
        fabricForm={<Fabric />}
        colourwayForm={<Colourway />}
        necklabelForm={<Necklabel />}
        packagingForm={<Packaging />}
        qunatityForm={<Qunatity />}
        deliveryForm={<Delivery />}
      />
    </div>
  )
}

export default Page
