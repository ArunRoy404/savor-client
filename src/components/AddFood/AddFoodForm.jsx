import { useState } from 'react';
import useThemeContext from '../../custom_contexts/useThemeContext';
import PreviewFood from './PreviewFood';
import useAuthContext from '../../custom_contexts/UseAuthContext';
import { useEffect } from 'react';
import useAddFoodApi from '../../axios/useAddFoodApi';
import { notifyError, notifySuccess, notifyWarn } from '../../utilities/notification';
import BasicForm from './BasicForm';
import NutritionForm from './NutritionForm';
import IngredientsForm from './IngredientsForm';
import AddFoodActions from './AddFoodActions';
import AddFoodProgress from './AddFoodProgress';
import Error from '../UI/Error';

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
        procedure: "",
        ownerName: "",
        ownerEmail: ""
    });


    const [activeSection, setActiveSection] = useState("basic");
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { firebaseUser } = useAuthContext()
    const { isDark } = useThemeContext()
    const { addFoodPromise } = useAddFoodApi()


    useEffect(() => {
        if (firebaseUser) {
            setFoodData({
                ...foodData,
                ownerName: firebaseUser.displayName,
                ownerEmail: firebaseUser.email
            })
        }
    }, [firebaseUser])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (!isNaN(value) && value!=='') {
            setFoodData(prev => ({ ...prev, [name]: Number(value) }))
            return
        }
        setFoodData(prev => ({ ...prev, [name]: value }));
    };


    const handleAddFood = (e) => {
        console.log(foodData);
        e.preventDefault();
        const sections = ["basic", "nutrition", "ingredients", "preview"];
        const currentIndex = sections.indexOf(activeSection);


        if (activeSection === "preview") {
            setIsLoading(true)
            addFoodPromise(foodData)
                .then(res => {
                    if (res.data.insertedId) {
                        notifySuccess("Food added Successfully")
                    } else {
                        notifyWarn("Food add unsuccessful")
                    }
                })
                .catch(err => {
                    setError(err)
                    notifyError(err.message)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            setActiveSection(sections[currentIndex + 1]);
        }
    };

    if (error) return <Error error={error} />

    return (
        <div className={` ${isDark ? 'bg-gray-800' : 'bg-white'}  drop-shadow-xl rounded-2xl`} >
            <div className="mx-auto rounded-xl shadow-md overflow-hidden">
                <div className={`p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-300'}`}>
                    <h1 className="text-2xl font-bold">Add New Menu Item</h1>
                    <p className="opacity-90">Fill in the details below to add a new dish to your menu</p>
                </div>

                <form onSubmit={handleAddFood} className="p-6">
                    <div className="mb-8">
                        <AddFoodProgress activeSection={activeSection} />

                        {activeSection === "basic" && <BasicForm foodData={foodData} handleChange={handleChange} />}
                        {activeSection === "nutrition" && <NutritionForm foodData={foodData} setFoodData={setFoodData} />}
                        {activeSection === "ingredients" && <IngredientsForm foodData={foodData} setFoodData={setFoodData} />}
                        {activeSection === "preview" && <PreviewFood foodData={foodData} />}
                    </div>
                    <AddFoodActions isLoading={isLoading} activeSection={activeSection} setActiveSection={setActiveSection} />
                </form>
            </div>
        </div>
    );
};

export default AddFoodForm;