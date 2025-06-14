import { useState } from 'react';
import { foodItems } from '../../utilities/dummyFoodsData';


const Filter = () => {
    const [category, setCategory] = useState('');
    const [sortBy, setSortBy] = useState(''); // 'lowToHigh', 'highToLow'

    // Get unique categories
    const categories = [...new Set(foodItems.map(item => item.category))];

    // Apply filters and sorting
    const filteredAndSortedItems = foodItems
        .filter(item => (category ? item.category === category : true))
        .sort((a, b) => {
            if (sortBy === 'lowToHigh') return a.price - b.price;
            if (sortBy === 'highToLow') return b.price - a.price;
            return 0;
        });

    // Sort by popularity (most purchased)
    const popularItems = [...foodItems].sort((a, b) => b.purchaseCount - a.purchaseCount);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                {/* Category Dropdown */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-1">Filter by Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="">All Categories</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sort Options */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setSortBy('lowToHigh')}
                        className={`px-4 py-2 rounded-md ${sortBy === 'lowToHigh'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                    >
                        Price: Low to High
                    </button>
                    <button
                        onClick={() => setSortBy('highToLow')}
                        className={`px-4 py-2 rounded-md ${sortBy === 'highToLow'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                    >
                        Price: High to Low
                    </button>
                    <button
                        onClick={() => setSortBy('popular')}
                        className={`px-4 py-2 rounded-md ${sortBy === 'popular'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                    >
                        Popular
                    </button>
                    <button
                        onClick={() => {
                            setSortBy('');
                            setCategory('');
                        }}
                        className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Display Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(sortBy === 'popular' ? popularItems : filteredAndSortedItems).map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-600 text-sm">{item.category}</p>
                            <p className="text-orange-500 font-bold mt-2">${item.price.toFixed(2)}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                Purchased: {item.purchaseCount} times
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;