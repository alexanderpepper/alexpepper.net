const controller = require('../controllers/app.controller')

module.exports = app => {
  app.get('/api/supportg', controller.get)
  app.get('/api/apps', controller.all)
}
