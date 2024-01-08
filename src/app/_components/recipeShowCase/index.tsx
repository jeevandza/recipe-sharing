type RecipeShowCaseI = {
  strMealThumb: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
};

export default function RecipeShowCase({
  strMealThumb,
  strMeal,
  strDrinkAlternate,
  strCategory,
  strArea,
}: RecipeShowCaseI) {
  return (
    <div className="w-[300px] h-[400px] transform overflow-hidden rounded-md bg-gray-200 p-4 shadow-md transition-transform hover:scale-105 cursor-pointer">
      <div className="aspect-w-4 aspect-h-3 relative mb-4">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="mb-2 text-xl font-bold">{strMeal}</h3>
        {strDrinkAlternate && (
          <p className="mb-1 text-gray-600">
            Drink Alternate: {strDrinkAlternate}
          </p>
        )}
        <p className="mb-1 text-gray-600">Category: {strCategory}</p>
        <p className="mb-4 text-gray-600">Area: {strArea}</p>
      </div>
    </div>
  );
}
