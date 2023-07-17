const currencyHelper = require('../helpers/currencyHelper')

module.exports = async (transactionService) => {
  const transactions = await transactionService.getTransactions()
  let incomes = 0
  let expenses = 0

  transactions.forEach((t) => {
    if (t.type == 'Receita') {
      incomes = incomes + t.value
    }
    if (t.type == 'Despesa') {
      expenses = expenses + t.value
    }
  })

  const total = incomes - expenses

  return {
    incomes: currencyHelper(incomes).BRL(),
    expenses: currencyHelper(expenses).BRL(),
    total: currencyHelper(total).BRL(),
  }
}
