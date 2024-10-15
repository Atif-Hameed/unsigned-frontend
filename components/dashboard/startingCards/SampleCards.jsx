'use client'

import React, { useEffect, useState, useRef } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import SampleBar from '../../shared/SampleBar';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineColorLens } from "react-icons/md";
import { deleteOrder, getAllSampleOrders } from '@/app/action/orders-action'; // Import the API function
import Button from '../../shared/Button';
import EmptyCards from './EmptyCards';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const SampleCards = () => {
    const [visibleCount, setVisibleCount] = useState(10); // Track number of visible cards
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState([]); // State to hold orders
    const [loading, setLoading] = useState(false); // Loading state
    const [openPopupId, setOpenPopupId] = useState(null);
    const router = useRouter();
    const popupRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        // Fetch orders when component mounts
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const sampleOrders = await getAllSampleOrders();
                setOrders(sampleOrders); // Set fetched orders to state
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 10); // Load 10 more cards
    };

    const handleOpenPopup = (orderId) => {
        setOpenPopupId((prevId) => (prevId === orderId ? null : orderId));
    };

    const handleDeleteClick = (order) => {
        setSelectedOrder(order);
        setShowDeleteDialog(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedOrder) return; // Check if an order is selected
        setLoading(true); // Set loading to true
        try {
            await deleteOrder(selectedOrder.id); // Assuming deleteOrder is an API function
            toast.success("Order deleted successfully!");
            // Refetch orders after deletion
            const sampleOrders = await getAllSampleOrders();
            setOrders(sampleOrders);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
            setShowDeleteDialog(false);
            setSelectedOrder(null);
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
        setSelectedOrder(null);
    };

    // Close the popup when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setOpenPopupId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col mx-auto items-center">
            <Toaster />
            <div className="flex justify-between w-full py-4">
                <SampleBar />
            </div>

            {/* Check if orders array is empty */}
            {orders.length === 0 ? (
                <EmptyCards />
            ) : (
                <>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-6 gap-6 w-full">
                        {orders.slice(0, visibleCount).map((order) => (
                            <div
                                key={order.id}
                                className="bg-cardColor h-72 flex flex-col justify-between shadow-xl p-6"
                                style={{ borderRadius: '25px' }}
                            >
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <h2 className="text-3xl font-bold text-dark">{order.id}</h2>
                                            <p className="text-sm text-labelColor">{order.type}</p>
                                        </div>
                                        <div className="relative">
                                            <button onClick={() => handleOpenPopup(order.id)}>
                                                <BiDotsVerticalRounded className="text-2xl text-lightBlue" />
                                            </button>
                                            {openPopupId === order.id && (
                                                <div ref={popupRef} className='absolute right-5 top-[10%] bg-white rounded-xl shadow-xl p-2'>
                                                    <button onClick={() => router.push(`/dashboard/designs/${order.id}`)} className='px-3 w-full rounded-lg py-2 cursor-pointer hover:bg-[#d6ece3]'>Edit</button>
                                                    <button onClick={() => handleDeleteClick(order)} className='px-3 py-2 w-full rounded-lg cursor-pointer hover:bg-[#d6ece3]'>Delete</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-lightBlue flex items-center gap-1 mt-6">
                                        <MdOutlineColorLens className="text-lg" />
                                        <p className="">{order.status}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="text-labelColor">{order.date}</p>
                                    <button onClick={() => router.push(`/dashboard/designs/${order.id}`)} className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 rounded-full">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load more button */}
                    {visibleCount < orders.length && (
                        <div className="w-full flex items-end justify-end py-6">
                            <button
                                onClick={handleLoadMore}
                                className="bg-lightBlue text-white px-6 py-3 rounded-full"
                            >
                                Load more drafts
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Delete Confirmation Dialog */}
            {showDeleteDialog && (
                <div className="">
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="relative">
                            <button
                                onClick={handleCancelDelete}
                                className="h-8 w-8 bg-white shadow rounded-full justify-center flex items-center absolute bottom-16 left-96 text-lightBlue"
                            >
                                <IoCloseOutline size={24} />
                            </button>
                        </div>
                        <div className="bg-cardColor p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
                            <h2 className="text-2xl font-medium text-labelColor text-center mb-4">
                                {t('deleteConfirmation')}
                            </h2>
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={handleCancelDelete}
                                    className="bg-bgColor text-white py-2 px-6 rounded-full"
                                >
                                    {t('cancel')}
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    className="bg-lightBlueText text-white py-2 px-6 rounded-full"
                                    disabled={loading} // Disable button while loading
                                >
                                    {loading ? 'Deleting...' : t('confirmDelete')} {/* Show loading state */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SampleCards;
