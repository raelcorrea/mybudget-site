const path = require('path')

const hbsRegisterPartialsMiddleware = (hbs) => {
  hbs.registerPartials(path.join(__dirname, '../views/partials'))
}

module.exports = hbsRegisterPartialsMiddleware
