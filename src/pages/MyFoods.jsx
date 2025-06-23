import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import useThemeContext from '../custom_contexts/useThemeContext';
import DietTag from '../components/FoodDetail/DietTag';
import AllergenTag from '../components/FoodDetail/AllergenTag';
import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../custom_contexts/UseAuthContext';
import Loader from '../components/Loader/Loader';
import Error from '../components/UI/Error';
import { notifyError, notifySuccess } from '../utilities/notification';
import UpdateFoodModal from '../components/UpdateFoodModal/UpdateFoodModal';
import useMyFoodsApi from '../axios/useMyFoodsApi';
import useDeleteFoodApi from '../axios/useDeleteFoodApi';
import NoResultFound from '../components/NoResultFound/NoResultFound';


const MyFoods = () => {

    const { isDark } = useThemeContext()
    const { firebaseUser } = useAuthContext()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFood, setCurrentFood] = useState(null);

    const { myFoodsPromise } = useMyFoodsApi()
    const { deleteFoodPromise } = useDeleteFoodApi()

    const [deleteLoading, setDeleteLoading] = useState(false)


    const { isPending, error, data: foods, refetch } = useQuery({
        queryKey: ['myFoods', firebaseUser?.email],
        queryFn: () => myFoodsPromise(firebaseUser.email).then(res => res.data)
    })


    const handleDeleteFood = (id, email) => {
        setDeleteLoading(true)
        deleteFoodPromise(id, email)
            .then(res => {
                if (res?.data?.deletedCount) {
                    notifySuccess('Food Item Deleted')
                    refetch()
                }
            })
            .catch(err => {
                notifyError(err.message)
            })
            .finally(() => {
                setDeleteLoading(false)
            })
    };


    const handleOpenUpdateModal = (food) => {
        setCurrentFood(food);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentFood(null);
    };

    if (isPending) return <Loader />

    if (error) return <Error />



    return (
        <div className="py-10 container mx-auto">
            <div className="">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Menu Management</h1>
                    <p className="opacity-80">View and update your menu items</p>
                </div>

                <div className="space-y-5">
                    {
                        foods.length === 0 && <NoResultFound />
                    }
                    {foods.map(food => (
                        <div key={food._id} className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-sm overflow-hidden border border-gray-500 hover:shadow-md transition-shadow`}>
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
                                                <span className=" opacity-90 text-sm">${food.price}</span>
                                                <span className="opacity-90 text-sm">{food.quantity} in stock</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-3 opacity-70 line-clamp-2">{food.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {food.nutritional.dietaryTags.map((tag, index) => <DietTag key={index}>{tag}</DietTag>)}
                                        {food.nutritional.allergens.map((allergen, index) => <AllergenTag key={index}>{allergen}</AllergenTag>)}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} md:w-50 flex md:flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-gray-500 space-x-3 md:space-x-0 md:space-y-3`}>
                                    <button
                                        onClick={() => handleOpenUpdateModal(food)}
                                        className="p-2 cursor-pointer bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                                        aria-label="Edit food"
                                    >
                                        <FiEdit size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteFood(food._id, food.ownerEmail)}
                                        className="p-2 bg-red-100 cursor-pointer text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                        aria-label="Delete food"
                                    >
                                        {
                                            deleteLoading
                                                ? <span className="loading loading-spinner loading-xs"></span>
                                                : <FiTrash2 size={18} />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Update Food Modal */}
                {isModalOpen && <UpdateFoodModal handleCloseModal={handleCloseModal} currentFood={currentFood} setCurrentFood={setCurrentFood} refetch={refetch} />}
            </div>
        </div>
    );
};

export default MyFoods;