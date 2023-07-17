const currencyHelper = require('../helpers/currencyHelper')
const hbsToCurrencyBrlRegisterHelper = (value) => {
  return currencyHelper(value).BRL()
}

module.exports = hbsToCurrencyBrlRegisterHelper
