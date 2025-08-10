import { FaSortAmountDown, FaSortAmountUp, FaSort } from "react-icons/fa";

const Sort = ({ sortOption, setSortOption }) => {
    return (
        <div className="relative w-full md:w-80 ">
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-lg bg-white text-black border border-gray-300 
                   focus:outline-none focus:border-orange-400 transition-all duration-300 ease-in-out 
                   appearance-none cursor-pointer"
            >
                <option value="default">Default Order</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-orange-500 pointer-events-none">
                {sortOption === "default" && <FaSort size={20} />}
                {sortOption === "asc" && <FaSortAmountUp size={20} />}
                {sortOption === "desc" && <FaSortAmountDown size={20} />}
            </span>
        </div>

    );
};

export default Sort;