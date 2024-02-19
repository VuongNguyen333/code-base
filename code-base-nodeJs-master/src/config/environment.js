import 'dotenv/config'

const dev = {
  app: {
    HOST: process.env.DEV_APP_HOST || 'localhost',
    PORT: process.env.DEV_APP_PORT || 3052
  },
  db: {
    MONGODB_URI: process.env.DEV_MONGODB_URI,
    DATABASE_NAME: process.env.DEV_DATABASE_NAME || 'shopDEV'
  }
}

const pro = {
  app: {
    PORT: process.env.PRO_APP_PORT || 3000
  },
  db: {
    MONGODB_URI: process.env.PRO_MONGODB_URI,
    DATABASE_NAME: process.env.PRO_DATABASE_NAME || 'shopPRO'
  }
}

const config = { dev, pro }
// const BUILD_MODE = process.env.BUILD_MODE || 'dev'
export const enviroment = {
  config: config[process.env.BUILD_MODE]
}