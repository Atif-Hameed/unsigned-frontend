import Fit from '@/components/dashboard/forms/t-shirt/Fit'
import Stepper from '@/components/shared/Stepper'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex justify-center '>
      <Stepper fitForm={<Fit/>}/>
    </div>
  )
}

export default Page
