import { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';



// Bold Offer Card Component with Timer
const OfferCard = ({ image, title, discount, originalPrice, timeLeft }) => {
    const [remainingTime, setRemainingTime] = useState(timeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
        <div className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
            {/* Food Image (Dominant) */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/70 to-transparent"></div>

            {/* Timer */}
            <div className="absolute top-5 right-5 flex items-center justify-center mb-4 bg-gray-900/80 backdrop-blur-sm py-2 px-4 rounded-full w-max mx-auto">
                <FaClock className="text-orange-400 mr-2 mt-0.5" />
                <span className="font-mono font-bold text-white">
                    {String(hours).padStart(2, '0')}:
                    {String(minutes).padStart(2, '0')}:
                    {String(seconds).padStart(2, '0')}
                </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">


                {/* Minimal Text */}
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                            {discount}% OFF
                        </span>
                    </div>
                    <div className='space-x-2'>
                        <span className="text-orange-500 font-bold text-2xl">${originalPrice - (originalPrice * (discount / 100))}</span>
                        <span className="text-gray-300 line-through">${originalPrice}</span>
                    </div>
                </div>

                {/* Hidden Button (Appears on hover) */}
                <button className="cursor-pointer mt-4 w-full bg-orange-500 text-white font-bold py-3 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    ORDER NOW
                </button>
            </div>
        </div>
    );
};

export default OfferCard