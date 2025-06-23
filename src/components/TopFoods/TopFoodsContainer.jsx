import { useQuery } from "@tanstack/react-query";
import useTopFoodsApi from "../../axios/useTopFoodsApi";
import FoodCard from "../FoodCard/FoodCard";
import ScrollContainer from 'react-indiana-drag-scroll'
import Loader from "../Loader/Loader";
import Error from "../UI/Error";
import Button from "../UI/Button";

const TopFoodsContainer = () => {


    const { topFoodsPromise } = useTopFoodsApi()
    const { isPending, error, data } = useQuery({
        queryKey: ['topFoods'],
        queryFn: () => topFoodsPromise().then(res => res.data)
    })
    if (isPending) return <Loader />
    if (error) return <Error />


    return (
        <div className="px-5">
            <ScrollContainer className="scroll-container">
                <div className="mt-10 md:mt-20 flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-15 xl:gap-30 md:px-5 xl:px-40">
                    {
                        data.length === 0 && <NoResultFound />
                    }
                    {
                        data.map((food, i) => i < 6 && <FoodCard food={food} key={i} />)
                    }
                </div>
            </ScrollContainer>
            <div className="mt-10">
                <Button
                    to={'/all-foods'}
                    className="cursor-pointer rounded-full px-5 py-2 text-sm md:text-md font-bold border bg-black text-white border-black hover:bg-white  hover:text-black transition duration-300">
                    Show All
                </Button>
            </div>
        </div>
    );
};

export default TopFoodsContainer;