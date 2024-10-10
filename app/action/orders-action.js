import { db } from '@/config/firebase-config';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

// Function to create a new order with status 'pending'
export const createOrder = async (orderData) => {
    const orderRef = doc(db, "orders"); // Reference to the 'orders' collection and document

    try {
        await setDoc(orderRef, { ...orderData, status: 'pending' }); // Create the order with 'pending' status
        console.log("Order created successfully in Firestore");
    } catch (error) {
        console.error("Error creating order in Firestore:", error.message);
        throw new Error("Failed to create order");
    }
};

// Function to update an order
export const updateOrder = async (orderID, orderData) => {
    const orderRef = doc(db, "orders", orderID); // Reference to the 'orders' collection and document

    try {
        await updateDoc(orderRef, orderData); // Update the order with new data
        console.log("Order updated successfully in Firestore");
    } catch (error) {
        console.error("Error updating order in Firestore:", error.message);
        throw new Error("Failed to update order");
    }
};
