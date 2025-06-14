import Banner from "../components/Banner/Banner";
import Foods from "../components/TopFoods/TopFoods";

const Home = () => {
    return (
        <>
           <div className="">
             <Banner/>
             <Foods byPopularity={true}/>
           </div>
        </>
    );
};

export default Home;