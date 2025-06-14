import useThemeContext from "../../custom_contexts/useThemeContext";
import Button from "../UI/Button";
import TopFoodsContainer from "./TopFoodsContainer";
import leaf from "/leaf.png"
import poring from '/poring.png'

const TopFoods = () => {

    const {isDark} = useThemeContext()

    return (
        <div className={`${isDark? 'bg-[#2c313d]' :'bg-[#dfdcdc]'} pt-10 md:pt-20 pb-10 mt-20 mb-10 container mx-auto text-center rounded-2xl relative`}>
            <h1 className='z-10 text-xl font-bold md:text-4xl md:font-semibold xl:font-bold mb-3 md:mb-6'>
                Most Popular Dishes on Savor
            </h1>
            <p className='z-10 text-sm mb-3 font-medium opacity-80'>
                Explore the most loved dishes across all cuisines and categories.
            </p>
            <TopFoodsContainer />
            <div className="mt-10">
                <Button className="cursor-pointer rounded-full px-5 py-2 text-sm md:text-md font-bold border bg-black text-white border-black hover:bg-white  hover:text-black transition duration-300">
                    Show All
                </Button>
            </div>
            <img className="absolute w-30 top-10 left-10 md:w-40 md:top-20 md:left-20 rotate-270" src={leaf} alt="" />
            <img className="absolute w-30 bottom-10 right-10 md:w-40 md:bottom-20 md:right-20" src={poring} alt="" />
        </div>
    );
};

export default TopFoods;