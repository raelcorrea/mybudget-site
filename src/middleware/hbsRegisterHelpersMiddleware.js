const hbsIsEqualRegisterHelper = require('../helpers/hbsIsEqualRegisterHelper')
const hbsIsNotEmptyRegisterHelper = require('../helpers/hbsIsNotEmptyRegisterHelper')
const hbsToCurrencyBrlRegisterHelper = require('../helpers/hbsToCurrencyBrlRegisterHelper')
const hbsToDateRegisterHelper = require('../helpers/hbsToDateRegisterHelper')
const hbsIsLowerThenZero = require('../helpers/hbsIsLowerThenZero')
const hbsToPositiveNumberFormatPTBRRegisterHelper = require('../helpers/hbsToPositiveNumberFormatPTBRRegisterHelper')

const hbsRegisterHelpersMiddleware = (hbs) => {
  hbs.registerHelper('isEqual', hbsIsEqualRegisterHelper)
  hbs.registerHelper('isNotEmpty', hbsIsNotEmptyRegisterHelper)
  hbs.registerHelper('toDate', hbsToDateRegisterHelper)
  hbs.registerHelper('toCurrencyBrl', hbsToCurrencyBrlRegisterHelper)
  hbs.registerHelper(
    'toPositiveNumberFormat',
    hbsToPositiveNumberFormatPTBRRegisterHelper
  )
  hbs.registerHelper('isLowerThenZero', hbsIsLowerThenZero)
}

module.exports = hbsRegisterHelpersMiddleware
