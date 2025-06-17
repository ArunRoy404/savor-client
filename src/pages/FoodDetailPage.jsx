import FoodDetail from "../components/FoodDetail/FoodDetail";
import Button from "../components/UI/Button";
import Ingredients from "../components/FoodDetail/Ingredients";
import Nutrition from "../components/FoodDetail/Nutrition";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useFoodDetailApi from "../axios/useFoodDetailApi";
import Loader from "../components/Loader/Loader";
import Error from "../components/UI/Error";
import useAuthContext from "../custom_contexts/UseAuthContext";

const FoodDetailPage = () => {
  const { id } = useParams()
  const { foodDetailPromise } = useFoodDetailApi()
  const { firebaseUser } = useAuthContext()

  const { isPending, error, data: food } = useQuery({
    queryKey: ['foodDetail'],
    queryFn: () => foodDetailPromise(id)
      .then(res => res.data)
  })

  if (isPending) return <Loader />

  if (error) return <Error />

  return (
    <div className=" min-h-screen md:px-5 lg:px-30 py-10">
      {/* Hero Section */}
      <div className="mx-auto grid lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-xl h-60 md:h-90 lg:h-120 overflow-hidden shadow-lg">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-between">
          {/* Info */}
          <FoodDetail food={food} />
          {
            !food.quantity
              ? <button
                disabled
                className="disabled:cursor-not-allowed cursor-pointer mt-6 w-full py-3 px-6 rounded-lg bg-white border border-red-500 text-red-500 font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
              >
                Item is not Available
              </button>
              : firebaseUser?.email !== food?.ownerEmail
                ? <Button
                  to={`/food/purchase/${food._id}`}
                  className="cursor-pointer mt-6 w-full py-3 px-6 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
                >
                  Checkout
                </Button>
                : <Button
                  to={"/my-foods"}
                  className="cursor-pointer mt-6 w-full py-3 px-6 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
                >
                  Update
                </Button>
          }
        </div>
      </div>

      {/* Ingredients & Nutritional Info */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Ingredients */}
        <Ingredients ingredients={food.ingredients} />

        {/* Nutritional Info */}
        <Nutrition nutritional={food.nutritional} />
      </div>

      {/* Procedure */}
      <div className="mt-12">
        <h3 className="font-semibold text-xl mb-2">How to Make It</h3>
        <p>{food.procedure}</p>
      </div>
    </div>
  );
};

export default FoodDetailPage;