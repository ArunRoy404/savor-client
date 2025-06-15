import useThemeContext from "../../custom_contexts/useThemeContext";
import { foodItems } from "../../utilities/dummyFoodsData";
import FoodCard from "../FoodCard/FoodCard";
import Filter from "../UI/Filter";
import Search from "../UI/Search";

const AllFoodsContainer = () => {

    const { isDark } = useThemeContext()

    return (
        <div className={`${isDark ? 'bg-[#2c313d]' : 'bg-[#dfdcdc]'}
                         mt-20 p-10 rounded-2xl`}>

            <div className="w-full flex justify-end mb-10 md:mb-0 md:px-30">
                <Search />
            </div>
            <div className="md:mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-15 xl:gap-20 md:px-5 xl:px-40">
                {
                    foodItems.map((food, i) => <FoodCard food={food} key={i} />)
                }
            </div>
            {/* <Filter/> */}
        </div>
    );
};

export default AllFoodsContainer;