import { db } from '@/config/firebase-config';
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Function to get a specific order by ID
export const getOrder = async (orderID) => {
    const orderRef = doc(db, "orders", orderID); // Reference to the specific order document

    try {
        const orderSnapshot = await getDoc(orderRef); // Fetch the document from Firestore

        if (orderSnapshot.exists()) {
            const orderData = { id: orderSnapshot.id, ...orderSnapshot.data() };
            // console.log("Order fetched successfully:", orderData);
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


// Function to delete an order
export const deleteOrder = async (orderID) => {
    const orderRef = doc(db, "orders", orderID); // Reference to the specific order document

    try {
        await deleteDoc(orderRef); // Delete the order document
        console.log(`Order deleted successfully `);
    } catch (error) {
        console.error("Error deleting order :", error.message);
        throw new Error("Failed to delete order");
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

        console.log("Pending orders fetched successfully",);
        return orders; // Return the array of orders
    } catch (error) {
        console.error("Error fetching pending orders from Firestore:", error.message);
        throw new Error("Failed to fetch pending orders");
    }
};



// Function to get all complete orders for a specific user
export const getAllCompleteOrders = async (user_id) => {
    const orderCollectionRef = collection(db, "orders"); // Reference to the 'orders' collection

    // Create a query to filter orders based on user_id and status
    const ordersQuery = query(
        orderCollectionRef, // Use the collection reference here
        where("user_id", "==", user_id),
        where("status", "==", "complete")
    );

    try {
        const querySnapshot = await getDocs(ordersQuery); // Execute the query
        const orders = [];

        querySnapshot.forEach((doc) => {
            // Push the document data into the orders array
            orders.push({ id: doc.id, ...doc.data() });
        });

        console.log("Complete orders fetched successfully");
        return orders; // Return the array of orders
    } catch (error) {
        console.error("Error fetching complete orders from Firestore:", error.message);
        throw new Error("Failed to fetch complete orders");
    }
};




// Function to get all orders with the status "samples"
export const getAllSampleOrders = async (user_id) => {
    const orderCollectionRef = collection(db, "orders"); // Reference to the 'orders' collection

    // Create a query to filter orders based on user_id and status "samples"
    const ordersQuery = query(
        orderCollectionRef,
        where("user_id", "==", user_id),
        where("status", "==", "samples")
    );

    try {
        const querySnapshot = await getDocs(ordersQuery); // Execute the query
        const orders = [];

        querySnapshot.forEach((doc) => {
            // Push the document data into the orders array
            orders.push({ id: doc.id, ...doc.data() });
        });

        console.log("Sample orders fetched successfully");
        return orders; // Return the array of orders
    } catch (error) {
        console.error("Error fetching sample orders from Firestore:", error.message);
        throw new Error("Failed to fetch sample orders");
    }
};


// Function to get all orders with the status "bulks"
export const getAllBulksOrders = async (user_id) => {
    const orderCollectionRef = collection(db, "orders"); // Reference to the 'orders' collection

    // Create a query to filter orders based on user_id and status "samples"
    const ordersQuery = query(
        orderCollectionRef,
        where("user_id", "==", user_id),
        where("status", "==", "bulks")
    );

    try {
        const querySnapshot = await getDocs(ordersQuery); // Execute the query
        const orders = [];

        querySnapshot.forEach((doc) => {
            // Push the document data into the orders array
            orders.push({ id: doc.id, ...doc.data() });
        });

        console.log("Sample orders fetched successfully");
        return orders; // Return the array of orders
    } catch (error) {
        console.error("Error fetching sample orders from Firestore:", error.message);
        throw new Error("Failed to fetch sample orders");
    }
};




// upalod file on firebase and get url

export const uploadFile = async (file) => {
    if (!file) return null;
    try {
        const storage = getStorage(); // Initialize Firebase storage
        const storageRef = ref(storage, `uploads/${file.name}`); // Create a reference to the file's path
        await uploadBytes(storageRef, file); // Upload the file to Firebase Storage
        const downloadURL = await getDownloadURL(storageRef); // Get the download URL after upload
        return downloadURL;
    } catch (error) {
        console.error('Error uploading file:', error);
        return null;
    }
};


export const uploadMultiFiles = async (files) => {
    if (!files || files.length === 0) return [];

    try {
        const storage = getStorage(); // Initialize Firebase storage
        const uploadPromises = files.map(async (file) => {
            const storageRef = ref(storage, `multiFileUploads/${file.name}`); // Create a reference to the file's path
            await uploadBytes(storageRef, file); // Upload the file to Firebase Storage
            const downloadURL = await getDownloadURL(storageRef); // Get the download URL after upload
            return downloadURL; // Return the download URL for this file
        });

        const downloadURLs = await Promise.all(uploadPromises); // Wait for all uploads to complete
        return downloadURLs; // Return an array of all download URLs
    } catch (error) {
        console.error('Error uploading files:', error);
        return [];
    }
};


//file name get
export function getFileNameFromUrl(url) {
    if (!url) return ''; // Return empty string if the URL is undefined or empty
    try {
        // Extract and decode the path from the URL
        const decodedPath = decodeURIComponent(url.split('/').pop().split('?')[0]);
        const fileName = decodedPath.split('/').pop();
        // Ensure the result is always a string
        return typeof fileName === 'string' ? fileName : '';
    } catch (error) {
        console.error('Error extracting file name:', error);
        return '';
    }
}

