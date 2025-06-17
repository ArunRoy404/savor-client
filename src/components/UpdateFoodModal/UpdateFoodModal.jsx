import useThemeContext from '../../custom_contexts/useThemeContext';
import { FiX, FiPlus, FiMinus } from 'react-icons/fi';
import { useState } from 'react';
import { notifyError, notifySuccess, notifyWarn } from '../../utilities/notification';
import useUpdateFoodApi from '../../axios/useUpdateFoodApi';

const UpdateFoodModal = ({ handleCloseModal, currentFood, setCurrentFood, refetch }) => {

    const [updating, setUpdating] = useState(false)
    const { isDark } = useThemeContext()
    const { updateFoodPromise } = useUpdateFoodApi()

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCurrentFood(({
            ...currentFood,
            [name]: value
        }));
    };

    const handleNutritionalInput = e => {
        const { name, value } = e.target
        setCurrentFood({
            ...currentFood,
            nutritional: {
                ...currentFood.nutritional,
                [name]: value
            }
        })
    }

    const handleMacroNutrients = e => {
        const { name, value } = e.target
        setCurrentFood({
            ...currentFood,
            nutritional: {
                ...currentFood.nutritional,
                macros: {
                    ...currentFood.nutritional.macros,
                    [name]: value
                }
            }
        })
    }

    const handleAddAllergen = () => {
        setCurrentFood({
            ...currentFood,
            nutritional: {
                ...currentFood.nutritional,
                allergens: [...currentFood.nutritional.allergens, ""]
            }
        });
    };


    const handleRemoveAllergen = (index) => {
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                allergens: { ...currentFood }.nutritional.allergens.filter((_, i) => i !== index)
            }
        }));
    };


    const handleAllergenChange = (index, value) => {
        const newAllergens = [...currentFood.nutritional.allergens];
        newAllergens[index] = value;
        setCurrentFood({
            ...currentFood,
            nutritional: {
                ...currentFood.nutritional,
                allergens: newAllergens
            }
        });
    };

    const handleAddDietaryTag = () => {
        setCurrentFood({
            ...currentFood,
            nutritional: {
                ...currentFood.nutritional,
                dietaryTags: [...currentFood.nutritional.dietaryTags, ""]
            }
        });
    };

    const handleRemoveDietaryTag = (index) => {
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                dietaryTags: { ...currentFood }.nutritional.dietaryTags.filter((_, i) => i !== index)
            }
        }));
    };

    const handleDietaryTagChange = (index, value) => {
        const newDietaryTags = [...currentFood.nutritional.dietaryTags];
        newDietaryTags[index] = value;
        setCurrentFood({
            ...currentFood,
            nutritional: {
                ...currentFood.nutritional,
                dietaryTags: newDietaryTags
            }
        });
    };



    const handleAddIngredient = () => {
        setCurrentFood({
            ...currentFood,
            ingredients: [...currentFood.ingredients, ""]
        });
    };


    const handleRemoveIngredient = (index) => {
        setCurrentFood({
            ...currentFood,
            ingredients: currentFood.ingredients.filter((_, i) => i !== index)
        });
    };


    const handleIngredientChange = (index, value) => {
        const newIngredients = [...currentFood.ingredients];
        newIngredients[index] = value;
        setCurrentFood({
            ...currentFood,
            ingredients: newIngredients
        });
    };


    const handleUpdateFood = e => {
        e.preventDefault()
        setUpdating(true)

        updateFoodPromise(currentFood._id, currentFood)
            .then(res => {
                if (res.data.modifiedCount) {
                    notifySuccess("Updated Successfully")
                    handleCloseModal()
                    refetch()
                } else {
                    notifyWarn("No Data Changed")
                }
            })
            .catch(err => {
                notifyError(err.message)
            })
            .finally(() => {
                setUpdating(false)
            })
    };


    return (
        <form onSubmit={handleUpdateFood} className="z-[999] fixed inset-0 bg-black/10 backdrop-blur-2xl flex items-center justify-center p-4">
            <div className={` ${isDark ? 'bg-gray-900' : 'bg-white/50'} rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold ">Update {currentFood.name}</h2>
                        <button
                            onClick={handleCloseModal}
                            className="p-1 cursor-pointer text-gray-500 hover:opacity-70"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    <div className="mb-6">
                        <label className="block opacity-70 font-medium mb-2">Image URL*</label>
                        <input
                            type="url"
                            name="image"
                            value={currentFood.image}
                            onChange={handleInput}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                            required
                        />
                        {currentFood.image && (
                            <div className="mt-4 flex justify-center">
                                <img
                                    src={currentFood.image}
                                    alt="Preview"
                                    className="h-48 w-full object-cover rounded-lg border border-gray-200"
                                />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block opacity-70 font-medium mb-2">Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={currentFood.name}
                                    onChange={handleInput}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                    required
                                />
                            </div>

                            <div>
                                <label className="block opacity-70 font-medium mb-2">Category*</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={currentFood.category}
                                    onChange={handleInput}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                    required
                                />
                            </div>

                            <div>
                                <label className="block opacity-70 font-medium mb-2">Description*</label>
                                <textarea
                                    name="description"
                                    value={currentFood.description}
                                    onChange={handleInput}
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                    required
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block opacity-70 font-medium mb-2">Price ($)*</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={currentFood.price}
                                        onChange={handleInput}
                                        min="0"
                                        step="0.01"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block opacity-70 font-medium mb-2">Quantity*</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={currentFood.quantity}
                                        onChange={handleInput}
                                        min="0"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block opacity-70 font-medium mb-2">Origin</label>
                                <input
                                    type="text"
                                    name="origin"
                                    value={currentFood.origin}
                                    onChange={handleInput}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                />
                            </div>

                            <div>
                                <label className="block opacity-70 font-medium mb-2">Servings</label>
                                <input
                                    type="number"
                                    name="servings"
                                    value={currentFood.servings}
                                    onChange={handleInput}
                                    min="1"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                />
                            </div>

                            <div>
                                <label className="block opacity-70 font-medium mb-2">Calories per Serving</label>
                                <input
                                    type="number"
                                    name="caloriesPerServing"
                                    value={currentFood.nutritional.caloriesPerServing}
                                    onChange={handleNutritionalInput}
                                    min="0"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                />
                            </div>
                        </div>
                    </div>

                    {/* Macros Section */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium opacity-70 mb-4">Macronutrients</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-gray-600 mb-2">Protein</label>
                                <input
                                    type="text"
                                    name="protein"
                                    value={currentFood.nutritional.macros.protein}
                                    onChange={handleMacroNutrients}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                    placeholder="e.g. 25g"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Carbohydrates</label>
                                <input
                                    type="text"
                                    name="carbs"
                                    value={currentFood.nutritional.macros.carbs}
                                    onChange={handleMacroNutrients}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                    placeholder="e.g. 70g"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Fats</label>
                                <input
                                    type="text"
                                    name="fats"
                                    value={currentFood.nutritional.macros.fats}
                                    onChange={handleMacroNutrients}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                    placeholder="e.g. 22g"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Allergens Section */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium opacity-70 mb-4">Allergens</h3>
                        <div className="space-y-3">
                            {currentFood.nutritional.allergens.map((allergen, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <input
                                        type="text"
                                        value={allergen}
                                        onChange={(e) => handleAllergenChange(index, e.target.value)}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg "
                                        placeholder={`Allergen ${index + 1}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveAllergen(index)}
                                        className="p-2 text-red-500 hover:text-red-700"
                                    >
                                        <FiMinus size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={handleAddAllergen}
                            className="mt-3 flex items-center text-orange-600 hover:text-orange-800"
                        >
                            <FiPlus className="mr-1" />
                            Add Allergen
                        </button>
                    </div>

                    {/* Dietary Tags Section */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium opacity-70 mb-4">Dietary Tags</h3>
                        <div className="space-y-3">
                            {currentFood.nutritional.dietaryTags.map((tag, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <input
                                        type="text"
                                        value={tag}
                                        onChange={(e) => handleDietaryTagChange(index, e.target.value)}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg "
                                        placeholder={`Tag ${index + 1}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveDietaryTag(index)}
                                        className="p-2 text-red-500 hover:text-red-700"
                                    >
                                        <FiMinus size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={handleAddDietaryTag}
                            className="mt-3 flex items-center text-orange-600 hover:text-orange-800"
                        >
                            <FiPlus className="mr-1" />
                            Add Dietary Tag
                        </button>
                    </div>

                    {/* Ingredients Section */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium opacity-70 mb-4">Ingredients</h3>
                        <div className="space-y-3">
                            {currentFood.ingredients.map((ingredient, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <input
                                        type="text"
                                        value={ingredient}
                                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg "
                                        placeholder={`Ingredient ${index + 1}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveIngredient(index)}
                                        className="p-2 text-red-500 hover:text-red-700"
                                    >
                                        <FiMinus size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={handleAddIngredient}
                            className="mt-3 flex items-center text-orange-600 hover:text-orange-800"
                        >
                            <FiPlus className="mr-1" />
                            Add Ingredient
                        </button>
                    </div>

                    {/* Procedure Section */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium opacity-70 mb-4">Preparation Procedure</h3>
                        <textarea
                            name="procedure"
                            value={currentFood.procedure}
                            onChange={handleInput}
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                            placeholder="Step-by-step instructions..."
                        />
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-8 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="cursor-pointer px-6 py-2 border border-gray-300 opacity-70 rounded-lg font-medium hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={updating}
                            className="disabled:cursor-not-allowed cursor-pointer px-6 py-2 rounded-lg font-medium border bg-gray-800 text-white transition duration-300"
                        >
                            {
                                updating
                                    ? <span className="loading loading-spinner loading-md"></span>
                                    : 'Update Dish'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UpdateFoodModal;