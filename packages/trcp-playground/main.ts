import express, { Application, NextFunction, Request, Response } from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { expressHandler } from 'trpc-playground/handlers/express'
import { appRoute } from './controller/userControl'

const PORT = process.env.PORT || 5001

const runApp = async () => {
  const app: Application = express()


  const trpcApiEndpoint = '/api/trpc'
  const playgroundEndpoint = '/api/trpc-playground'

  app.get('/', (req, res) => {
    return res.send('Hello')
  })

  app.use(
    trpcApiEndpoint,
    trpcExpress.createExpressMiddleware({
      router: appRoute,
      createContext: () => ({}),
    }),
  )

  app.use(
    playgroundEndpoint,
    await expressHandler({
      trpcApiEndpoint,
      playgroundEndpoint,
      router:  appRoute    
    }),
  )

  app.listen(PORT, () => {
    console.log(`TRCP-Playground running is ${PORT}`)
  })
}

runApp()


