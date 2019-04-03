'use strict'
const exec = require('child_process').exec
const express = require('express')
module.exports = function (app) {
  if (!process.env.SKIP_CLIENT) {
    console.log('Building client...')
    exec(`NODE_ENV=${process.env.NODE_ENV} npm run build`, {cwd: `${process.cwd()}/client`}, function (x, y) {
      console.log(x)
      console.log(y)
      console.log('Done building client')
    })
  }
  app.use('/checklist', express.static('../app-checklist/dist'))
  app.use('/tao', express.static('../tao-web/dist'))
}
