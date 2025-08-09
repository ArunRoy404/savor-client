import HowItWorks from "../components/HowItWorks/HowItWorks";
import Banner from "../components/Banner/Banner";
import Foods from "../components/TopFoods/TopFoods";
import AboutUs from "../components/AboutUs/AboutUs";
import SpecialOffers from "../components/SpecialOffers/SpecialOffers";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div>
        <title>Savor | Home</title>
        <Banner />
        <SpecialOffers />
        <Foods byPopularity={true} />
        <HowItWorks />
        <AboutUs />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;