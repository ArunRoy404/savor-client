import { FaStar } from "react-icons/fa";
import Button from "../UI/Button";
import { FaRegHeart } from "react-icons/fa";
import useThemeContext from "../../custom_contexts/useThemeContext";

const FoodCard = ({ food }) => {

    const { isDark } = useThemeContext()

    const { image, name, purchaseCount, nutritional, rating, price, quantity } = food
    return (
        <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} cursor-pointer group z-10 overflow-hidden text-left flex-shrink-0 relative  rounded-2xl hover:drop-shadow-xl transition duration-400`}>
            <img className="group-hover:scale-105 transition duration-300 h-40 min-w-70 w-full md:h-50 object-cover" src={image} alt="" />
            <div className="absolute top-5 right-5 cursor-pointe" >
                <FaRegHeart color="orange" size={25} />
            </div>
            <div className="p-5">
                <h1 className="font-bold">{name}</h1>
                <div className="flex items-center justify-between gap-6 mt-1">
                    <p className="text-orange-400 font-bold text-xl">${price}</p>
                    <p className="text-sm font-bold flex items-center justify-center gap-2">
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
                        to={`/food/${food._id}`}>Details</Button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;