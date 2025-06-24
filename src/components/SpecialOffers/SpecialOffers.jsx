import { FaFire, FaShoppingCart } from 'react-icons/fa';
import OfferCard from './OfferCard';


const SpecialOffers = () => {
  return (
    <section className="relative py-20 bg-gray-700 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1663850685051-ef8c3a8524ad?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full mb-5">
            <FaFire className="mr-2" /> FLASH DEALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            SIZZLING <span className="text-orange-400">OFFERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Claim before time runs out
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <OfferCard
            image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            title="Gourmet Pasta"
            discount={30}
            originalPrice={35.99}
            timeLeft={6 * 3600 + 22 * 60 + 45}
          />

          <OfferCard
            image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="Burger Combo"
            discount={20}
            originalPrice={18.50}
            timeLeft={2 * 3600 + 15 * 60} 
          />

          <OfferCard
            image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="Dessert Box"
            discount={15}
            originalPrice={24.99}
            timeLeft={24 * 3600}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className=" cursor-pointer inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/20">
            <FaShoppingCart className="mr-3" />
            VIEW ALL OFFERS
          </button>
        </div>
      </div>
    </section>
  );
};



export default SpecialOffers;