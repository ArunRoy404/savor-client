import { FaStar } from "react-icons/fa";
import Button from "../UI/Button";
import { FaRegHeart } from "react-icons/fa";

const FoodCard = ({ food }) => {
    const { image, name, purchaseCount, nutritional, rating, price, quantity } = food
    return (
        <div className="z-10 overflow-hidden text-left flex-shrink-0 relative text-black bg-white rounded-2xl hover:drop-shadow-lg transition duration-400">
            <img className=" h-40 min-w-70 w-full md:h-50 object-cover" src={image} alt="" />
            <FaRegHeart className="absolute top-5 right-5 cursor-pointer" color="orange" size={30} />
            <div className="p-5">
                <h1 className="font-bold">{name}</h1>
                <div className="flex items-center justify-between gap-6 mt-1">
                    <p className="text-orange-400 font-bold text-xl">${price}</p>
                    <p className=" text-sm font-bold flex items-center justify-center gap-2">
                        <FaStar color="orange" />
                        <span className="opacity-50"> {rating} Rating</span>
                    </p>
                </div>
                <p className="mt-2 text-sm opacity-50 font-bold">{nutritional.caloriesPerServing} Cal</p>

                <div>
                    <p className="font-bold opacity-70 text-sm mt-3">Total Served: {purchaseCount}</p>
                    <p className="font-bold opacity-70 text-sm mt-3">Available: {quantity}</p>
                </div>
                <div className="mt-3">
                    <Button
                        className='cursor-pointer w-full rounded-full px-5 py-2 text-sm md:text-md font-bold border border-gray-300 hover:border-orange-400 transition duration-300'
                        to={`/food-detail`}>Details</Button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;