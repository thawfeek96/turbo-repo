import { trpc } from "../lib/TRCP";



export const todoRouter = trpc.router({
  list: trpc.procedure.query(async() => {
    const users = 'Welcome' // Assuming your Prisma model is named 'todo'

    
    return  users
  }),
})