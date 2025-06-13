import { foodItems } from "../../utilities/dummyFoodsData";
import FoodCard from "../FoodCard/FoodCard";

const TopFoodsContainer = () => {
    const sortedFoodItems = foodItems.sort((a, b)=>b.purchaseCount - a.purchaseCount)
    return (
        <div className="px-5 mt-10 md:mt-20  grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-15 xl:gap-30 md:px-15 xl:px-40">
            {
                sortedFoodItems.map((food, i)=>i<6 && <FoodCard food={food} key={i} />)
            }
        </div>
    );
};

export default TopFoodsContainer;