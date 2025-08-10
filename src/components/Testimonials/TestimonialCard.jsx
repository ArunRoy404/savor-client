import { FaQuoteLeft, FaStar } from "react-icons/fa";
import useThemeContext from "../../custom_contexts/useThemeContext";

const TestimonialCard = ({ quote, author, role, rating, avatar }) => {
    const { isDark } = useThemeContext()
    return (
        <div className={`p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${isDark ? 'bg-gray-700' : ''} `}>
            {/* Quote Icon */}
            <FaQuoteLeft className="text-amber-400 text-2xl mb-4 opacity-70" />

            {/* Testimonial Text */}
            <p className=" mb-6 italic">{quote}</p>

            {/* Rating */}
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={`text-lg ${i < rating ? "text-amber-400" : ""}`}
                    />
                ))}
            </div>

            {/* Author */}
            <div className="flex items-center">
                <img
                    src={avatar}
                    alt={author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-amber-100"
                />
                <div>
                    <h4 className="font-semibold text-gray-900">{author}</h4>
                    <p className="text-sm ">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard