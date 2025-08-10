import useThemeContext from "../../custom_contexts/useThemeContext";
import SectionHeader from "../UI/SectionHeader";
import TopFoodsContainer from "./TopFoodsContainer";
import leaf from "/leaf.png"
import pea from '/pea.png'

const TopFoods = () => {
    const { isDark } = useThemeContext()

    return (
        <div className={`py-20 ${isDark ? 'bg-accent ' : 'bg-gradient-to-b from-[#f5ebfe] via-white to-[#f5ebfe]'} `}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-2xl relative">
                <img className="absolute blur-[2px] w-20 top-10 left-10 md:w-40 md:top-20 md:left-20 rotate-270" src={leaf} alt="" />
                <img className="absolute blur-[1px] w-20 bottom-10 right-10 md:w-40 md:bottom-20 md:right-20" src={pea} alt="" />
                <SectionHeader
                    title={'Most Popular Dishes on Savor'}
                    subtitle={'Explore the most loved dishes across all cuisines and categories.'}
                />
                <TopFoodsContainer />
            </div>
        </div>
    );
};

export default TopFoods;