import React, { useState } from 'react';
import useThemeContext from '../../custom_contexts/useThemeContext';
import moment from 'moment';
import useDeleteOrderApi from '../../axios/useDeleteOrderApi';
import { notifyError, notifySuccess } from '../../utilities/notification';
import { FiClock, FiTrash2 } from 'react-icons/fi';
import { AiFillCheckCircle } from 'react-icons/ai';

const OrderedFoodCard = ({ order, refetch }) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const { isDark } = useThemeContext()
    const { deleteOrderPromise } = useDeleteOrderApi()

    const formateDate = (date) => {
        const dateObject = new Date(date)
        return moment(dateObject).fromNow()
    };

    const handleDeleteFood = (id, email) => {
        setIsDeleting(true)
        deleteOrderPromise(id, email)
            .then(res => {
                if (res?.data?.deletedCount) {
                    notifySuccess('Food Item Deleted')
                    refetch()
                }
            })
            .catch(err => {
                notifyError(err.message)
            })
            .finally(() => { setIsDeleting(false) })
    };
    return (
        <div key={order._id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm overflow-hidden border border-gray-500  hover:shadow-xl transition-shadow`}>
            <div className="flex flex-col md:flex-row">
                {/* Food Image */}
                <div className="md:w-60">
                    <img
                        src={order.food.image}
                        alt={order.food.name}
                        className="w-full h-40 md:h-full object-cover"
                    />
                </div>

                {/* Order Details */}
                <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-semibold ">{order.food.foodName}</h2>
                            <p className="">{order.food.category}</p>
                        </div>
                        <span className="text-orange-400 font-medium">${order.food.price}</span>
                    </div>

                    <div>
                        <p>Quantity: {order.food.quantity}</p>
                    </div>

                    <div className="mt-4 flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                            <FiClock className="mr-1" />
                            <span>{formateDate(order.orderDate)}</span>
                        </div>
                        <div className={`flex items-center ${order.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                            <AiFillCheckCircle className="mr-1" />
                            <span className="capitalize">{order.status}</span>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="">
                            <span className="font-medium">Owner:</span> {order.customer}
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} md:w-24 flex md:flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-gray-400`}>
                    <button
                        disabled={isDeleting}
                        onClick={() => handleDeleteFood(order._id, order.buyerEmail)}
                        className="disabled:cursor-not-allowed cursor-pointer p-2 text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Delete order"
                    >
                        {
                            isDeleting
                                ? <span className="loading loading-spinner loading-md"></span>
                                : <FiTrash2 size={20} />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderedFoodCard;