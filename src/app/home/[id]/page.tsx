"use client";
import { useEffect, useState } from "react";
import { Types } from "~/_utils";
import Loader from "~/app/_components/loader";
import LayoutWrapper from "~/app/_components/layoutWrapper";

export default function Page({ params }: { params: { id: string } }) {
  const [isSingleRecipeLoading, setIsSingleRecipeLoading] = useState(false);
  const [singleRecipeData, setSingleRecipeData] = useState([]);
  useEffect(() => {
    async function getData() {
      setIsSingleRecipeLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`,
      );

      const data = await res.json();
      return setSingleRecipeData(data.meals);
    }
    setIsSingleRecipeLoading(false);

    if (!singleRecipeData.length) {
      getData();
    }
  }, [!singleRecipeData.length]);

  return (
    <LayoutWrapper>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-8">
        {isSingleRecipeLoading ? (
          <Loader />
        ) : (
          <div className="max-w-2xl rounded-md bg-white p-8 shadow-md">
            {singleRecipeData.map((recipe: Types.RecipeI) => (
              <div key={recipe.idMeal} className="mb-8">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="mb-4 h-auto w-full rounded-md shadow-md"
                />

                <h1 className="mb-4 text-3xl font-bold">{recipe.strMeal}</h1>

                <p className="mb-2 text-gray-700">
                  <strong>Category:</strong> {recipe.strCategory}
                </p>

                <p className="mb-2 text-gray-700">
                  <strong>Area:</strong> {recipe.strArea}
                </p>

                <div className="mb-4">
                  <h2 className="mb-2 text-xl font-bold">Instructions</h2>
                  <p className="text-gray-700">{recipe.strInstructions}</p>
                </div>

                {recipe.strTags && (
                  <p className="mb-2 text-gray-700">
                    <strong>Tags:</strong> {recipe.strTags}
                  </p>
                )}

                {recipe.strYoutube && (
                  <div className="mb-4">
                    <h2 className="mb-2 text-xl font-bold">Video Tutorial</h2>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${
                        recipe.strYoutube.split("v=")[1]
                      }`}
                      title="YouTube video player"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* <p className="mb-2 text-gray-700">
              <strong>Meal ID:</strong> {recipe.idMeal}
            </p> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
}
