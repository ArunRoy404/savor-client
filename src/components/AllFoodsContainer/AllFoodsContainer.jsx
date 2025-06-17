import { useState } from "react";
import useThemeContext from "../../custom_contexts/useThemeContext";
import FoodCard from "../FoodCard/FoodCard";
import Search from "../UI/Search";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import axios from 'axios'
import NoResultFound from "../NoResultFound/NoResultFound";

const AllFoodsContainer = () => {
    const { isDark } = useThemeContext()

    const [searchText, setSearchText] = useState('')

    const { isPending, error, data } = useQuery({
        queryKey: ['allFoods', searchText],
        queryFn: () => axios.get(`https://savor-server-avhf6x8eq-arun-roys-projects.vercel.app/foods?title=${searchText}`)
            .then(res => res.data)
    })

    const handleSearch = e => {
        e.preventDefault()
        setSearchText(e.target.value)
    }


    const container = (
        isPending ? <Loader />
            : error ? <Error />
                : <div className="md:mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-15 xl:gap-20 md:px-5 xl:px-40">
                    {
                        data?.length===0 && <NoResultFound/>
                    }
                    {
                        data.map((food, i) => <FoodCard food={food} key={i} />)
                    }
                </div>
    )

    return (
        <div className={`${isDark ? 'bg-[#2c313d]' : 'bg-[#dfdcdc]'}
                         mt-20 p-10 mb-10 rounded-2xl transition-all duration-1000`}>

            <div className="w-full flex justify-end mb-10 md:mb-0 md:px-30">
                <Search searchText={searchText} handleSearch={handleSearch} />
            </div>
            {container}
            {/* <Filter/> */}
        </div>
    );
};

export default AllFoodsContainer;