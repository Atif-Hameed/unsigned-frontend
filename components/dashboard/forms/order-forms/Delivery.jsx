import { MyContext } from '@/components/provider/context-provider';
import DeliveryForm from '@/components/shared/Forms/DeliveryForm'
import React, { useContext } from 'react'

const Delivery = () => {

    const { formData, setFormData } = useContext(MyContext);
    
    // console.log(formData?.errors)

    return (
        <div>
            <DeliveryForm
                errors={formData?.errors}
            />
        </div>
    )
}

export default Delivery