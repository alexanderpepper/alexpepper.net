const path = require('path')
const fs = require('fs')
const isProd = process.env.NODE_ENV === 'production'

exports.privateKey = isProd ? fs.readFileSync(path.join('/etc/letsencrypt/live/alexpepper.us/privkey.pem')).toString() : ''
exports.certificate = isProd ? fs.readFileSync(path.join('/etc/letsencrypt/live/alexpepper.us/cert.pem')).toString() : ''
exports.chain = isProd ? fs.readFileSync(path.join('/etc/letsencrypt/live/alexpepper.us/chain.pem')).toString() : ''
exports.fullchain = isProd ? fs.readFileSync(path.join('/etc/letsencrypt/live/alexpepper.us/fullchain.pem')).toString() : ''
