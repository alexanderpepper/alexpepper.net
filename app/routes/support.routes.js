const controller = require('../controllers/app.controller')

module.exports = app => {
  app.get('/api/support', controller.get)
  app.get('/api/apps', controller.all)
}
