// context/MyContext.js
'use client'
import { createContext, useState } from 'react';

// Create a Context
export const MyContext = createContext();

// Create a provider component
export const ContextProvider = ({ children }) => {

    // State to hold form data
    const [formData, setFormData] = useState({
        category: "",
        status: "pending",
        currentStep: 0,
        user_id: '',
        fit: {
            fit_type: '',
            fit_values: {},
            custom_data: {
                comments: "",
                file: "",
            }
        },
        fabric: {
            fabric_name: "",
            custom_data: {
                comments: "",
                file: "",
            }
        },
        color: {
            color_code: "",
            custom_data: {
                comments: "",
                file: "",
            }
        },
        neck_label: {
            label_name: "",
            label_material: "",
            label_color: "",
            files: "",
            custom_data: {
                comments: "",
                custom_file: "",
            }
        },
        care_label: {
            carelabel_name: "",
            brand_file: "",
            custom_data: {
                comments: "",
                file: "",
            }
        },

        print: {
            template_file: "",
            custom_data: {
                comments: "",
                // file: "",
            }
        },
        quantity: {
            quantities: {},
            custom_data: {
                comments: "",
                file: "",
            }
        },
        packing: {
            type: '',
            logo: '',
            custom_data: {
                comments: "",
                file: "",
            }
        },
        delivery: {
            billingAddress: {
                companyName: '',
                addressLine1: '',
                addressLine2: '',
                zipCode: '',
                city: '',
                country: '',
                vat: ''
            },
            deliveryAddress: {
                companyName: '',
                addressLine1: '',
                addressLine2: '',
                zipCode: '',
                city: '',
                country: '',
                sameAsBilling: false
            },
            contactInfo: {
                name: '',
                phone: '',
                email: '',
                specialRequests: ''
            }
        },
        errors: {},  // An errors object 
    });

    // console.log('formData', formData)

    const initialState = {
        category: "",
        status: "pending",
        currentStep: 0,
        user_id: '',
        fit: {
            fit_type: '',
            fit_values: {},
            custom_data: {
                comments: "",
                file: "",
            }
        },
        fabric: {
            fabric_name: "",
            custom_data: {
                comments: "",
                file: "",
            }
        },
        color: {
            color_code: "",
            custom_data: {
                comments: "",
                file: "",
            }
        },
        neck_label: {
            label_name: "",
            label_material: "",
            label_color: "",
            files: "",
            custom_data: {
                comments: "",
                custom_file: "",
            }
        },
        care_label: {
            carelabel_name: "",
            brand_file: "",
            custom_data: {
                comments: "",
                file: "",
            }
        },

        print: {
            template_file: "",
            custom_data: {
                comments: "",
                // file: "",
            }
        },
        quantity: {
            quantities: {},
            custom_data: {
                comments: "",
                file: "",
            }
        },
        packing: {
            type: '',
            logo: '',
            custom_data: {
                comments: "",
                file: "",
            }
        },
        delivery: {
            billingAddress: {
                companyName: '',
                addressLine1: '',
                addressLine2: '',
                zipCode: '',
                city: '',
                country: '',
                vat: ''
            },
            deliveryAddress: {
                companyName: '',
                addressLine1: '',
                addressLine2: '',
                zipCode: '',
                city: '',
                country: '',
                sameAsBilling: false
            },
            contactInfo: {
                name: '',
                phone: '',
                email: '',
                specialRequests: ''
            }
        },
        errors: {},  // An errors object 
    };
    const resetForm = () => setFormData({ ...initialState });

    return (
        // Use MyContext.Provider to pass down state and updater
        <MyContext.Provider value={{ formData, setFormData, resetForm }}>
            {children}
        </MyContext.Provider>
    );
};
