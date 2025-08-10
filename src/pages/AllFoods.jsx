import AllFoodsContainer from "../components/AllFoodsContainer/AllFoodsContainer";
import PageTitle from "../components/PageTitle/PageTitle";


const AllFoods = () => {
    return (
        <div className={` pb-10 md:pb-20`}>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 `}>
                <title>Savor | Explore Foods</title>
                <PageTitle
                    title={'Taste the World in Every Bite'}
                    subtitle={'From Italian Classics to Vegan Delights – Something for Every Palate.'}
                />
                <AllFoodsContainer />
            </div>
        </div>
    );
};

export default AllFoods