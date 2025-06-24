import HowItWorks from "../components/HowItWorks/HowItWorks";
import Banner from "../components/Banner/Banner";
import Foods from "../components/TopFoods/TopFoods";


const Home = () => {
  return (
    <>
      <div>
        <title>Savor | Home</title>
        <Banner />
        <Foods byPopularity={true} />
        <HowItWorks/>

      </div>
    </>
  );
};

export default Home;