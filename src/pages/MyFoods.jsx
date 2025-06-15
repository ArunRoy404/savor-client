import { useState } from 'react';
import { FiEdit, FiTrash2, FiX, FiPlus, FiMinus } from 'react-icons/fi';
import useThemeContext from '../custom_contexts/useThemeContext';
import DietTag from '../components/FoodDetail/DietTag';
import AllergenTag from '../components/FoodDetail/AllergenTag';

const MyFoods = () => {

    const { isDark } = useThemeContext()
    // Sample food data
    const [foods, setFoods] = useState([
        {
            id: 1,
            name: "Spaghetti Carbonara",
            image: "https://img.freepik.com/free-photo/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-background-dinner-slow-food-concept_2829-4639.jpg",
            category: "Italian",
            description: "A classic Roman pasta dish made with egg yolks, pecorino cheese, pancetta, and black pepper.",
            servings: 4,
            nutritional: {
                caloriesPerServing: 650,
                macros: {
                    protein: "25g",
                    carbs: "70g",
                    fats: "22g"
                },
                allergens: ["Dairy", "Eggs"],
                dietaryTags: ["Gluten", "Dairy"]
            },
            ingredients: [
                "400g spaghetti",
                "150g pancetta",
                "3 large egg yolks",
                "50g grated pecorino Romano",
                "Freshly ground black pepper"
            ],
            price: 14.99,
            quantity: 10,
            origin: "Italy",
            procedure: "Cook spaghetti in salted water. Sauté cubed pancetta until crispy. Whisk egg yolks with pecorino and pepper. Toss hot pasta into the pan with pancetta, then mix in egg sauce off heat."
        },
        {
            id: 2,
            name: "Margherita Pizza",
            image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            category: "Italian",
            description: "Classic pizza with tomato sauce, mozzarella, and basil.",
            servings: 2,
            nutritional: {
                caloriesPerServing: 850,
                macros: {
                    protein: "35g",
                    carbs: "95g",
                    fats: "35g"
                },
                allergens: ["Dairy", "Gluten"],
                dietaryTags: ["Vegetarian"]
            },
            ingredients: [
                "Pizza dough",
                "Tomato sauce",
                "Fresh mozzarella",
                "Basil leaves",
                "Olive oil"
            ],
            price: 12.50,
            quantity: 15,
            origin: "Italy",
            procedure: "Spread sauce on dough, add cheese, bake at 475°F for 10-12 minutes, add fresh basil after baking."
        }
    ]);

    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFood, setCurrentFood] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    // Open modal with food data
    const openUpdateModal = (food) => {
        setCurrentFood(JSON.parse(JSON.stringify(food))); // Deep copy
        setImagePreview(food.image);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentFood(null);
        setImagePreview('');
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentFood(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle nutritional changes
    const handleNutritionalChange = (e) => {
        const { name, value } = e.target;
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                [name]: value
            }
        }));
    };

    // Handle macros changes
    const handleMacrosChange = (e) => {
        const { name, value } = e.target;
        setCurrentFood(prev => ({
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

    // Handle image URL change
    const handleImageChange = (e) => {
        const value = e.target.value;
        setCurrentFood(prev => ({
            ...prev,
            image: value
        }));
        setImagePreview(value);
    };

    // Handle ingredients changes
    const handleIngredientChange = (index, value) => {
        const newIngredients = [...currentFood.ingredients];
        newIngredients[index] = value;
        setCurrentFood(prev => ({
            ...prev,
            ingredients: newIngredients
        }));
    };

    // Add new ingredient
    const addIngredient = () => {
        setCurrentFood(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, ""]
        }));
    };

    // Remove ingredient
    const removeIngredient = (index) => {
        const newIngredients = currentFood.ingredients.filter((_, i) => i !== index);
        setCurrentFood(prev => ({
            ...prev,
            ingredients: newIngredients
        }));
    };

    // Handle allergen changes
    const handleAllergenChange = (index, value) => {
        const newAllergens = [...currentFood.nutritional.allergens];
        newAllergens[index] = value;
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                allergens: newAllergens
            }
        }));
    };

    // Add allergen
    const addAllergen = () => {
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                allergens: [...prev.nutritional.allergens, ""]
            }
        }));
    };

    // Remove allergen
    const removeAllergen = (index) => {
        const newAllergens = currentFood.nutritional.allergens.filter((_, i) => i !== index);
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                allergens: newAllergens
            }
        }));
    };

    // Handle dietary tag changes
    const handleDietaryTagChange = (index, value) => {
        const newDietaryTags = [...currentFood.nutritional.dietaryTags];
        newDietaryTags[index] = value;
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                dietaryTags: newDietaryTags
            }
        }));
    };

    // Add dietary tag
    const addDietaryTag = () => {
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                dietaryTags: [...prev.nutritional.dietaryTags, ""]
            }
        }));
    };

    // Remove dietary tag
    const removeDietaryTag = (index) => {
        const newDietaryTags = currentFood.nutritional.dietaryTags.filter((_, i) => i !== index);
        setCurrentFood(prev => ({
            ...prev,
            nutritional: {
                ...prev.nutritional,
                dietaryTags: newDietaryTags
            }
        }));
    };

    // Update food item
    const handleUpdateFood = () => {
        setFoods(foods.map(food =>
            food.id === currentFood.id ? currentFood : food
        ));
        closeModal();
    };

    // Delete food item
    const handleDeleteFood = (id) => {
        setFoods(foods.filter(food => food.id !== id));
    };

    return (
        <div className="py-10">
            <div className="">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Menu Management</h1>
                    <p className="opacity-80">View and update your menu items</p>
                </div>

                <div className="space-y-5">
                    {foods.map(food => (
                        <div key={food.id} className={`${isDark ?'bg-gray-900' :'bg-white'} rounded-xl shadow-sm overflow-hidden border border-gray-500 hover:shadow-md transition-shadow`}>
                            <div className="flex flex-col md:flex-row">
                                {/* Food Image */}
                                <div className="md:w-60">
                                    <img
                                        src={food.image}
                                        alt={food.name}
                                        className="w-full h-40 md:h-full object-cover"
                                    />
                                </div>

                                {/* Food Details */}
                                <div className="flex-1 p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-xl font-semibold ">{food.name}</h2>
                                            <div className="flex items-center space-x-3 mt-1">
                                                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">{food.category}</span>
                                                <span className=" opacity-90 text-sm">${food.price.toFixed(2)}</span>
                                                <span className="opacity-90 text-sm">{food.quantity} in stock</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-3 opacity-70 line-clamp-2">{food.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {food.nutritional.dietaryTags.map((tag, index) =><DietTag key={index}>{tag}</DietTag>)}
                                        {food.nutritional.allergens.map((allergen, index) => <AllergenTag key={index}>{allergen}</AllergenTag>)}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className={`${isDark ?'bg-gray-700' :'bg-gray-50'} md:w-50 flex md:flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-gray-500 space-x-3 md:space-x-0 md:space-y-3`}>
                                    <button
                                        onClick={() => openUpdateModal(food)}
                                        className="p-2 cursor-pointer bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                                        aria-label="Edit food"
                                    >
                                        <FiEdit size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteFood(food.id)}
                                        className="p-2 bg-red-100 cursor-pointer text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                        aria-label="Delete food"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Update Food Modal */}
                {isModalOpen && currentFood && (
                    <div className="z-[999] fixed inset-0 bg-black/10 backdrop-blur-2xl flex items-center justify-center p-4">
                        <div className={` ${isDark ?'bg-gray-900' :'bg-white/50'} rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold ">Update {currentFood.name}</h2>
                                    <button
                                        onClick={closeModal}
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
                                        onChange={handleImageChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                        required
                                    />
                                    {imagePreview && (
                                        <div className="mt-4 flex justify-center">
                                            <img
                                                src={imagePreview}
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
                                                onChange={handleInputChange}
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
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block opacity-70 font-medium mb-2">Description*</label>
                                            <textarea
                                                name="description"
                                                value={currentFood.description}
                                                onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
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
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                            />
                                        </div>

                                        <div>
                                            <label className="block opacity-70 font-medium mb-2">Servings</label>
                                            <input
                                                type="number"
                                                name="servings"
                                                value={currentFood.servings}
                                                onChange={handleInputChange}
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
                                                onChange={handleNutritionalChange}
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
                                                value={currentFood.nutritional.macros.carbs}
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
                                                value={currentFood.nutritional.macros.fats}
                                                onChange={handleMacrosChange}
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
                                                    onClick={() => removeAllergen(index)}
                                                    className="p-2 text-red-500 hover:text-red-700"
                                                >
                                                    <FiMinus size={18} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addAllergen}
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
                                                    onClick={() => removeDietaryTag(index)}
                                                    className="p-2 text-red-500 hover:text-red-700"
                                                >
                                                    <FiMinus size={18} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addDietaryTag}
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
                                                    onClick={() => removeIngredient(index)}
                                                    className="p-2 text-red-500 hover:text-red-700"
                                                >
                                                    <FiMinus size={18} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addIngredient}
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
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                        placeholder="Step-by-step instructions..."
                                    />
                                </div>

                                {/* Modal Footer */}
                                <div className="mt-8 flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="cursor-pointer px-6 py-2 border border-gray-300 opacity-70 rounded-lg font-medium hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleUpdateFood}
                                        className="cursor-pointer px-6 py-2 rounded-lg font-medium border bg-gray-800 text-white transition duration-300"
                                    >
                                        Update Dish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyFoods;