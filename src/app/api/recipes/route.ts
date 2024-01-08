// pages/api/recipes.js
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return handleGet(req, res);
  } else if (req.method === "POST" || req.method === "PUT") {
    return handleRecipe(req, res);
  } else if (req.method === "DELETE") {
    return handleDelete(req, res);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const recipes = await prisma.foodRecipe.findMany();
    res.status(200).json({ data: recipes });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}

async function handleRecipe(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return handleCreate(req, res);
  } else if (req.method === "PUT") {
    return handleUpdate(req, res);
  }
}

async function handleCreate(req: NextApiRequest, res: NextApiResponse) {
  const {
    id,
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
    strIngredient1,
    strImageSource,
    strCreativeCommonsConfirmed,
    dateModified,
  } = req.body;

  try {
    const createdRecipe = await prisma.foodRecipe.create({
      data: {
        id,
        strMeal,
        strDrinkAlternate,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        strIngredient1,
        strImageSource,
        strCreativeCommonsConfirmed,
        dateModified,
      },
    });

    res.status(201).json({ message: "Recipe created successfully", data: createdRecipe });
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}

async function handleUpdate(req: NextApiRequest, res: NextApiResponse) {
  const { id, ...updateFields } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID is required for update" });
  }

  try {
    const updatedRecipe = await prisma.foodRecipe.update({
      where: { id },
      data: updateFields,
    });

    res.status(200).json({ message: "Recipe updated successfully", data: updatedRecipe });
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID is required for delete" });
  }

  try {
    await prisma.foodRecipe.delete({ where: { id } });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
