

import { db } from '@/config/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';

// Function to update user data
export const updateUserData = async (uid, userData) => {
    // Create a reference to the user's document
    const userRef = doc(db, "users", uid); // 'users' is the collection name and uid is the document ID

    try {
        // Update the user document with new data
        await updateDoc(userRef, userData);
        console.log("User data updated successfully in Firestore");
    } catch (error) {
        console.error("Error updating user data in Firestore:", error.message);
        throw new Error("Failed to update user data");
    }
};
