const currencyHelper = (value) => {
  const BRL = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }
  const USD = () => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }
  return {
    BRL,
    USD,
  }
}

module.exports = currencyHelper
