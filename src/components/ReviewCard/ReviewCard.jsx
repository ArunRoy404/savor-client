import { IoStar } from "react-icons/io5";
import useThemeContext from "../../custom_contexts/useThemeContext";

const ReviewCard = ({review}) => {

    const {isDark} = useThemeContext()
    return (
        <div
            className={`${isDark ? 'bg-gray-800' : ''} p-4 rounded-lg border border-gray-400`}
        >
            <div className="flex items-center mb-2">
                <img
                    src="https://i.ibb.co/sdcY1StY/unnamed.png"
                    alt="Reviewer"
                    className="w-8 h-8 rounded-full mr-3 object-cover"
                />
                <div>
                    <p className="font-medium">User </p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (i < review.rate ? <IoStar color="orange" /> : <IoStar color="lightGray" />))}
                    </div>
                </div>
            </div>
            <p>{review.review}</p>
        </div>
    );
};

export default ReviewCard;