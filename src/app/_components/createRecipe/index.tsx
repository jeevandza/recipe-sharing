"use client";
import React, { useState } from "react";

export default function CreateRecipe() {
  const initialRecipeData = {
    strMeal: "",
    strDrinkAlternate: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strMealThumb: "",
    strTags: "",
    strYoutube: "",
    ingredients: [{ name: "", amount: "" }],
  };

  const [recipeData, setRecipeData] = useState<any>(initialRecipeData);

  const handleChange = (key: any, value: string) => {
    setRecipeData({
      ...recipeData,
      [key]: value,
    });
  };

  const handleAddIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, { name: "", amount: "" }],
    });
  };

  const handleChangeIngredient = (index: number, key: any, value: string) => {
    const updatedIngredients: any = [...recipeData.ingredients];
    updatedIngredients[index][key] = value;
    setRecipeData({
      ...recipeData,
      ingredients: updatedIngredients,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (recipeData.strMeal && recipeData.strInstructions) {
      // Do something with the submitted data, such as sending it to an API
      console.log("Submitted Data:", recipeData);
    } else {
      alert("Please fill in all mandatory fields");
    }
  };

  const handleRemoveSelectedIndex = (index: number) => {
    const removedSelectedIndex = recipeData.ingredients.filter(
      (ingredient: any, idx: number) => idx !== index,
    );
    setRecipeData({
      ...recipeData,
      ingredients: removedSelectedIndex,
    });
  };



  return (
    <div className="mx-auto max-w-md rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(recipeData).map((key) => {
          if (typeof recipeData[key] !== "object") {
            return (
              <div key={key} className="mb-4">
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-700"
                >
                  {key
                    .replace(/\b\w/g, (char) => char.toUpperCase())
                    .replace(/([a-z])([A-Z])/g, "$1 $2")}
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${key
                    .replace(/\b\w/g, (char) => char.toUpperCase())
                    .replace(/([a-z])([A-Z])/g, "$1 $2")}`}
                  id={key}
                  value={recipeData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 transition duration-300 focus:border-blue-500 focus:outline-none"
                  required={key === "strMeal" || key === "strInstructions"}
                />
              </div>
            );
          }
        })}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          {recipeData.ingredients.map((ingredient: any, index: any) => {
            return (
              <div key={index} className="mt-2 flex space-x-2">
                <input
                  type="text"
                  placeholder={`Ingredient ${index + 1} Name`}
                  value={ingredient.name}
                  onChange={(e) =>
                    handleChangeIngredient(index, "name", e.target.value)
                  }
                  className="w-1/2 rounded-md border border-gray-300 px-3 py-2 transition duration-300 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder={`Ingredient ${index + 1} Amount`}
                  value={ingredient.amount}
                  onChange={(e) =>
                    handleChangeIngredient(index, "amount", e.target.value)
                  }
                  className="w-1/2 rounded-md border border-gray-300 px-3 py-2 transition duration-300 focus:border-blue-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSelectedIndex(index)}
                  className="rounded-md bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            );
          })}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="mt-2 rounded-md bg-blue-500 p-2 text-white transition duration-300 hover:bg-blue-600"
          >
            Add Ingredient
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-green-500 py-2 text-white transition duration-300 hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
