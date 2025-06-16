import { useState } from 'react';
import { FiPlus, FiX, FiUpload, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useThemeContext from '../../custom_contexts/useThemeContext';
import PreviewFood from './PreviewFood';

const AddFoodForm = () => {
    const [foodData, setFoodData] = useState({
        name: "",
        image: "",
        category: "",
        description: "",
        servings: 1,
        rating: 0,
        nutritional: {
            caloriesPerServing: 0,
            macros: {
                protein: "",
                carbs: "",
                fats: ""
            },
            allergens: [],
            dietaryTags: []
        },
        purchaseCount: 0,
        ingredients: [""],
        price: 0,
        quantity: 0,
        origin: "",
        procedure: ""
    });


    const [activeSection, setActiveSection] = useState("basic");
    const [allergenInput, setAllergenInput] = useState("");
    const [dietaryTagInput, setDietaryTagInput] = useState("");


    const { isDark } = useThemeContext()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData(prev => ({ ...prev, [name]: value }));
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Food data submitted:", foodData);
        // Here you would typically send the data to your backend
    };

    return (
        <div className={` ${isDark ? 'bg-gray-800' : 'bg-white'}  drop-shadow-xl rounded-2xl`} >
            <div className="mx-auto rounded-xl shadow-md overflow-hidden">
                <div className={`p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-300'}`}>
                    <h1 className="text-2xl font-bold">Add New Menu Item</h1>
                    <p className="opacity-90">Fill in the details below to add a new dish to your menu</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-8">
                        <div className="space-x-2 mb-6 overflow-x-auto pb-2 hidden md:flex">
                            <button
                                type="button"
                                onClick={() => setActiveSection("basic")}
                                className={`cursor-pointer transition duration-300 px-4 py-2 rounded-lg font-medium ${activeSection === "basic" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
                            >
                                Basic Info
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveSection("nutrition")}
                                className={`cursor-pointer transition duration-300  px-4 py-2 rounded-lg font-medium ${activeSection === "nutrition" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
                            >
                                Nutrition
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveSection("ingredients")}
                                className={`cursor-pointer transition duration-300  px-4 py-2 rounded-lg font-medium ${activeSection === "ingredients" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
                            >
                                Ingredients
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveSection("preview")}
                                className={`cursor-pointer transition duration-300  px-4 py-2 rounded-lg font-medium ${activeSection === "preview" ? 'bg-gray-600 text-white' : 'border border-gray-300 '}`}
                            >
                                Preview
                            </button>
                        </div>

                        {activeSection === "basic" && (
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
                                        <label className="block  font-medium mb-2">Origin/Cuisine</label>
                                        <input
                                            type="text"
                                            name="origin"
                                            value={foodData.origin}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                            placeholder="e.g. Italy"
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
                                        <label className="block  font-medium mb-2">Servings</label>
                                        <input
                                            type="number"
                                            name="servings"
                                            value={foodData.servings}
                                            onChange={handleChange}
                                            min="1"
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
                                        <label className="block  font-medium mb-2">Quantity in Stock</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={foodData.quantity}
                                            onChange={handleChange}
                                            min="0"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "nutrition" && (
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
                        )}

                        {activeSection === "ingredients" && (
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
                        )}
                        {activeSection === "preview" && <PreviewFood />}
                    </div>

                    <div className="flex justify-between border-t border-gray-200 pt-6">
                        <button
                            type="button"
                            onClick={() => {
                                if (activeSection === "basic") return;
                                const sections = ["basic", "nutrition", "ingredients", "preview"];
                                const currentIndex = sections.indexOf(activeSection);
                                setActiveSection(sections[currentIndex - 1]);
                            }}
                            disabled={activeSection === "basic"}
                            className={`px-6 py-2 rounded-lg cursor-pointer font-medium ${activeSection === "basic" ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'border border-gray-300 hover:bg-gray-700 hover:text-white transition duration-300'}`}
                        >
                            Previous
                        </button>
                        {activeSection !== "preview" ? (
                            <button
                                type="button"
                                onClick={() => {
                                    const sections = ["basic", "nutrition", "ingredients", "preview"];
                                    const currentIndex = sections.indexOf(activeSection);
                                    setActiveSection(sections[currentIndex + 1]);
                                }}
                                className="cursor-pointer px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="cursor-pointer px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
                            >
                                Save Menu Item
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFoodForm;