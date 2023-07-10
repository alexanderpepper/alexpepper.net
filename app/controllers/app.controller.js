const iTunesService = require('../services/app.service')

exports.get = async (req, res) => {
  const result = await iTunesService.get(req.params.id)
  if (result) {
    return res.json(result)
  } else {
    res.badRequest()
  }
}

exports.all = async (req, res) => {
  return res.json(await iTunesService.all())
}
