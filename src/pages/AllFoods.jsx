import AllFoodsContainer from "../components/AllFoodsContainer/AllFoodsContainer";
import Loader from "../components/Loader/Loader";
import PageTitle from "../components/PageTitle/PageTitle";
import Error from "../components/UI/Error";
import useDatabaseContext from "../custom_contexts/UseDatabaseContext";
import { useQuery } from "@tanstack/react-query";


const AllFoods = () => {

    const { getFoods } = useDatabaseContext()

    const { isPending, error, data } = useQuery({
        queryKey: ['allFoods'],
        queryFn: ()=> getFoods().then(res=>res.data)
    })

    if(isPending) return <Loader/>

    if(error) return <Error/>

    return (
        <div>
            <PageTitle
                title={'Taste the World in Every Bite'}
                subtitle={'From Italian Classics to Vegan Delights – Something for Every Palate.'}
            />
            <AllFoodsContainer data={data} />
        </div>
    );
};

export default AllFoods