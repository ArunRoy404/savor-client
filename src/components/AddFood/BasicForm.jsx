import React from 'react';

const BasicForm = ({ foodData, handleChange }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='border border-gray-300 row-span-4 overflow-hidden rounded-lg'>
                    {
                        foodData?.image
                            ? <img src={foodData.image} className="object-cover h-35 md:h-92 w-full object-center" alt="" />
                            : <div className="h-35 md:h-92 w-full text-xl font-bold flex items-center justify-center"> Preview Image </div>
                    }


                </div>
                <div>
                    <label className="block  font-medium mb-2">Dish Name*</label>
                    <input
                        type="text"
                        name="name"
                        value={foodData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="e.g. Spaghetti Carbonara"
                        required
                    />
                </div>
                <div>
                    <label className="block  font-medium mb-2">Image Link*</label>
                    <input
                        type="text"
                        name="image"
                        value={foodData.image}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        placeholder="e.g. https://example.com/food.jpg"
                        required
                    />
                </div>
                <div>
                    <label className="block  font-medium mb-2">Origin/Cuisine*</label>
                    <input
                        type="text"
                        name="origin"
                        value={foodData.origin}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        placeholder="e.g. Italy"
                        required
                    />
                </div>

                <div>
                    <label className="block  font-medium mb-2">Category*</label>
                    <input
                        type="text"
                        name="category"
                        value={foodData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        placeholder="e.g. Italian"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block  font-medium mb-2">Description*</label>
                <textarea
                    name="description"
                    value={foodData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    placeholder="A brief description of the dish..."
                    required
                ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="block  font-medium mb-2">Servings*</label>
                    <input
                        type="number"
                        name="servings"
                        value={foodData.servings}
                        onChange={handleChange}
                        min="1"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    />
                </div>
                <div>
                    <label className="block  font-medium mb-2">Price ($)*</label>
                    <input
                        type="number"
                        name="price"
                        value={foodData.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        required
                    />
                </div>
                <div>
                    <label className="block  font-medium mb-2">Quantity in Stock*</label>
                    <input
                        type="number"
                        name="quantity"
                        value={foodData.quantity}
                        onChange={handleChange}
                        min="0"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block  font-medium mb-2">Added by</label>
                    <input
                        type="text"
                        name=""
                        value={foodData.ownerName}
                        min="1"
                        disabled
                        className="opacity-70 cursor-not-allowed w-full px-4 py-2 border border-gray-300 rounded-lg "
                    />
                </div>
                <div>
                    <label className="block  font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="price"
                        value={foodData.ownerEmail}
                        min="0"
                        step="0.01"
                        disabled
                        className="opacity-70 cursor-not-allowed w-full px-4 py-2 border border-gray-300 rounded-lg "
                    />
                </div>
            </div>
        </div>
    );
};

export default BasicForm;