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
}
