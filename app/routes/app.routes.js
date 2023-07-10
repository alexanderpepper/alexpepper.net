const controller = require('../controllers/app.controller')

module.exports = app => {
  app.get('/api/apps/:id', controller.get)
  app.get('/api/apps', controller.all)
}
