import { FaUtensils, FaUsers, FaHeart } from "react-icons/fa";
import Button from "../UI/Button";
import SectionHeader from "../UI/SectionHeader";
import useThemeContext from "../../custom_contexts/useThemeContext";

const HowItWorks = () => {
    const { isDark } = useThemeContext()

    const features = [
        {
            icon: <FaUtensils className="text-orange-400 w-8 h-8" />,
            title: "For Food Creators",
            description:
                "Easily add your culinary creations, set prices, and manage inventory through our intuitive dashboard.",
        },
        {
            icon: <FaUsers className="text-orange-400 w-8 h-8" />,
            title: "For Food Lovers",
            description:
                "Discover unique dishes from local chefs and home cooks, order with just a few clicks.",
        },
        {
            icon: <FaHeart className="text-orange-400 w-8 h-8" />,
            title: "Our Promise",
            description:
                "A secure, transparent platform that ensures fair transactions and food safety standards.",
        },
    ];


    return (
        <section className={`relative py-10 md:py-20 ${ isDark ? 'bg-accent' : 'bg-gradient-to-t from-white to-[#f5ebfe]'}`}>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">

                <SectionHeader title={'How It Works'} />


                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map(({ icon, title, description }) => (
                        <div
                            key={title}
                            className=" border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl duration-300 cursor-default"
                        >
                            <div className="mb-4">{icon}</div>
                            <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                            <p className=" opacity-90 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>


                {/* <div className="border-b-2 border-t-2 py-4 border-orange-400">
                    <div className="space-y-6">
                        <FeatureItem
                            title="For Food Creators"
                            description="Easily add your culinary creations, set prices, and manage inventory through our intuitive dashboard."
                        />
                        <FeatureItem
                            title="For Food Lovers"
                            description="Discover unique dishes from local chefs and home cooks, order with just a few clicks."
                        />
                        <FeatureItem
                            title="Our Promise"
                            description="A secure, transparent platform that ensures fair transactions and food safety standards."
                        />
                    </div>
                </div> */}
                <div className="flex justify-center mt-10">
                    <Button
                        className='cursor-pointer w-full rounded-full px-5 py-2 text-sm md:text-md font-bold border border-gray-300 hover:border-orange-400 transition duration-300'
                    >                        Join Our Community
                    </Button>
                </div>
            </div>
        </section>
    );
};



export default HowItWorks;