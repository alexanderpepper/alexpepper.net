const request = require('superagent')
const apps = require('../constants/apps')
const { ITUNES_URL } = require('../constants/urls')

const getAppData = async (app) => {
  const data = await request.get(ITUNES_URL(app.iTunesId)).then(res => JSON.parse(res.text))
  const iTunesData = data && data.results && data.results.length && data.results[0]
  if (iTunesData) {
    app.iTunesData = iTunesData
  }
  return app
}

exports.get = async (id) => {
  const app = apps.find(app => app.id === id)
  if (app) {
    return getAppData(app)
  }
}

exports.all = async () => {
  return Promise.all(apps.map(getAppData))
}
