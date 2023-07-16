const currency = require('../utils/currency')

module.exports = (hbs) => {
  hbs.registerHelper('isEqual', function (expectedValue, value) {
    return value === expectedValue
  })

  hbs.registerHelper('isEmpty', function (value) {
    return value === undefined || value === ''
  })

  hbs.registerHelper('isNotEmpty', function (value) {
    return value !== undefined && value !== ''
  })

  hbs.registerHelper('toDateString', (date) => {
    return new Date(date).toDateString()
  })

  hbs.registerHelper('toCurrencyBrl', (value) => {
    return currency(value).BRL()
  })

  hbs.registerHelper('toArray', (value) => {
    if (value != undefined && value != '') {
      return value.split(value)
    }

    return []
  })
}
