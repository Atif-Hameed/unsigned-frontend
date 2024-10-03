'use client'

import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import SampleBar from '../../shared/SampleBar';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineColorLens } from "react-icons/md";
import { Bulks, Inquiry, Orders, Samples } from '@/data';
import Button from '../../shared/Button';
import EmptyCards from './EmptyCards';

const InquiriesCards = () => {
    const [visibleCount, setVisibleCount] = useState(10); // Track number of visible cards
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 10); // Load 10 more cards
    };

    const handleDeleteClick = (order) => {
        setSelectedOrder(order);
        setShowDeleteDialog(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Deleting order ${selectedOrder.id}`);
        setShowDeleteDialog(false);
        setSelectedOrder(null);
    };

    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
        setSelectedOrder(null);
    };

    return (
        <div className="flex flex-col mx-auto items-center">
            <div className="flex justify-between w-full py-4">
                <SampleBar />
            </div>

            {/* Check if Bulks array is empty */}
            {Inquiry.length === 0 ? (
                <EmptyCards />
            ) : (
                <>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-6 gap-6 w-full">
                        {Inquiry.slice(0, visibleCount).map((order) => (
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
                                        <div className="">
                                            <button onClick={() => handleDeleteClick(order)}>
                                                <BiDotsVerticalRounded className="text-2xl text-lightBlue" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-lightBlue flex items-center gap-1 mt-6">
                                        <MdOutlineColorLens className="text-lg" />
                                        <p className="">{order.status}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="text-labelColor">{order.date}</p>
                                    <button className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 rounded-full">
                                        Continue
                                    </button>
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
                                Are you sure you want to delete this Bulk?
                            </h2>
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={handleCancelDelete}
                                    className="bg-bgColor text-white py-2 px-6 rounded-full"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    className="bg-lightBlueText text-white py-2 px-6 rounded-full"
                                >
                                    Sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InquiriesCards;
