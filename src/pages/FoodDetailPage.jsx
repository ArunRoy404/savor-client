import FoodDetail from "../components/FoodDetail/FoodDetail";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import Button from "../components/UI/Button";
import Ingredients from "../components/FoodDetail/Ingredients";
import Nutrition from "../components/FoodDetail/Nutrition";
import { foodItems } from "../utilities/dummyFoodsData";

const FoodDetailPage = () => {
  // const { name } = useParams(); 
  // const food = foodItems.find(item => item.name.toLowerCase() === decodeURIComponent(name).toLowerCase());
  const food = foodItems[0]

  if (!food) {
    return <div className="text-center py-10">Food not found</div>;
  }

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
          {/* Purchase Button */}
          <Button
            className="cursor-pointer mt-6 w-full py-3 px-6 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-200 shadow-md transform hover:scale-[1.01] active:scale-100"
          >
            Checkout
          </Button>
        </div>
      </div>

      {/* Ingredients & Nutritional Info */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Ingredients */}
        <Ingredients ingredients={food.ingredients} />

        {/* Nutritional Info */}
        <Nutrition nutritional={food.nutritional}/>
      </div>

      {/* Procedure */}
      <div className="mt-12">
        <h3 className="font-semibold text-xl mb-2">How to Make It</h3>
        <p>{food.procedure}</p>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {food.reviews.map((review, i) => <ReviewCard key={i} review={review}/> )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;