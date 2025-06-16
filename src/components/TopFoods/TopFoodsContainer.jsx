import FoodCard from "../FoodCard/FoodCard";
import ScrollContainer from 'react-indiana-drag-scroll'

const TopFoodsContainer = ({data}) => {
    return (
        <div className="px-5">
            <ScrollContainer className="scroll-container">
                <div className="mt-10 md:mt-20 flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-15 xl:gap-30 md:px-5 xl:px-40">
                    {
                        data.map((food, i) => i < 6 && <FoodCard food={food} key={i} />)
                    }
                </div>
            </ScrollContainer>
        </div>
    );
};

export default TopFoodsContainer;