/* eslint-disable no-console */
import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { enviroment } from './config/environment'
import { StatusCodes } from 'http-status-codes'
import { checkConnect } from './helpers/check.connect'

const app = express()

// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())

//init db
require('./dbs/init.mongodb')
// checkConnect.checkOverload()


// init route
app.get('/', (req, res, next) => {
  const str = 'Hello fans'
  return res.status(StatusCodes.OK).json({
    message: 'Welcome!',
    metadata: str.repeat(10000)
  })
})

app.listen(enviroment.config.app.PORT, enviroment.config.app.HOST, () => {
  console.log(`Hello VuongDev, I am running at http://${ enviroment.config.app.HOST }:${ enviroment.config.app.PORT }`)
})