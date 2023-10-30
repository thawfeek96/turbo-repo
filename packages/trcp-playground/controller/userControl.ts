import { trpc } from "../lib/TRCP";
import { todoRouter } from "../handler/userHandler";


export const appRoute = trpc.router({
  todo: todoRouter,
});

export type AppRouter = typeof appRoute;
