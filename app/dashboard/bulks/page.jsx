
'use client'
import { getAllBulksOrders, getAllCompleteOrders, getAllSampleOrders } from '@/app/action/orders-action';
import BulkCards from '@/components/dashboard/startingCards/BulkCards';
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
        queryFn: () => getAllBulksOrders(user.uid), // Function to fetch the data
    });
    // Handle loading state
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'>Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div className='min-h-screen flex justify-center items-center'>Error: {error.message}</div>;
    }
    console.log("order", myData)
    return (
        <div>
            <BulkCards orders={myData} />
        </div>
    )
}

export default Page