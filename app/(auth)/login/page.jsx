"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/shared/CustomInput";
import Button from "@/components/shared/Button";
import MaxContainer from "@/components/layout/MaxContainer";
import toast, { Toaster } from "react-hot-toast";
import logo from "@/assets/images/logoSmall.png";
import Link from "next/link";
import TrnaslateButton from "@/components/shared/TrnaslateButton";
import { useAuth } from "@/app/action/auth-action";
import { useTranslation } from "react-i18next";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase-config";

const Page = () => {

    const { t } = useTranslation();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage("Please enter both email and password");
            toast.error("Please enter both email and password");
            return;
        }

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            toast.error('Please enter a valid email address', {
                duration: 4000,
            });
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, password);

            localStorage.setItem("uid", userCredential.user.uid);

            setIsLoading(false);
            toast.success("Successfully logged in");
            router.push("/dashboard");
        } catch (error) {
            setErrorMessage(error?.message || "Failed to login.");
            toast.error(error?.message || "Failed to login.");
        }
    };

    return (
        <MaxContainer>
            <Toaster />
            <div className="relative min-h-screen w-full px-6 flex flex-col justify-center items-center">
                <div className="lg:absolute flex justify-center top-1 left-[7%]">
                    <Image alt="logo" src={logo} className="sm:w-48 w-28" unoptimized />
                </div>
                <div className="absolute right-10 top-3">
                    <TrnaslateButton />
                </div>
                <div className="bg-white sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] w-full space-y-6 p-8">
                    <h1 className="text-center text-4xl font-semibold">{t('login')}</h1>
                    <CustomInput
                        type="text"
                        label="Email"
                        isRequired
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CustomInput
                        type="password"
                        label="Password"
                        isRequired
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    <div className='flex items-center justify-between pl-3'>
                        <Link href={'/forgot-password'} className='text-lightBlueText sm:text-xl text-lg'> {t('forgotPass')}?</Link>
                        <div className='w-fit'>
                            <Button label={t('login')} onClick={handleSubmit} />
                        </div>
                    </div>
                    <div className="flex justify-center text-lg">
                        <p>{t('noAccount')}?</p>
                        <Link href="/signUp" className="text-lightBlueText">{t('signup')}</Link>
                    </div>
                </div>
            </div>
        </MaxContainer>
    );
};

export default Page;
