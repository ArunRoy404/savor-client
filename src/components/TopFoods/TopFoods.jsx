import useThemeContext from "../../custom_contexts/useThemeContext";
import TopFoodsContainer from "./TopFoodsContainer";
import leaf from "/leaf.png"
import pea from '/pea.png'

const TopFoods = () => {
    const { isDark } = useThemeContext()

    return (
        <div className={`${isDark ? 'bg-gray-800 ' : 'bg-gradient-to-r from-slate-200 to-slate-100'} `}>
            <div className="container mx-auto pt-10 md:pt-20 pb-10 mt-20 text-center rounded-2xl relative">
                <img className="absolute w-20 top-10 left-10 md:w-40 md:top-20 md:left-20 rotate-270" src={leaf} alt="" />
                <img className="absolute w-20 bottom-10 right-10 md:w-40 md:bottom-20 md:right-20" src={pea} alt="" />

                <h1 className='z-10 text-xl font-bold md:text-4xl md:font-semibold xl:font-bold mb-3 md:mb-6'>
                    Most Popular Dishes on Savor
                </h1>
                <p className='z-10 text-sm mb-3 font-medium opacity-80'>
                    Explore the most loved dishes across all cuisines and categories.
                </p>
                <TopFoodsContainer/>
            </div>
        </div>
    );
};

export default TopFoods;