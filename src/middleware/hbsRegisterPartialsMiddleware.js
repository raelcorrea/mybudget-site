const path = require('path')

module.exports = (hbs) => {
  hbs.registerPartials(path.join(__dirname, '../views/partials'))
}
