import { FiPlus, FiX } from 'react-icons/fi';

const IngredientsForm = ({ foodData, setFoodData }) => {



    const handleAddIngredient = () => {
        setFoodData(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, ""]
        }));
    };
    const handleIngredientChange = (index, value) => {
        const newIngredients = [...foodData.ingredients];
        newIngredients[index] = value;
        setFoodData(prev => ({
            ...prev,
            ingredients: newIngredients
        }));
    };
    const handleRemoveIngredient = (index) => {
        const newIngredients = foodData.ingredients.filter((_, i) => i !== index);
        setFoodData(prev => ({
            ...prev,
            ingredients: newIngredients
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData(prev => ({ ...prev, [name]: value }));
    };


    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium  mb-4">Ingredients</h3>
                <div className="space-y-3">
                    {foodData.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(e) => handleIngredientChange(index, e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg "
                                placeholder={`Ingredient ${index + 1}`}
                            />
                            {foodData.ingredients.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => handleRemoveIngredient(index)}
                                    className="p-2 text-red-500 hover:text-red-700"
                                >
                                    <FiX size={18} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={handleAddIngredient}
                    className="mt-4 flex items-center text-orange-600 hover:text-orange-800"
                >
                    <FiPlus className="mr-1" />
                    Add Another Ingredient
                </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium  mb-4">Preparation Procedure</h3>
                <textarea
                    name="procedure"
                    value={foodData.procedure}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    placeholder="Step-by-step instructions for preparing the dish..."
                ></textarea>
            </div>
        </div>
    );
};

export default IngredientsForm;