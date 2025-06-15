const Ingredients = ({ingredients}) => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc pl-5 space-y-1">
                {ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ingredients;