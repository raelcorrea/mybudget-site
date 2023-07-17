const hbsIsEqualRegisterHelper = require('../helpers/hbsIsEqualRegisterHelper')
const hbsIsNotEmptyRegisterHelper = require('../helpers/hbsIsNotEmptyRegisterHelper')
const hbsToCurrencyBrlRegisterHelper = require('../helpers/hbsToCurrencyBrlRegisterHelper')
const hbsToDateSysRegisterHelper = require('../helpers/hbsToDateSysRegisterHelper')
const hbsToDateRegisterHelper = require('../helpers/hbsToDateRegisterHelper')
const hbsIsLowerThenZero = require('../helpers/hbsIsLowerThenZero')

module.exports = (hbs) => {
  hbs.registerHelper('isEqual', hbsIsEqualRegisterHelper)
  hbs.registerHelper('isNotEmpty', hbsIsNotEmptyRegisterHelper)
  hbs.registerHelper('toDate', hbsToDateRegisterHelper)
  hbs.registerHelper('toDateSys', hbsToDateSysRegisterHelper)
  hbs.registerHelper('toCurrencyBrl', hbsToCurrencyBrlRegisterHelper)
  hbs.registerHelper('isLowerThenZero', hbsIsLowerThenZero)
}
