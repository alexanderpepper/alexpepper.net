'use strict';
const iTunesService = require('../services/itunes-service')

module.exports = function (App) {
  App.all = () => iTunesService.getApps()
  App.remoteMethod('all', {
    returns: {arg: 'results', type: 'object'},
    http: {path: '/', verb: 'get'}
  })

  App.get = (id) => iTunesService.getApp(id)
  App.remoteMethod('get', {
    accepts: [
      {arg: 'id', type: 'string'}
    ],
    returns: {arg: 'results', type: 'object'},
    http: {path: '/:id', verb: 'get'}
  })
}
