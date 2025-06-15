import React from 'react';

const Nutrition = ({nutritional}) => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Nutrition per Serving</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-gray-500 ">Calories</p>
                    <p className="text-lg font-semibold">{nutritional.caloriesPerServing}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Protein</p>
                    <p className="text-lg font-semibold">{nutritional.macros.protein}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 ">Carbs</p>
                    <p className="text-lg font-semibold">{nutritional.macros.carbs}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 ">Fats</p>
                    <p className="text-lg font-semibold">{nutritional.macros.fats}</p>
                </div>
            </div>
        </div>
    )
};

export default Nutrition;