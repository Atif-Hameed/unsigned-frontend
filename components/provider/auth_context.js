'use client'
import { auth } from "@/config/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "@/config/firebase-config"; // Ensure you have your Firestore db configured

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Fetch additional user details from Firestore
                const userDoc = await getDoc(doc(db, "users", user.uid)); // Adjust to your Firestore collection
                if (userDoc.exists()) {
                    setUser({ ...user, ...userDoc.data() }); // Combine Firebase Auth user with Firestore data
                } else {
                    setUser({ uid: user.uid, email: user.email }); // Fallback if no profile exists
                }
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
            const user = userCredential.user;

            // Fetch additional user details from Firestore
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
                setUser({ ...user, ...userDoc.data() }); // Combine Firebase Auth user with Firestore data
            } else {
                setUser({ uid: user.uid, email: user.email }); // Fallback if no profile exists
            }
            localStorage.setItem("uid", user.uid);
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
