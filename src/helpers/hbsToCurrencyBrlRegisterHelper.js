const currencyHelper = require('../helpers/currencyHelper')

module.exports = (value) => {
  return currencyHelper(value).BRL()
}
