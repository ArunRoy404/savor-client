import React, { useState } from 'react';
import useThemeContext from '../../custom_contexts/useThemeContext';
import { FiX } from 'react-icons/fi';

const NutritionForm = ({ foodData, setFoodData }) => {
    const { isDark } = useThemeContext()
    const [allergenInput, setAllergenInput] = useState("");
    const [dietaryTagInput, setDietaryTagInput] = useState("");


    const handleNutritionalChange = (e) => {
        const { name, value } = e.target;
        setFoodData(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                [name]: value
            }
        }));
    };

    const handleMacrosChange = (e) => {
        const { name, value } = e.target;
        setFoodData(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                macros: {
                    ...prev.nutritional.macros,
                    [name]: value
                }
            }
        }));
    };
    const handleAddAllergen = () => {
        if (allergenInput && !foodData.nutritional.allergens.includes(allergenInput)) {
            setFoodData(prev => ({
                ...prev,
                nutritional: {
                    ...prev.nutritional,
                    allergens: [...prev.nutritional.allergens, allergenInput]
                }
            }));
            setAllergenInput("");
        }
    };

    const handleRemoveAllergen = (allergen) => {
        setFoodData(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                allergens: prev.nutritional.allergens.filter(a => a !== allergen)
            }
        }));
    };

    const handleAddDietaryTag = () => {
        if (dietaryTagInput && !foodData.nutritional.dietaryTags.includes(dietaryTagInput)) {
            setFoodData(prev => ({
                ...prev,
                nutritional: {
                    ...prev.nutritional,
                    dietaryTags: [...prev.nutritional.dietaryTags, dietaryTagInput]
                }
            }));
            setDietaryTagInput("");
        }
    };

    const handleRemoveDietaryTag = (tag) => {
        setFoodData(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                dietaryTags: prev.nutritional.dietaryTags.filter(t => t !== tag)
            }
        }));
    };
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block  font-medium mb-2">Calories per Serving</label>
                    <input
                        type="number"
                        name="caloriesPerServing"
                        value={foodData.nutritional.caloriesPerServing}
                        onChange={handleNutritionalChange}
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    />
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium  mb-4">Macro Nutrients</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-gray-600 mb-2">Protein</label>
                        <input
                            type="text"
                            name="protein"
                            value={foodData.nutritional.macros.protein}
                            onChange={handleMacrosChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                            placeholder="e.g. 25g"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Carbohydrates</label>
                        <input
                            type="text"
                            name="carbs"
                            value={foodData.nutritional.macros.carbs}
                            onChange={handleMacrosChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                            placeholder="e.g. 70g"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Fats</label>
                        <input
                            type="text"
                            name="fats"
                            value={foodData.nutritional.macros.fats}
                            onChange={handleMacrosChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                            placeholder="e.g. 22g"
                        />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium  mb-4">Allergens</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {foodData.nutritional.allergens.map((allergen, index) => (
                        <div key={index} className="text-xs font-medium px-3 py-2 flex items-center rounded-full bg-red-100 text-red-600">
                            {allergen}
                            <button
                                type="button"
                                onClick={() => handleRemoveAllergen(allergen)}
                                className="ml-2 text-orange-600 hover:text-orange-800"
                            >
                                <FiX size={14} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        value={allergenInput}
                        onChange={(e) => setAllergenInput(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg "
                        placeholder="Add allergen (e.g. Dairy)"
                    />
                    <button
                        type="button"
                        onClick={handleAddAllergen}
                        className="px-4 rounded-r-lg text-white cursor-pointer bg-gray-600 border border-gray-300hover:text-white transition duration-300"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium  mb-4">Dietary Tags</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {foodData.nutritional.dietaryTags.map((tag, index) => (
                        <div key={index} className={` ${isDark ? 'bg-gray-500' : 'bg-gray-200'} flex items-center text-xs font-medium px-3 py-2 rounded-full`}>
                            {tag}
                            <button
                                type="button"
                                onClick={() => handleRemoveDietaryTag(tag)}
                                className="ml-2 text-orange-600 hover:text-orange-800"
                            >
                                <FiX size={14} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        value={dietaryTagInput}
                        onChange={(e) => setDietaryTagInput(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg "
                        placeholder="Add dietary tag (e.g. Gluten Free)"
                    />
                    <button
                        type="button"
                        onClick={handleAddDietaryTag}
                        className="px-4 rounded-r-lg text-white cursor-pointer bg-gray-600 border border-gray-300hover:text-white transition duration-30"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NutritionForm;