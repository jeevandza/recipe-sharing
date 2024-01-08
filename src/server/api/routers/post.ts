import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        strMeal: z.string().min(1),
        strDrinkAlternate: z.string(),
        strCategory: z.string(),
        strArea: z.string(),
        strInstructions: z.string(),
        strMealThumb : z.string(),
        strTags : z.string(),
        strYoutube : z.string(),
        strIngredient1 : z.string(),
        strImageSource :z.string(),
        strCreativeCommonsConfirmed:z.string()
      })
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.foodRecipe.create({
        data: input,
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.foodRecipe.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
