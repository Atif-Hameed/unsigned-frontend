'use client'
export const validateFabricForm = (formData, setFormData) => {
    const errors = {};

    if (!formData?.fabric.fabric_name) {
        errors.fabric_name = "Please select one option";
    }

    setFormData((prevData) => ({
        ...prevData,
        errors: {
            ...prevData.errors,
            ...errors,
        },
    }));

    return Object.keys(errors).length === 0;
};


export const validateColoursForm = (formData, setFormData) => {
    const errors = {};

    if (!formData?.color.color_code) {
        errors.color_code = "Select a color or add custom color";
    }

    setFormData((prevData) => ({
        ...prevData,
        errors: {
            ...prevData.errors,
            ...errors,
        },
    }));

    return Object.keys(errors).length === 0;
};


// export const validateNeckLabelForm = (formData, setFormData) => {
//     const errors = {};

//     // Validate color selection
//     if (!formData?.neck_label.label_color && formData?.neck_label.label_name !== 'no_label') {
//         errors.neck_label = "Select a color";
//     }

//     // Validate that "no_label" is not allowed
//     if (formData?.neck_label.label_name === 'no_label') {
//         errors.neck_label = "No label is not allowed";
//     }

//     setFormData((prevData) => ({
//         ...prevData,
//         errors: {
//             ...prevData.errors,
//             ...errors,
//         },
//     }));

//     return Object.keys(errors).length === 0;
// };



export const validateQuantityForm = (formData, setFormData) => {
    const errors = {};
    let totalQuantity = 0;

    if (formData?.quantity?.quantities) {
        for (const key in formData.quantity.quantities) {
            const quantity = formData.quantity.quantities[key];

            const quantityValue = Number(quantity);

            if (!isNaN(quantityValue) && quantityValue >= 0) {
                totalQuantity += quantityValue;
            }
        }

        if (totalQuantity < 50) {
            errors.quantity = "Minimum order quantity should be 50 in total";
        }
    }

    setFormData((prevData) => ({
        ...prevData,
        errors: {
            ...prevData.errors,
            ...errors,
        },
    }));
    

    return Object.keys(errors).length === 0;
};




export const validateDeliveryForm = (formData, setFormData) => {
    const errors = {};

    // Billing Address Validation
    if (!formData?.delivery?.billingAddress?.companyName) {
        errors.billingCompanyName = 'Company or recipient name is required for billing address';
    }
    if (!formData?.delivery?.billingAddress?.addressLine1) {
        errors.billingAddressLine1 = 'Address Line 1 is required for billing address';
    }
    if (!formData?.delivery?.billingAddress?.zipCode) {
        errors.billingZipCode = 'Zip Code is required for billing address';
    }
    if (!formData?.delivery?.billingAddress?.city) {
        errors.billingCity = 'City is required for billing address';
    }
    if (!formData?.delivery?.billingAddress?.country) {
        errors.billingCountry = 'Country is required for billing address';
    }

    // Delivery Address Validation (if not same as billing)
    if (!formData?.delivery?.deliveryAddress?.sameAsBilling) {
        if (!formData?.delivery?.deliveryAddress?.companyName) {
            errors.deliveryCompanyName = 'Company or recipient name is required for delivery address';
        }
        if (!formData?.delivery?.deliveryAddress?.addressLine1) {
            errors.deliveryAddressLine1 = 'Address Line 1 is required for delivery address';
        }
        if (!formData?.delivery?.deliveryAddress?.zipCode) {
            errors.deliveryZipCode = 'Zip Code is required for delivery address';
        }
        if (!formData?.delivery?.deliveryAddress?.city) {
            errors.deliveryCity = 'City is required for delivery address';
        }
        if (!formData?.delivery?.deliveryAddress?.country) {
            errors.deliveryCountry = 'Country is required for delivery address';
        }
    }

    // Contact Information Validation
    if (!formData?.delivery?.contactInfo?.name) {
        errors.contactName = 'Contact person name is required';
    }
    if (!formData?.delivery?.contactInfo?.phone) {
        errors.contactPhone = 'Phone number is required';
    }
    if (!formData?.delivery?.contactInfo?.email) {
        errors.contactEmail = 'Email address is required';
    }

    // Set the errors in formData
    setFormData((prevData) => ({
        ...prevData,
        errors: {
            ...prevData.errors,
            ...errors,
        },
    }));
    

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
};
