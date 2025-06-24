import React from "react";
import { FaUtensils, FaUsers, FaHeart, FaChartLine } from "react-icons/fa";

const HowItWorks = () => {
    const FeatureItem = ({ title, description }) => (
        <div>
            <h4 className="text-2xl font-bold mb-1">{title}</h4>
            <p className="opacity-80">{description}</p>
        </div>
    );

    return (
        <section className="relative py-16 bg-fixed bg-[url('https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')]">
            <div className="absolute bg-black inset-0 opacity-70 z-1"></div>
            <div className="relative text-white container mx-auto px-4 sm:px-6 lg:px-8 z-10">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        How It Works
                    </h2>
                </div>

                <div className="border-b-2 border-t-2 py-4 border-orange-400">
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
                </div>
                <div className="flex justify-center">
                    <button className="cursor-pointer mt-8 border-white border-2 mx-auto text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                        Join Our Community
                    </button>
                </div>
            </div>
        </section>
    );
};



export default HowItWorks;