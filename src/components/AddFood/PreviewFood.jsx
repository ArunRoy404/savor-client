import AllergenTag from "../FoodDetail/AllergenTag";
import DietTag from "../FoodDetail/DietTag";

const PreviewFood = ({foodData}) => {
  return (
    <div className="">
      <div className="overflow-hidden">
        <img
          src={foodData.image}
          alt={foodData.name}
          className="w-full h-40 md:h-72 object-cover"
        />
        <div className="p-6">
          <div className="mb-2">
            <h2 className="text-2xl font-bold">
              {foodData.name}
            </h2>
          </div>

          <p className="opacity-80 italic mb-2">{foodData.description}</p>

          <div className="text-sm opacity-60 my-4">
            <span className="font-bold">Category:</span> {foodData.category} |
            <span className="ml-2 font-bold">Origin:</span> {foodData.origin} |
            <span className="ml-2 font-bold">Servings:</span> {foodData.servings}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold  mb-1">Nutritional Info (per serving)</h4>
            <ul className="text-sm opacity-80">
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
            <ul className="list-disc list-inside text-sm opacity-80">
              {foodData.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold  mb-1">Procedure</h4>
            <p className="text-sm opacity-80 leading-relaxed">{foodData.procedure}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PreviewFood;
