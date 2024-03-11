import express, { Express, Request, Response } from 'express'

console.log('The server is starting')
const app: Express = express()

app.get('/api/v1/health-check', (req: Request, res: Response) => {
  res.send({ status: 'healthy' })
})

const port = 5000

app.listen(port, () => {
  console.log('Server started')
  console.log(`Try it on http://localhost:${port}/api/v1/health-check`)
})
