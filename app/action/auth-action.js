"use client";

import { auth, db } from "@/config/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = await getUserData(user.uid);
                setUser(userDoc);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => unsub();
    }, []);

    const handleLoginWithEmailAndPassword = async (email, password) => {
        setIsLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userDoc = await getUserData(userCredential.user.uid);
            setUser(userDoc);
        } catch (error) {
            setError(error?.message);
        }
        setIsLoading(false);
    };

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            setError(error?.message);
        }
        setIsLoading(false);
    };

    const getUserData = async (uid) => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("User does not exist");
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
