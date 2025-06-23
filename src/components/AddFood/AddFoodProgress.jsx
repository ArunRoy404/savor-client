import React from 'react';

const AddFoodProgress = ({ activeSection }) => {
    return (
        <div className="space-x-2 mb-6 overflow-x-auto pb-2 hidden md:flex">
            <button
                type="button"
                className={` transition duration-300 px-4 py-2 rounded-lg font-medium ${activeSection === "basic" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
            >
                Basic Info
            </button>
            <button
                type="button"
                className={` transition duration-300  px-4 py-2 rounded-lg font-medium ${activeSection === "nutrition" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
            >
                Nutrition
            </button>
            <button
                type="button"
                className={` transition duration-300  px-4 py-2 rounded-lg font-medium ${activeSection === "ingredients" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
            >
                Ingredients
            </button>
            <button
                type="button"
                className={` transition duration-300  px-4 py-2 rounded-lg font-medium ${activeSection === "preview" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
            >
                Preview
            </button>
        </div>
    );
};

export default AddFoodProgress;