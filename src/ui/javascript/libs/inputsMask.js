require('jquery-mask-plugin')
const inputsMask = ($) => {
  $('.currencyMask').mask('#.##0,00', { reverse: true })
}

module.exports = inputsMask
