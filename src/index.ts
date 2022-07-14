import express from 'express'
import parser from 'body-parser'
import {router} from './routes'

const app = express()

app.use(parser.json())
app.use(router)

app.listen(3001, '127.0.0.1', () =>
  console.log('Server started at http://localhost:3001'),
)
