const currency = require('../utils/currency')

module.exports = (value) => {
    return currency(value).BRL()
  }