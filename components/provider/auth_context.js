"use client";

import { auth } from "@/config/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // Store UID in localStorage
                localStorage.setItem("uid", user.uid);
            } else {
                setUser(null);
                // Remove UID from localStorage if logged out
                localStorage.removeItem("uid");
            }
            setIsLoading(false);
        });
        return () => unsub();
    }, []);

    // Login with email and password
    const handleLoginWithEmailAndPassword = async (email, password) => {
        setIsLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            localStorage.setItem("uid", userCredential.user.uid); // Store UID in localStorage
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Logout function
    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await signOut(auth);
            setUser(null);
            localStorage.removeItem("uid"); // Clear UID from localStorage on logout
        } catch (error) {
            setError(error?.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                error,
                handleLoginWithEmailAndPassword,  // Login function
                handleLogout,  // Logout function
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);
