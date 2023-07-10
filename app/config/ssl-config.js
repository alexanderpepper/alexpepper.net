const path = require('path')
const fs = require('fs')

const getSslFile = (filename) => process.env.SSL_CERTIFICATES_PATH
  ? fs.readFileSync(path.join(`${process.env.SSL_CERTIFICATES_PATH}/${filename}`)).toString()
  : ''

module.exports = {
  privateKey: getSslFile('privkey.pem'),
  certificate: getSslFile('cert.pem'),
  chain: getSslFile('chain.pem'),
  fullchain: getSslFile('fullchain.pem')
}
