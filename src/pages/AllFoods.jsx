import AllFoodsContainer from "../components/AllFoodsContainer/AllFoodsContainer";
import PageTitle from "../components/PageTitle/PageTitle";
import TopFoods from "../components/TopFoods/TopFoods";


const AllFoods = () => {
    return (
        <div>
            <PageTitle
                title={'Taste the World in Every Bite'}
                subtitle={'From Italian Classics to Vegan Delights – Something for Every Palate.'}
            />
            <AllFoodsContainer/>
        </div>
    );
};

export default AllFoods