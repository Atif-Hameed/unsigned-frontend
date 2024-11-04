'use client'

import React, { useEffect, useRef, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import SampleBar from '../../shared/SampleBar';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineColorLens } from "react-icons/md";
import { Bulks, Inquiry, Orders, Samples } from '@/data';
import Button from '../../shared/Button';
import EmptyCards from './EmptyCards';
import { useRouter } from 'next/navigation';
import { deleteOrder } from '@/app/action/orders-action';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const SampleCards = ({ orders }) => {

    const [visibleCount, setVisibleCount] = useState(9); // Track number of visible cards
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state
    const [openPopupId, setOpenPopupId] = useState(null);
    const router = useRouter();
    const popupRef = useRef(null);
    const { t } = useTranslation();

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 9); // Load 10 more cards
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
            await deleteOrder(selectedOrder.id);
            toast.success("Order deleted successfully!");
            refetch();
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

            {/* Check if Bulks array is empty */}
            {orders && orders.length === 0 ? (
                <EmptyCards />
            ) : (
                <>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-6 gap-6 w-full">
                        {orders.slice(0, visibleCount).map((order, i) => (
                            <div
                                key={order.id}
                                className="bg-cardColor h-72 flex flex-col justify-between shadow-xl p-6"
                            >
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <h2 className="text-3xl font-bold flex flex-col text-[#1A1A1A]">#0{i + 1}
                                                <span className="text-sm text-labelColor">{order.category}</span>
                                            </h2>
                                            <p className="text-sm text-labelColor">{order.type}</p>
                                        </div>
                                        {/* <div className="relative">
                                            <button onClick={() => handleOpenPopup(order.id)}>
                                                <BiDotsVerticalRounded className="text-2xl text-lightBlue" />
                                            </button>
                                            {openPopupId === order.id && (
                                                <div ref={popupRef} className='absolute right-5 top-[10%] bg-white rounded-xl shadow-xl p-2'>
                                                    <button onClick={() => router.push(`/dashboard/designs/${order.id}`)} className='px-3 w-full rounded-lg py-2 cursor-pointer hover:bg-[#d6ece3]'>Edit</button>
                                                    <button onClick={() => handleDeleteClick(order)} className='px-3 py-2 w-full rounded-lg cursor-pointer hover:bg-[#d6ece3]'>Delete</button>
                                                </div>
                                            )}
                                        </div> */}
                                    </div>
                                    <div className="text-lightBlue flex items-center gap-1 mt-6">
                                        <MdOutlineColorLens className="text-lg" />
                                        <p className="">{order.status}</p>
                                    </div>
                                </div>

                                {/* <div className="flex justify-between items-center">
                                    <p className="text-labelColor">{order.date}</p>
                                    <button onClick={() => router.push(`/dashboard/designs/${order.id}`)} className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 rounded-full">
                                        Continue
                                    </button>
                                </div> */}
                            </div>
                        ))}
                    </div>

                    {/* Load more button */}
                    {visibleCount < Bulks.length && (
                        <div className="w-full flex items-end justify-end py-6">
                            <button
                                onClick={handleLoadMore}
                                className="bg-lightBlue text-white px-6 py-3 rounded-full"
                            >
                                Load more samples
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Delete Confirmation Dialog */}
            {/* {showDeleteDialog && (
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
                                    disabled={loading} 
                                >
                                    {loading ? 'Deleting...' : t('confirmDelete')} 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default SampleCards;
