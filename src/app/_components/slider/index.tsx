"use-client";
import { useState, useEffect } from "react";
import { Types } from "~/_utils";
import SlideItem from "./slideItem";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recipeData, setRecipeData] = useState([]);

  const handleSlidePreviousRecipe = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recipeData.length - 1 : prevIndex - 1,
    );
  };

  const handleSlideNextRecipe = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recipeData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideNextRecipe();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
      );

      const data = await res.json();
      return setRecipeData(data.meals);
    }

    if (!recipeData.length) {
      getData();
    }
  }, [!recipeData.length]);

  return (
    <div id="carousel" className="relative w-full overflow-hidden">
      <div
        id="carouselItems"
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {recipeData.map((recipe: Types.RecipeI, index: number) => (
          <div
            key={recipe.idMeal}
            className="w-full flex-shrink-0"
            style={{ minWidth: "100%" }}
          >
            <SlideItem
              strCategory={recipe.strCategory}
              strArea={recipe.strArea}
              strMealThumb={recipe.strMealThumb}
              strTags={recipe.strTags}
              strYoutube={recipe.strYoutube}
              strMeal={recipe.strMeal}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSlidePreviousRecipe}
        id="prevBtn"
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-white"
      >
        Prev
      </button>
      <button
        onClick={handleSlideNextRecipe}
        id="nextBtn"
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
