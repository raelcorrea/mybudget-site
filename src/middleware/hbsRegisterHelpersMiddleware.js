const hbsIsEqualRegisterHelper = require('../helpers/hbsIsEqualRegisterHelper')
const hbsIsNotEmptyRegisterHelper = require('../helpers/hbsIsNotEmptyRegisterHelper')
const hbsToCurrencyBrlRegisterHelper = require('../helpers/hbsToCurrencyBrlRegisterHelper')
const hbsToDateRegisterHelper = require('../helpers/hbsToDateRegisterHelper')

module.exports = (hbs) => {
  hbs.registerHelper('isEqual', hbsIsEqualRegisterHelper)
  hbs.registerHelper('isNotEmpty', hbsIsNotEmptyRegisterHelper)
  hbs.registerHelper('toDate', hbsToDateRegisterHelper)
  hbs.registerHelper('toCurrencyBrl', hbsToCurrencyBrlRegisterHelper)
}
