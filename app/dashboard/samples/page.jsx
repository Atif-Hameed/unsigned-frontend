
'use client'
import { getAllCompleteOrders, getAllSampleOrders } from '@/app/action/orders-action';
import InquiriesCards from '@/components/dashboard/startingCards/InquiriesCards'
import SampleCards from '@/components/dashboard/startingCards/SampleCards';
import { useAuth } from '@/components/provider/auth_context';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {

    const { user } = useAuth();

    // Use a function that returns another function to call getAllPendingOrders with the user ID
    const { data: myData, error, isLoading } = useQuery({
        queryKey: ['myData', user.uid], // Include user ID for the query
        queryFn: () => getAllSampleOrders(user.uid), // Function to fetch the data
    });
    // Handle loading state
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'>Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div className='min-h-screen flex justify-center items-center'>Error: {error.message}</div>;
    }
    // console.log("order", myData)
    return (
        <div>
            <SampleCards orders={myData} />
        </div>
    )
}

export default Page