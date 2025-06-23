import AllFoodsContainer from "../components/AllFoodsContainer/AllFoodsContainer";
import PageTitle from "../components/PageTitle/PageTitle";



const AllFoods = () => {
    return (
        <div className="px-5 container mx-auto">
            <title>Savor | Explore Foods</title>
            <PageTitle
                title={'Taste the World in Every Bite'}
                subtitle={'From Italian Classics to Vegan Delights – Something for Every Palate.'}
            />
            <AllFoodsContainer />
        </div>
    );
};

export default AllFoods