import { useState } from 'react';
import Button from '../components/UI/Button';
import useThemeContext from '../custom_contexts/useThemeContext';
import { FiMinus, FiPlus } from "react-icons/fi";
import { useParams } from 'react-router';
import useFoodDetailApi from '../axios/useFoodDetailApi';
import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../custom_contexts/UseAuthContext';
import Loader from '../components/Loader/Loader';
import Error from '../components/UI/Error';
import useBuyFoodApi from '../axios/useBuyFoodApi';
import { notifyError, notifySuccess, notifyWarn } from '../utilities/notification';
import useReduceStockApi from '../axios/useReduceStockApi';


const PurchaseFood = () => {
    const { isDark } = useThemeContext()
    const { firebaseUser } = useAuthContext()
    const { id } = useParams()
    const { foodDetailPromise } = useFoodDetailApi()
    const [quantity, setQuantity] = useState(1);
    const { buyFoodPromise } = useBuyFoodApi()
    const { reduceStockPromise } = useReduceStockApi()
    const [buying, setBuying] = useState(false)

    const { isPending, error, data: food, refetch } = useQuery({
        queryKey: ['foodDetail'],
        queryFn: () => foodDetailPromise(id)
            .then(res => res.data)
    })

    if (isPending) return <Loader />
    if (error) return <Error />



    const totalPrice = (food.price * quantity).toFixed(2);
    const purchaseDate = new Date().toLocaleString();

    const handleStock = () => {
        const stock = food.quantity - quantity
        reduceStockPromise(food._id, stock)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                }
            })
    }


    const handlePurchase = () => {
        const purchaseData = {
            food: {
                foodId: food._id,
                foodName: food.name,
                image: food.image,
                price: totalPrice,
                quantity,
                category: food.category
            },
            customer: firebaseUser?.displayName,
            buyerEmail: firebaseUser?.email,
            status: "completed",
            orderDate: purchaseDate
        };

        setBuying(true)

        buyFoodPromise(purchaseData)
            .then(res => {
                if (res.data.insertedId) {
                    notifySuccess("Food Purchased")
                    handleStock()
                } else {
                    notifyWarn("Something went wrong")
                }
            })
            .catch(err => {
                notifyError(err.message)
            })
            .finally(setBuying(false))
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
                            <p>Stock: {food.quantity}</p>
                        </div>
                    </div>

                    <div>
                        {/* Quantity Selector */}
                        <div className="flex flex-col items-end justify-between h-full">
                            <div className='flex items-center gap-3'>
                                <button
                                    disabled={quantity >= food.quantity}
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className='disabled:cursor-not-allowed disabled:opacity-20 border px-[6px] py-1 rounded border-gray-400 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 cursor-pointer'
                                >
                                    <FiPlus />
                                </button>
                                <p>{quantity}</p>
                                <button
                                    disabled={quantity == 1}
                                    onClick={() => setQuantity(prev => prev - 1)}
                                    className='disabled:cursor-not-allowed disabled:opacity-20 border px-[6px] py-1 rounded border-gray-400 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 cursor-pointer'
                                >
                                    <FiMinus />
                                </button>
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
                                <p>{firebaseUser?.displayName}</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='font-bold opacity-90 w-10'>Email </p>
                                <p>{firebaseUser?.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* time */}
                    <div className='mt-2'>
                        <p className='text-sm font-semibold'>{purchaseDate}</p>
                    </div>
                </div>

                {/* Purchase Button */}
                {
                    !food.quantity
                        ? <button
                            disabled
                            className="disabled:cursor-not-allowed cursor-pointer mt-6 w-full py-3 px-6 rounded-lg bg-white border border-red-500 text-red-500 font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
                        >
                            Item is not Available
                        </button>
                        : firebaseUser?.email !== food?.ownerEmail
                            ? <button
                                disabled={buying}
                                onClick={handlePurchase}
                                className="disabled:cursor-not-allowed cursor mt-4 w-full py-3 px-6 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
                            >
                                {
                                    buying
                                        ? <span class="loading loading-spinner loading-md"></span>
                                        : 'Complete Purchase'
                                }
                            </button>
                            : <Button
                                to={"/my-foods"}
                                className="cursor-pointer mt-6 w-full py-3 px-6 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
                            >
                                Update
                            </Button>
                }

            </div>
        </div>
    )
};

export default PurchaseFood;