import { MyContext } from '@/components/provider/context-provider';
import QunatityForm from '@/components/shared/Forms/QunatityForm'
import React, { useContext } from 'react'

const Qunatity = () => {

    const { formData, setFormData } = useContext(MyContext);

    return (
        <div>
            <QunatityForm error={formData?.errors.quantity} />
        </div>
    )
}

export default Qunatity