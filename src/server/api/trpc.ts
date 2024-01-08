// Import necessary dependencies
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

// Import your server-specific modules (e.g., authentication session and database)
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

// Function to create the tRPC context
export const createTRPCContext = async (opts: { headers: Headers }) => {
  // Fetch the authentication session
  const session = await getServerAuthSession();

  // Return the context with database, session, and other options
  return {
    db,
    session,
    ...opts,
  };
};

// Initialize tRPC with the context creation function
export const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson, // Use superjson for serialization/deserialization
  errorFormatter({ shape, error }) {
    // Customize error formatting, including ZodErrors
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

// Create tRPC router, public procedure, and protected procedure
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  // Ensure the session is valid and user is authenticated
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  // Continue to the next step in the middleware
  return next({
    ctx: {
      // Inferred non-nullable session
      session: { ...ctx.session, user: ctx.session.user },
      // Add any other context properties as needed
      // For example: someContextProp: someValue
    },
  });
});
