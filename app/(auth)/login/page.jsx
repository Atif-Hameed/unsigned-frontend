'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/images/logoSmall.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'
import { useRouter } from 'next/navigation'
import TrnaslateButton from '@/components/shared/TrnaslateButton'
import { useTranslation } from 'next-i18next'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

const Page = () => {
    const router = useRouter();
    const { t } = useTranslation();

    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        // Validate email and password
        if (!email || !password) {
            setErrorMessage('Please enter both email and password');
            toast.error('Please enter both email and password')
            setLoading(false);
            return;
        }

        const loadingToast = toast.loading('Logging in...');

        try {
            // const response = await axios.post('/api/login', { email, password });
            console.log(
                { email, password }
            )
            // localStorage.setItem("token", response.data.token); 
            router.push('/dashboard');
            toast.success('Successfully logged in');
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Failed to login. Please check your credentials.');
            toast.error('Failed to login. Please check your credentials.', {
                id: loadingToast,
                duration: 4000,
            });
        } finally {
            setLoading(false);
            toast.dismiss(loadingToast);
        }
    };


    // const handleLogin = async () => {
    //     try {
    //         if (email === "" || !email) {
    //             setEmailError(true);
    //             setPasswordError(false);
    //         } else if (password === "" || !password) {
    //             setEmailError(false);
    //             setPasswordError(true);
    //         } else {
    //             setLoading(true);
    //             const userCredential = await signInWithEmailAndPassword(
    //                 auth,
    //                 email,
    //                 password
    //             );
    //             const user = userCredential.user;

    //             const collections = ["users"];
    //             let userData;

    //             for (const collectionName of collections) {
    //                 const docRef = doc(db, collectionName, user.uid);
    //                 const docSnapshot = await getDoc(docRef);

    //                 if (docSnapshot.exists()) {
    //                     userData = {
    //                         id: docSnapshot.id,
    //                         ...docSnapshot.data(),
    //                     };
    //                     break; // Exit the loop once user data is found
    //                 }
    //             }

    //             if (userData) {
    //                 setErrorMessage("");
    //                 localStorage.setItem("token", user.accessToken);
    //                 localStorage.setItem("user", JSON.stringify(userData));
    //                 setLoading(false);
    //                 router.push("/home");
    //                 toast.success("Successfully logged in");
    //             } else {
    //                 setLoading(false);
    //                 setErrorMessage("User not verified or doesn't exist");
    //             }
    //         }
    //     } catch (error) {
    //         setLoading(false);
    //         setErrorMessage(error.message);
    //         toast.error(error.message);
    //     }
    // };


    return (
        <MaxContainer>
            <Toaster />
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>

                {/* logo */}
                <div className='lg:absolute flex justify-center top-1 left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                <div className='absolute right-10 top-3'>
                    <TrnaslateButton />
                </div>

                {/* login container */}
                <div className='bg-white sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full sm:space-y-12 space-y-6 sm:p-8 p-4 sm:py-10'>
                    <h1 className='text-center sm:text-4xl text-2xl font-semibold'>{t('login')}</h1>
                    <div className='space-y-6'>
                        <CustomInput
                            type='text'
                            label='Email'
                            isRequired={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <CustomInput
                            type='password'
                            label='Password'
                            isRequired={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage && <p className='text-red-500 text-center'>{errorMessage}</p>}
                        <div className='flex items-center justify-between pl-3'>
                            <Link href={'/forgot-password'} className='text-lightBlueText sm:text-xl text-lg'>{t('forgotPass')}?</Link>
                            <div className='w-fit'>
                                <Button label={t('login')} onClick={handleSubmit} disabled={loading} />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center text-center flex-wrap gap-4 justify-center text-xl'>
                        <h1 className='text-labelColor'>{t('noAccount')}</h1>
                        <Link href={'/signUp'} className='text-lightBlueText'>{t('signup')}</Link>
                    </div>
                </div>

            </div>
        </MaxContainer>
    )
}

export default Page;
