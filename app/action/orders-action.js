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

        console.log("Pending orders fetched successfully:", orders);
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

        console.log("Complete orders fetched successfully:", orders);
        return orders; // Return the array of orders
    } catch (error) {
        console.error("Error fetching complete orders from Firestore:", error.message);
        throw new Error("Failed to fetch complete orders");
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


//file name get
export const getFileNameFromUrl = (url) => {
    try {
        const decodedUrl = decodeURIComponent(url);
        const parts = decodedUrl.split('/'); // Split by slashes to get the path segments
        const lastSegment = parts[parts.length - 1]; // Get the last segment (e.g., 'uploads%2Fhero-shield.png?alt=media&token=...')
        const nameWithParams = lastSegment.split('?')[0]; // Remove any query parameters (e.g., 'uploads/hero-shield.png')
        const name = nameWithParams.split('/').pop(); // Get the actual file name (e.g., 'hero-shield.png')
        return name;
    } catch (error) {
        console.error('Error extracting file name:', error);
        return null;
    }
};

