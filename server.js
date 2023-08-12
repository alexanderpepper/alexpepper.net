const express = require('express')
const cors = require('cors')
const origin = 'http://localhost:8080'
const responders = require('./app/middleware/responders')
const errorHandler = require('./app/middleware/error-handler')
const bodyParser = require('body-parser')
const fallback = require('express-history-api-fallback')
const { exec } = require('child_process')

const PORT = process.env.PORT || 3000
const IS_PROD = process.env.NODE_ENV === 'production'
const PROTOCOL = IS_PROD ? 'https://' : 'http://'
const HOST = IS_PROD ? 'alexpepper.net' : 'localhost'

const app = express()

if (IS_PROD) {
  if (!process.env.SKIP_CLIENT) {
    console.log('Building client...')
    exec(`NODE_ENV=${process.env.NODE_ENV} npm run build`, { cwd: `${process.cwd()}/client` }, function (x, y) {
      x && console.log(x)
      y && console.log(y)
      console.log('Done building client')
    })
    // const root = './client/dist'
    // app.use(express.static(root))
    // app.use(fallback('/index.html', { root }))
  }
} else {
  app.use(cors({ origin }))
}
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept')
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(responders)

require('./app/routes/app.routes')(app)
require('./app/routes/support.routes')(app)

app.use(errorHandler(IS_PROD))

// const server = createServer()

app.listen(PORT, () => console.log(`Server listening at ${PROTOCOL}${HOST}:${PORT}`))
