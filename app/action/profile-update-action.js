

import { db } from '@/config/firebase-config';
import { deleteUser, getAuth } from 'firebase/auth';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

// Function to update user data
export const updateUserData = async (uid, userData) => {
    // Create a reference to the user's document
    const userRef = doc(db, "users", uid); // 'users' is the collection name and uid is the document ID
    // console.log("id",uid)
    try {
        // Update the user document with new data
        const res = await updateDoc(userRef, userData);
        // console.log(res)
        console.log("User data updated successfully in Firestore");
    } catch (error) {
        console.error("Error updating user data in Firestore:", error.message);
        throw new Error("Failed to update user data");
    }
};


export const deleteUserAccount = async (userId) => {
    const auth = getAuth();
    const user = auth.currentUser; // Assuming the user is authenticated
    const userRef = doc(db, 'users', userId); // Reference to Firestore document

    try {
        // Step 1: Delete the user document from Firestore
        await deleteDoc(userRef);

        // Step 2: Delete the user from Firebase Authentication
        await deleteUser(user);

        console.log('User account deleted successfully');
        return true; // Return true if successful
    } catch (error) {
        console.error('Error deleting user account:', error.message);
        throw new Error('Failed to delete user account');
    }
};
