module.exports = (req, res, next) => {
  const responder = (status, defaultMessages) =>
    (messages, data = undefined) =>
      res.status(status).send({
        ...data,
        status,
        messages: messages || defaultMessages
      })

  res.success = responder(200, ['Success'])
  res.badRequest = responder(400, ['Bad Request'])
  res.unauthorized = responder(401, ['Unauthorized'])
  res.forbidden = responder(403, ['Forbidden'])
  res.serverError = responder(500, ['Something broke'])

  next()
}
