"use client";

import { auth } from "@/config/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Only access localStorage if window is defined (client-side)
        if (typeof window !== "undefined") {
            const uid = localStorage.getItem("uid");
            if (uid) {
                setUser({ uid });
            }
        }

        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                localStorage.setItem("uid", user.uid);
            } else {
                setUser(null);
                localStorage.removeItem("uid");
            }
            setIsLoading(false);
        });

        return () => unsub();
    }, []);

    const handleLoginWithEmailAndPassword = async (email, password) => {
        setIsLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            localStorage.setItem("uid", userCredential.user.uid);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await signOut(auth);
            setUser(null);
            localStorage.removeItem("uid");
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
                handleLoginWithEmailAndPassword,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
