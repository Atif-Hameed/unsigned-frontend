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


export const validateNeckLabelForm = (formData, setFormData) => {
    const errors = {};

    if (!formData?.neck_label.label_color) {
        errors.neck_label = "Select a color";
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
