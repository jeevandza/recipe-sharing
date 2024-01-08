"use client";
import { useState, useEffect } from "react";
import LayoutWrapper from "../_components/layoutWrapper";
import Slider from "../_components/slider";
import RecipeShowCase from "../_components/recipeShowCase";
import { Types, Helpers } from "~/_utils";
import Loader from "../_components/loader";
import SearchInput from "../_components/searchInput";
import CreateRecipe from "../_components/createRecipe";
import CustomModal from "../_components/modals/customModal";
import Link from "next/link";

export default function Home() {
  const [recipeData, setRecipeData] = useState([]);
  const [isRecipeDataLoading, setISRecipeDataLoading] = useState(false);
  const [openCreateRecipe, setOpenCreateRecipe] = useState(false);
  const [searchForARecipe, setSearchForARecipe] = useState("");

  const searchUserValueDebounce = Helpers.useDebounce(searchForARecipe, 1000);

  useEffect(() => {
    async function getData() {
      setISRecipeDataLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchUserValueDebounce}`,
      );

      const data = (await res.json()) || [];
      return setRecipeData(data.meals === null ? [] : data.meals);
    }
    setISRecipeDataLoading(false);

    if (!recipeData.length || searchUserValueDebounce) {
      getData();
    }
  }, [!recipeData.length, searchForARecipe]);

  return (
    <>
      <LayoutWrapper>
        <div className="bg-gray-100">
          <div className="p-4">
            <Slider />
          </div>
          <div className="flex justify-center py-4">
            <h3 className="text-xl font-bold">The best Receipies</h3>
          </div>
          <div className="flex justify-end p-4">
            <div>
              <SearchInput
                searchValue={searchForARecipe}
                handleSearchValue={(e: any) =>
                  setSearchForARecipe(e.target.value)
                }
              />
            </div>
            <div className="px-4">
              <button
                onClick={() => setOpenCreateRecipe(true)}
                className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
              >
                Create Recipe
              </button>
            </div>
          </div>
          {isRecipeDataLoading ? (
            <Loader />
          ) : (
            <div className="flex w-screen flex-wrap justify-center gap-8">
              {recipeData.map((recipe: Types.RecipeI) => {
                return (
                  <Link href={`/home/${encodeURIComponent(recipe.idMeal)}`}>
                    <RecipeShowCase
                      strMealThumb={recipe.strMealThumb}
                      strMeal={recipe.strMeal}
                      strDrinkAlternate={recipe.strDrinkAlternate}
                      strCategory={recipe.strCategory}
                      strArea={recipe.strCategory}
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </LayoutWrapper>
      <CustomModal
        isOpen={openCreateRecipe}
        onClose={() => setOpenCreateRecipe(false)}
      >
        <CreateRecipe />
      </CustomModal>
    </>
  );
}
