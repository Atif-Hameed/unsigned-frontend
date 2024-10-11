'use client';
import { getAllPendingOrders } from '@/app/action/orders-action';
import DraftCards from '@/components/dashboard/startingCards/DraftCards';
import { useAuth } from '@/components/provider/auth_context';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page = () => {
    const { user } = useAuth();

    // Use a function that returns another function to call getAllPendingOrders with the user ID
    const { data: myData, error, isLoading } = useQuery({
        queryKey: ['myData', user.uid], // Include user ID for the query
        queryFn: () => getAllPendingOrders(user.uid), // Function to fetch the data
    });
    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log("order", myData)
    return (
        <div>
            <DraftCards orders={myData} /> {/* Pass the fetched data to DraftCards */}
        </div>
    );
};

export default Page;
