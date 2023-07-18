const hbsToPositiveNumberFormatPTBRRegisterHelper = (number) => {
  const toPositiveNumber = (num) => {
    let _num = num
    if (number < 0) {
      _num = num * -1
    }
    return _num
  }

  let positibeNumberFormated = toPositiveNumber(number)

  const numberFormated = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(positibeNumberFormated)

  if (numberFormated === 'NaN') {
    return number
  }

  return numberFormated
}

module.exports = hbsToPositiveNumberFormatPTBRRegisterHelper
