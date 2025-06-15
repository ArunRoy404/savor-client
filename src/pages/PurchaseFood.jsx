import React, { useEffect, useState } from 'react';
import { foodItems } from '../utilities/dummyFoodsData';
import Button from '../components/UI/Button';
import useThemeContext from '../custom_contexts/useThemeContext';
import { FiMinus, FiPlus } from "react-icons/fi";


const PurchaseFood = () => {
    //   const { name } = useParams(); // e.g., /purchase/Spaghetti%20Carbonara
    //   const food = foodItems.find(item => item.name.toLowerCase() === decodeURIComponent(name).toLowerCase());
    const food = foodItems[1]

    const { isDark } = useThemeContext()

    // Mock logged-in user data
    const currentUser = {
        name: "Arun Roy",
        email: "aurn.roy@example.com"
    };

    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        setQuantity(1)
    },[])

    if (!food) {
        return <div className="text-center py-10">Food not found</div>;
    }

    const totalPrice = (food.price * quantity).toFixed(2);
    const purchaseDate = new Date().toLocaleString();


    const handlePurchase = () => {
        const purchaseData = {
            foodName: food.name,
            price: food.price,
            quantity,
            totalPrice,
            buyerName: currentUser.name,
            buyerEmail: currentUser.email,
            purchaseDate
        };

        console.log("Purchase successful:", purchaseData);
        alert("Thank you for your purchase!");
        // Here you would typically send this data to backend or Redux
    };

    return (
        <div className=" min-h-screen py-10 px-4">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white/80'} transition-all duration-1000 max-w-3xl mx-auto p-6 md:p-8 rounded-xl shadow-lg`}>

                {/* Section Header */}
                <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Confirm Your Purchase</h1>

                <div className=' border-b pb-6 border-gray-400 mb-6 flex justify-between'>
                    {/* Food Info with Image */}
                    <div className="flex flex-col md:flex-row gap-6 items-start ">
                        {/* Image */}
                        <img
                            src={food.image}
                            alt={food.name}
                            className="w-24 h-24 object-cover rounded-lg shadow-md"
                        />

                        {/* Name & Price */}
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">{food.name}</h2>
                            <p className="text-orange-500 font-bold text-xl">${food.price.toFixed(2)}</p>
                        </div>
                    </div>

                    <div>
                        {/* Quantity Selector */}
                        <div className="flex flex-col items-end justify-between h-full">
                            <div className='flex items-center gap-3'>
                                <Button
                                    className='border px-[6px] py-1 rounded border-gray-400 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 cursor-pointer'
                                >
                                    <FiPlus />
                                </Button>
                                <p>{quantity}</p>
                                <Button
                                    className='border px-[6px] py-1 rounded border-gray-400 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 cursor-pointer'
                                >
                                    <FiMinus />
                                </Button>
                            </div>
                            <div>
                                <p className="text-lg font-bold opacity-80">${totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Total Price */}
                <div className="mb-6 flex gap-5 items-center justify-end">
                    <h3 className="block text-xl font-bold">Total</h3>
                    <p className="text-lg font-bold opacity-80">${totalPrice}</p>
                </div>


                <div className="mb-6 md:flex items-end justify-between">
                    <div>
                        {/* Buyer Info */}
                        <p className="block text-xl font-bold mb-2">Billing Address</p>
                        <div className='max-w-max'>
                            <div className='flex items-center gap-5'>
                                <p className='font-bold opacity-90 w-10'>Name</p>
                                <p>{currentUser.name}</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='font-bold opacity-90 w-10'>Email </p>
                                <p>{currentUser.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* time */}
                    <div className='mt-2'>
                        <p className='text-sm font-semibold'>{purchaseDate}</p>
                    </div>
                </div>

                {/* Purchase Button */}
                <button
                    onClick={handlePurchase}
                    className="mt-4 w-full py-3 px-6 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
                >
                    Complete Purchase
                </button>
            </div>
        </div>
    )
};

export default PurchaseFood;