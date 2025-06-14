import { FaStar } from "react-icons/fa";
import Button from "../UI/Button";
import { FaRegHeart } from "react-icons/fa";

const FoodCard = ({ food }) => {
    const { image, name, purchaseCount, nutritional, rating, price } = food
    return (
        <div className="z-10 flex-shrink-0 relative text-black bg-white p-5 rounded-2xl hover:drop-shadow-lg transition duration-400">
            <img className="h-40 w-60 md:w-full object-cover rounded-md" src={image} alt="" />
             <FaRegHeart className="absolute top-10 right-10 cursor-pointer" color="white" size={30} />
            <h1 className="font-bold mt-5">{name}</h1>
            <p className="text-orange-400 font-bold text-xl mt-1">${price}</p>
            <div className="flex text-sm items-center justify-center gap-6 mt-2">
                <p className="opacity-50 font-bold">{nutritional.caloriesPerServing} Cal</p>
                <p className="font-bold flex items-center justify-center gap-2">
                    <FaStar color="orange" />
                    <span className="opacity-50"> {rating} Rating</span>
                </p>
            </div>

            <p className="font-medium opacity-70 text-sm mt-3">Total Served: {purchaseCount}</p>
            <div className="mt-3">
                <Button to={'/'}>Details</Button>
            </div>
        </div>
    );
};

export default FoodCard;