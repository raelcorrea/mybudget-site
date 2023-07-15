module.exports = (hbs) => {
  hbs.registerHelper('isEqual', function (expectedValue, value) {
    return value === expectedValue
  })
}
