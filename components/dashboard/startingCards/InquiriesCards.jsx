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

const InquiriesCards = ({ orders }) => {

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
                                    <div>
                                        <p>We received your inquiry, and we will send your offer to your email in 4-5 days.</p>
                                    </div>
                                </div>

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
                                Load more inquiries
                            </button>
                        </div>
                    )}
                </>
            )}

        </div>
    );
};

export default InquiriesCards;
