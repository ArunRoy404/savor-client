import { useState, useEffect } from "react";
import FoodCard from "../FoodCard/FoodCard";
import Search from "../UI/Search";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import NoResultFound from "../NoResultFound/NoResultFound";
import useFoodsApi from "../../axios/useFoodsApi";
import Sort from "../UI/Sort";

const AllFoodsContainer = () => {
    const [searchText, setSearchText] = useState('');
    const [sortOption, setSortOption] = useState("default"); // default | asc | desc
    const [sortedData, setSortedData] = useState([]);

    const { getFoodsPromise } = useFoodsApi();

    const { isPending, error, data } = useQuery({
        queryKey: ['allFoods', searchText],
        queryFn: () => getFoodsPromise(searchText).then(res => res.data)
    });

    const handleSearch = e => {
        e.preventDefault();
        setSearchText(e.target.value);
        setSortOption("default"); // reset sort when searching
    };

    // Apply sorting whenever data or sort option changes
    useEffect(() => {
        if (!data) return;
        let tempData = [...data];
        if (sortOption === "asc") {
            tempData.sort((a, b) => a.price - b.price);
        } else if (sortOption === "desc") {
            tempData.sort((a, b) => b.price - a.price);
        }
        setSortedData(tempData);
    }, [data, sortOption]);

    const container = (
        isPending ? <Loader />
            : error ? <Error />
                : <div className="md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 md:gap-10 xl:gap-10 ">
                    {
                        sortedData?.length === 0 && <NoResultFound />
                    }
                    {
                        sortedData.map((food, i) => <FoodCard food={food} key={i} />)
                    }
                </div>
    );

    return (
        <div className={`mt-20 mb-10 rounded-2xl transition-all duration-3000`}>
            <div className="w-full mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
                <Search searchText={searchText} handleSearch={handleSearch} />

                <Sort sortOption={sortOption} setSortOption={setSortOption} />
            </div>
            {container}
        </div>
    );
};

export default AllFoodsContainer;
