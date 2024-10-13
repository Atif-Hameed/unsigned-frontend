import { db } from '@/config/firebase-config';
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';


// Function to get a specific order by ID
export const getOrder = async (orderID) => {
    const orderRef = doc(db, "orders", orderID); // Reference to the specific order document

    try {
        const orderSnapshot = await getDoc(orderRef); // Fetch the document from Firestore

        if (orderSnapshot.exists()) {
            const orderData = { id: orderSnapshot.id, ...orderSnapshot.data() };
            console.log("Order fetched successfully:", orderData);
            return orderData; // Return the order data
        } else {
            console.log("No such order found with the given ID");
            return null; // Return null if no order is found
        }
    } catch (error) {
        console.error("Error fetching order from Firestore:", error.message);
        throw new Error("Failed to fetch order");
    }
};




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



// Function to get all pending orders for a specific user
export const getAllPendingOrders = async (user_id) => {
    const orderCollectionRef = collection(db, "orders"); // Reference to the 'orders' collection

    // Create a query to filter orders based on user_id and status
    const ordersQuery = query(
        orderCollectionRef, // Use the collection reference here
        where("user_id", "==", user_id),
        where("status", "==", "pending")
    );

    try {
        const querySnapshot = await getDocs(ordersQuery); // Execute the query
        const orders = [];

        querySnapshot.forEach((doc) => {
            // Push the document data into the orders array
            orders.push({ id: doc.id, ...doc.data() });
        });

        console.log("Pending orders fetched successfully:", orders);
        return orders; // Return the array of orders
    } catch (error) {
        console.error("Error fetching pending orders from Firestore:", error.message);
        throw new Error("Failed to fetch pending orders");
    }
};
