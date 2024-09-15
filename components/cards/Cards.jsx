'use client'

import React, { useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import SampleBar from '../shared/SampleBar'
import { IoCloseOutline } from 'react-icons/io5'

const orders = [
    { id: '#36283', type: 'Shorts', status: 'Draft', date: '13.08.2024' },
    { id: '#36282', type: 'Shorts', status: 'Draft', date: '13.08.2024' },
    { id: '#36092', type: 'Hoodie', status: 'Draft', date: '12.08.2024' },
    { id: '#36093', type: 'Jacket', status: 'Draft', date: '11.08.2024' },
    { id: '#36094', type: 'T-shirt', status: 'Draft', date: '10.08.2024' },
    { id: '#36095', type: 'Sweater', status: 'Draft', date: '09.08.2024' },
    { id: '#36096', type: 'Pants', status: 'Draft', date: '08.08.2024' },
    { id: '#36097', type: 'Shorts', status: 'Draft', date: '07.08.2024' },
]

const Cards = () => {
    const [showAll, setShowAll] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null)

    const handleExpandToggle = () => {
        setShowAll((prevState) => !prevState)
    }

    const handleDeleteClick = (order) => {
        setSelectedOrder(order)
        setShowDeleteDialog(true)
    }

    const handleConfirmDelete = () => {
        console.log(`Deleting order ${selectedOrder.id}`)
        setShowDeleteDialog(false)
        setSelectedOrder(null)
    }

    const handleCancelDelete = () => {
        setShowDeleteDialog(false)
        setSelectedOrder(null)
    }

    return (
        <div className="flex flex-col max-w-5xl mx-auto items-center">
            <div className="flex justify-between w-full py-4">
                <SampleBar />
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-full">
                {orders.slice(0, showAll ? orders.length : 6).map((order) => (
                    <div key={order.id} className="bg-cardColor md:h-60 flex flex-col justify-between rounded-2xl shadow-md p-6">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h2 className="text-lg font-medium">{order.id}</h2>
                                <p className="text-sm text-labelColor">{order.type}</p>
                            </div>
                            <div className="">
                                <button onClick={() => handleDeleteClick(order)}>
                                    <BiDotsVerticalRounded size={28} />
                                </button>
                            </div>
                        </div>
                        <p className="text-lightBlueText">{order.status}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-labelColor">{order.date}</p>
                            <button className="bg-white hover:bg-labelColor hover:text-white text-black px-4 py-2 rounded-full">
                                Continue
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex items-end justify-end py-4">
                <button
                    onClick={handleExpandToggle}
                    className="bg-bgColor hover:bg-labelColor text-white px-6 pt-3 pb-2 rounded-full "
                >
                    {showAll ? 'Collapse' : 'Expand'}
                </button>
            </div>

            {/* Delete Confirmation Dialog */}
            {showDeleteDialog && (
                <div className="">
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="relative">
                            <button className='h-8 w-8 bg-white shadow rounded-full justify-center flex items-center absolute bottom-16 left-96 text-lightBlue'><IoCloseOutline size={24} /></button>
                        </div>
                        <div className="bg-cardColor p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
                            <h2 className="text-2xl font-medium text-labelColor  text-center mb-4">Are you sure you want to delete this draft?</h2>
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
    )
}

export default Cards
