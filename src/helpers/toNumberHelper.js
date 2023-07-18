const toNumberHelper = (number) => {
  let valueNumber = 0

  if (number) {
    valueNumber = String(number).replace(/\./, '').replace(',', '.')
  }

  return Number(valueNumber)
}

module.exports = toNumberHelper
