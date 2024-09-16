import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/mainLogo.png'
import CustomInput from '@/components/shared/CustomInput'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import MaxContainer from '@/components/layout/MaxContainer'
import TrnaslateButton from '@/components/shared/TrnaslateButton'
import { useTranslation } from 'next-i18next'


const Page = () => {

    const {t}  = useTranslation();

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
            <div className='relative min-h-screen w-full px-6 flex lg:flex-row flex-col justify-center items-center'>

                {/* logo */}
                <div className='lg:absolute flex justify-center -top-[2%] left-[7%]'>
                    <Image alt='' src={logo} className='sm:w-48 w-28' unoptimized />
                </div>

                <div className='absolute right-10 top-3' >
                    <TrnaslateButton />
                </div>


                {/* main continer */}
                <div className='bg-white sm:mt-0 mt-16 rounded-3xl shadow-xl xl:w-[35%] lg:w-[45%] md:w-[60%] sm:w-[75%] w-full sm:space-y-12 space-y-6 sm:p-8 p-4 sm:py-10 ' >
                    <div>
                        <h1 className='text-center sm:text-4xl text-2xl font-semibold '>Welcome</h1>
                        <p className='text-center sm:text-4xl text-2xl'>to Unsigned</p>
                    </div>
                    <div className='space-y-6'>
                        <CustomInput
                            type='text'
                            label='Email'
                            isRequired={true}
                        />

                        <div className=' w-full '>
                            <Link href={'/signUp/create-password'} className='w-full'>
                                <Button label={'Continue'} />
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center text-center flex-wrap gap-4 justify-center text-xl'>
                        <h1 className='text-labelColor'>Already have an account?</h1><Link href={'/login'} className='text-lightBlueText'>Log in</Link>
                    </div>
                </div>

            </div >
        </MaxContainer>
    )
}

export default Page
