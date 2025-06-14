import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Search food..."
                className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-400 
                   border border-gray-300 focus:outline-none focus:border-orange-400 
                   transition-all duration-300 ease-in-out"
            />
            <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 
                  text-orange-500 hover:text-orange-600 p-1.5 
                  transition-colors duration-200"
                aria-label="Search"
            >
                <IoSearch size={20} />
            </button>
        </div>
    );
};

export default Search;