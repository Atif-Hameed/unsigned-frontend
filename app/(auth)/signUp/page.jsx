'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/images/logoSmall.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'
import TrnaslateButton from '@/components/shared/TrnaslateButton'
import { useTranslation } from 'next-i18next'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const Page = () => {

    const { t } = useTranslation();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            toast.error('Please enter a valid email address', {
                duration: 4000,
            });
            setLoading(false);
            return;
        }
        const loadingToastId = toast.loading('loading...');
        try {
            const response = await axios.post('/api/verify-email', { email: trimmedEmail });
            router.push(`/send-email?email=${trimmedEmail}&type=register`);
            setLoading(false);
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send verification email', {
                id: loadingToastId,
                duration: 4000,
            });
        } finally {
            setLoading(false);
            toast.dismiss(loadingToastId);
        }
    };




    // const handleSignup = (e) => {
    //     e.preventDefault();

    //     if (formData.username === "" || !formData.username) {
    //         setFormErrorHelper("username");
    //     } else if (formData.email === "" || !formData.email) {
    //         setFormErrorHelper("email");
    //     } else if (formData.password === "" || !formData.password) {
    //         setFormErrorHelper("password");
    //     } else {
    //         setFormError((prevFormError) => ({
    //             username: false,
    //             email: false,
    //             password: false,
    //         }));
    //         setLoading(true);
    //         createUserWithEmailAndPassword(auth, formData.email, formData.password)
    //             .then((userCredential) => {
    //                 const user = userCredential.user;
    //                 const userData = {
    //                     username: formData.username,
    //                     email: formData.email,
    //                     role: "user",
    //                 };
    //                 const usersCollectionRef = collection(db, "users");
    //                 const userDocRef = doc(usersCollectionRef, user.uid);

    //                 setDoc(userDocRef, userData)
    //                     .then(() => {
    //                         Router.push("/home");
    //                         toast.success("Signup successful");
    //                         setErrorMessage("");
    //                         setLoading(false);
    //                     })
    //                     .catch((error) => {
    //                         setLoading(false);
    //                         setErrorMessage(error.message);
    //                         toast.error(error.message);
    //                     });
    //             })
    //             .catch((error) => {
    //                 setLoading(false);
    //                 setErrorMessage(error.message);
    //                 toast.error(error.message);
    //             });
    //     }
    // };

    return (
        <MaxContainer>
            <Toaster />
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>

                {/* logo */}
                <div className='lg:absolute flex justify-center top-0 left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                <div className='absolute right-10 top-3' >
                    <TrnaslateButton />
                </div>


                {/* main continer */}
                <div className='bg-white sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full sm:space-y-12 space-y-6 sm:p-8 p-4 sm:py-10 ' >
                    <div>
                        <h1 className='text-center sm:text-4xl text-2xl font-semibold '>{t('welcom')}</h1>
                        <p className='text-center sm:text-4xl text-2xl'>{t('tounsigned')}</p>
                    </div>
                    <div className='space-y-6'>
                        <CustomInput
                            type='text'
                            label='Email'
                            isRequired={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className=' w-full '>
                            <Button label={t('continue')} disabled={loading} onClick={handleSubmit} />
                        </div>
                    </div>
                    <div className='flex items-center text-center flex-wrap gap-4 justify-center text-xl'>
                        <h1 className='text-labelColor'>{t('haveAccount')}?</h1><Link href={'/login'} className='text-lightBlueText'>{t('login')}</Link>
                    </div>
                </div>

            </div >
        </MaxContainer>
    )
}

export default Page
