import HowItWorks from "../components/HowItWorks/HowItWorks";
import Banner from "../components/Banner/Banner";
import Foods from "../components/TopFoods/TopFoods";
import AboutUs from "../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <div>
        <title>Savor | Home</title>
        <Banner />
        <Foods byPopularity={true} />
        <HowItWorks/>
        <AboutUs/>
      </div>
    </>
  );
};

export default Home;