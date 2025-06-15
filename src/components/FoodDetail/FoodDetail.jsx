import { IoStar } from "react-icons/io5";
import DietTag from "./DietTag";
import AllergenTag from "./AllergenTag";

const FoodDetail = ({food}) => {
    return (
        <div className="space-y-5">
            <h1 className="text-3xl font-bold">{food.name}</h1>
            <p className="md:text-lg text-gray-400 font-semibold">{food.description}</p>

            {/* Category & Rating */}
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold bg-orange-100 text-orange-600  px-3 py-1 rounded-full">
                    {food.category}
                </span>
                <div className="flex items-center space-x-1">
                    <span className="font-bold">{food.rating}</span>
                    <IoStar color='orange' />
                </div>
            </div>

            {/* Price  */}
            <div className="">
                <span className="text-2xl font-semibold text-orange-500">${food.price.toFixed(2)}</span>
            </div>

            {/* Origin */}
            <div>
                <h3 className="font-semibold mb-1">Origin</h3>
                <p>{food.origin}</p>
            </div>

            {/* Dietary Info */}
            <div>
                <h3 className="font-semibold mb-2">Dietary Info</h3>
                <div className="flex flex-wrap gap-2">
                    {food.nutritional.dietaryTags.map((tag, i) => <DietTag key={`diet-${i}`}>{tag}</DietTag>)}
                    {food.nutritional.allergens.length > 0 &&
                        food.nutritional.allergens.map((allergen, i) => <AllergenTag key={`allergen-${i}`}>{allergen}</AllergenTag>)
                    }
                </div>
            </div>

            {/* Stock */}
            <div>
                <span className=" text-gray-400 font-semibold">In stock: {food.quantity}</span>
            </div>
        </div>
    );
};

export default FoodDetail;