module.exports = isProduction => {
  return (error, req, res, next) => {
    if (!isProduction) {
      console.log(error.stack)
    }
    res.serverError()
  }
}
