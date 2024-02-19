/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
'use strict'
import mongoose from 'mongoose'
import { enviroment } from '~/config/environment'
import { checkConnect } from '~/helpers/check.connect'

const connectString = enviroment.config.db.MONGODB_URI

class Database {
  constructor() {
    this.connect()
  }
  //connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose.connect(connectString, {
      maxPoolSize: 50
    }).then(_ => {
      // checkConnect.countConnect()
      console.log('Connected Mongodb Success PRO')
    })
      .catch(err => console.log('Error Connect'))
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

export const instanceMongodb = Database.getInstance()
