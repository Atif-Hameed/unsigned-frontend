import Colourway from '@/components/dashboard/forms/order-forms/Colourway'
import Fabric from '@/components/dashboard/forms/order-forms/Fabric'
import Fit from '@/components/dashboard/forms/order-forms/Fit'
import Necklabel from '@/components/dashboard/forms/order-forms/Necklabel'
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
      />
    </div>
  )
}

export default Page
