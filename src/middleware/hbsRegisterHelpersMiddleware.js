const hbsIsEqualRegisterHelper = require('../helpers/hbsIsEqualRegisterHelper')
const hbsIsNotEmptyRegisterHelper = require('../helpers/hbsIsNotEmptyRegisterHelper')
const hbsToCurrencyBrlRegisterHelper = require('../helpers/hbsToCurrencyBrlRegisterHelper')
const hbsToDateRegisterHelper = require('../helpers/hbsToDateRegisterHelper')
const hbsIsLowerThenZero = require('../helpers/hbsIsLowerThenZero')
const hbsToPositiveNumberRegisterHelper = require('../helpers/hbsToPositiveNumberRegisterHelper')

const hbsRegisterHelpersMiddleware = (hbs) => {
  hbs.registerHelper('isEqual', hbsIsEqualRegisterHelper)
  hbs.registerHelper('isNotEmpty', hbsIsNotEmptyRegisterHelper)
  hbs.registerHelper('toDate', hbsToDateRegisterHelper)
  hbs.registerHelper('toCurrencyBrl', hbsToCurrencyBrlRegisterHelper)
  hbs.registerHelper('isLowerThenZero', hbsIsLowerThenZero)
  hbs.registerHelper('toPositiveNumber', hbsToPositiveNumberRegisterHelper)
}

module.exports = hbsRegisterHelpersMiddleware
