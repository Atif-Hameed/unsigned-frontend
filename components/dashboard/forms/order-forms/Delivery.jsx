import { MyContext } from '@/components/provider/context-provider';
import DeliveryForm from '@/components/shared/Forms/DeliveryForm'
import React, { useContext } from 'react'

const Delivery = () => {

    const { formData, setFormData } = useContext(MyContext);
    

    return (
        <div>
            <DeliveryForm
                errors={formData?.errors?.delivery}
            />
        </div>
    )
}

export default Delivery