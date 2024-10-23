

import { db } from '@/config/firebase-config';
import { deleteUser, getAuth } from 'firebase/auth';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

// Function to update user data
export const updateUserData = async (uid, userData) => {
    const userRef = doc(db, "users", uid);
    console.log("id", uid);
    console.log("DATA", userData);

    try {
        // Check if the document exists
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            console.error(`No document found with ID: ${uid}`);
            throw new Error("User document does not exist");
        }

        // Update the user document with new data
        const res = await updateDoc(userRef, userData);
        console.log(res)
        console.log("User data updated successfully in Firestore");
    } catch (error) {
        console.error("Error updating user data in Firestore:", error.message);
        throw new Error("Failed to update user data");
    }
};


export const deleteUserAccount = async (userId) => {
    const auth = getAuth();
    const user = auth.currentUser; // Get the currently authenticated user
    const userRef = doc(db, 'users', userId); // Reference to Firestore document

    if (!user) {
        console.error('No user is currently signed in.');
        throw new Error('User is not authenticated');
    }

    try {
        // Step 1: Delete the user document from Firestore
        await deleteDoc(userRef);
        console.log('User document deleted from Firestore');

        // Step 2: Delete the user from Firebase Authentication
        await deleteUser(user);
        console.log('User deleted from Firebase Authentication');

        return true; // Return true if successful
    } catch (error) {
        console.error('Error deleting user account:', error.message);
        throw new Error('Failed to delete user account');
    }
};
