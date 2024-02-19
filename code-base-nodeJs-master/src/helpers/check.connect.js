/* eslint-disable no-console */
'use strict'
import mongoose from 'mongoose'
import os from 'os'
import process from 'process'
const _SECONDs = 5000

const countConnect = () => {
  const numConnect = mongoose.connections.length
  console.log(`Number of connections:: ${numConnect}`)
}

//check Overload
const checkOverload = () => {
  setInterval(() => {
    const numConnect = mongoose.connections.length
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss

    //example maximum number of connection based on number of cores
    const maxConnections = numCores * 5
    console.log(`Ative connection: ${numConnect}`)
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)
    if (numConnect > maxConnections) {
      console.log('Connection overload')
    }
  }, _SECONDs) //Monitor every 5 seconds
}

export const checkConnect = {
  countConnect,
  checkOverload
}
