import React from "react";

type SlideItemI = {
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strMeal: string;
};

const SlideItem: React.FC<SlideItemI> = ({
  strCategory,
  strArea,
  strMealThumb,
  strTags,
  strYoutube,
  strMeal,
}) => {
  return (
    <div className="relative w-screen h-[500px]">
      <img
        className="object-cover w-full h-full rounded-md"
        src={strMealThumb}
        alt={strMeal}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        <h2 className="text-3xl font-semibold mb-2">{strMeal}</h2>
        <p className="mb-4 text-lg">{strCategory} | {strArea}</p>
        <div className="mt-4 flex items-center">
          <div className="mr-4">
            <strong>Tags:</strong> {strTags}
          </div>
          <a
            href={strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
