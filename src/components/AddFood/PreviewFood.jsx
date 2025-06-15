import AllergenTag from "../FoodDetail/AllergenTag";
import DietTag from "../FoodDetail/DietTag";

const foodData = {
  name: "Spaghetti Carbonara",
  image:
    "https://img.freepik.com/free-photo/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-background-dinner-slow-food-concept_2829-4639.jpg?semt=ais_hybrid&w=740",
  category: "Italian",
  description:
    "A classic Roman pasta dish made with egg yolks, pecorino cheese, pancetta, and black pepper.",
  servings: 4,
  rating: 4.6,
  nutritional: {
    caloriesPerServing: 650,
    macros: {
      protein: "25g",
      carbs: "70g",
      fats: "22g",
    },
    allergens: ["Dairy", "Eggs"],
    dietaryTags: ["Gluten", "Dairy"],
  },
  ingredients: [
    "400g spaghetti",
    "150g pancetta",
    "3 large egg yolks",
    "50g grated pecorino Romano",
    "Freshly ground black pepper",
  ],
  reviews: [
    {
      review: "Amazing flavor, simple but delicious!",
      rate: 5,
      reviewerImage: "https://example.com/reviews/user1.jpg",
    },
    {
      review: "Too rich for my taste, but authentic.",
      rate: 4,
      reviewerImage: "https://example.com/reviews/user2.jpg",
    },
  ],
  purchaseCount: 128,
  price: 14.99,
  quantity: 10,
  origin: "Italy",
  procedure:
    "Cook spaghetti in salted water. Sauté cubed pancetta until crispy. Whisk egg yolks with pecorino and pepper. Toss hot pasta into the pan with pancetta, then mix in egg sauce off heat.",
};

const PreviewFood = () => {
  return (
    <div className="">
      <div className="overflow-hidden">
        <img
          src={foodData.image}
          alt={foodData.name}
          className="w-full h-40 md:h-72 object-cover"
        />
        <div className="p-6 bg-white">
          <div className="mb-2">
            <h2 className="text-2xl font-bold">
              {foodData.name}
            </h2>
          </div>

          <p className="text-gray-700 italic mb-2">{foodData.description}</p>

          <div className="text-sm text-gray-600 my-4">
            <span className="font-bold">Category:</span> {foodData.category} |
            <span className="ml-2 font-bold">Origin:</span> {foodData.origin} |
            <span className="ml-2 font-bold">Servings:</span> {foodData.servings}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold  mb-1">Nutritional Info (per serving)</h4>
            <ul className="text-sm text-gray-700">
              <li>Calories: {foodData.nutritional.caloriesPerServing}</li>
              <li>Protein: {foodData.nutritional.macros.protein}</li>
              <li>Carbs: {foodData.nutritional.macros.carbs}</li>
              <li>Fats: {foodData.nutritional.macros.fats}</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold  mb-1">Dietary Tags</h4>
            <div className="flex flex-wrap gap-2">
              {foodData.nutritional.dietaryTags.map((tag, i) => <DietTag key={i}>{tag}</DietTag>)}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold  mb-1">Allergen Tags</h4>
            <div className="flex flex-wrap gap-2">
              {foodData.nutritional.allergens.map((tag, i) => <AllergenTag key={i}>{tag}</AllergenTag>)}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold  mb-1">Ingredients</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {foodData.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold  mb-1">Procedure</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{foodData.procedure}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PreviewFood;
