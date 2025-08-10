import { useEffect, useState } from "react";
import SectionHeader from "../UI/SectionHeader";
import useThemeContext from "../../custom_contexts/useThemeContext";

const SpecialOffers = () => {
  const { isDark } = useThemeContext();

  const offers = [
    {
      id: 1,
      name: "Gourmet Burger Meal",
      description: "Juicy burger with crispy fries and a refreshing drink.",
      originalPrice: 24.99,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      endTime: new Date().getTime() + 1000 * 60 * 60 * 45, // 45 hours
    },
    {
      id: 2,
      name: "Truffle Pasta",
      description: "Creamy pasta infused with aromatic black truffle.",
      originalPrice: 18.5,
      discount: 25,
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      endTime: new Date().getTime() + 1000 * 60 * 60 * 22, // 22 hours
    },
    {
      id: 3,
      name: "Rainbow Sushi Platter",
      description: "Fresh assorted sushi with vibrant seasonal ingredients.",
      originalPrice: 32.75,
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      endTime: new Date().getTime() + 1000 * 60 * 60 * 15, // 15 hours
    },
  ];

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = {};
      offers.forEach((offer) => {
        const diff = offer.endTime - new Date().getTime();
        if (diff > 0) {
          const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
          const minutes = String(
            Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          ).padStart(2, "0");
          const seconds = String(
            Math.floor((diff % (1000 * 60)) / 1000)
          ).padStart(2, "0");
          updated[offer.id] = `${hours}:${minutes}:${seconds}`;
        } else {
          updated[offer.id] = "Expired";
        }
      });
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-10 md:py-20 ${
        isDark ? "bg-accent" : "bg-gradient-to-b from-white to-[#f5ebfe]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Special Offers"
          subtitle="Limited-time deals — handcrafted to delight. Grab them before they’re gone."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((offer) => {
            const discountedPrice = (
              offer.originalPrice -
              (offer.originalPrice * offer.discount) / 100
            ).toFixed(2);

            return (
              <div
                key={offer.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {offer.discount}% OFF
                  </span>
                  <span className="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm shadow-md">
                    {timeLeft[offer.id] || ""}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {offer.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 line-through">
                      ${offer.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-orange-400">
                      ${discountedPrice}
                    </span>
                  </div>

                  {/* See More Button */}
                  <button className="cursor-pointer mt-4 w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                    See More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
