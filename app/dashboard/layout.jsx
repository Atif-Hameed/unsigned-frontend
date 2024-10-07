"use client";
import AuthContextProvider, { useAuth } from "@/components/provider/auth_context";
import MaxContainer from "@/components/layout/MaxContainer";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
    return (
        <AuthContextProvider>
            <InnerLayout>{children}</InnerLayout>
        </AuthContextProvider>
    );
}

function InnerLayout({ children }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/login");  // Redirect to login if not authenticated
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (!user) {
        return <h2>Redirecting to login...</h2>;
    }

    return (
        <div className="flex w-full justify-center">
            <MaxContainer>
                <div className="lg:w-[94%] w-full px-6">
                    <Navbar />
                    {children}
                </div>
            </MaxContainer>
        </div>
    );
}
