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
    });

    return (
        // Use MyContext.Provider to pass down state and updater
        <MyContext.Provider value={{ formData, setFormData }}>
            {children}
        </MyContext.Provider>
    );
};
