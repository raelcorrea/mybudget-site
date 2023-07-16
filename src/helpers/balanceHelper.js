const currency = require('../utils/currency')

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
    incomes: currency(incomes).BRL(),
    expenses: currency(expenses).BRL(),
    total: currency(total).BRL(),
  }
}
