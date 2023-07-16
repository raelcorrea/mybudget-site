const transactionService = require('../app/transaction/transactionService')
const transactionRepository = require('../app/transaction/transactionRepository')
const balancePartial = require('../partials/balancePartial')
const transactionDto = require('../app/transaction/transactionDto')

const indexRouter = require('express').Router()
indexRouter.get('/', async function (req, res, next) {
  const allTransactions = []
  const _transactionService = transactionService(transactionRepository)
  const transactions = await _transactionService.getTransactions()

  for (let itemTransaction of transactions) {
    allTransactions.push(transactionDto(itemTransaction))
  }

  res.render('home', {
    title: 'My Budget',
    transactions: allTransactions,
    balancePartial: await balancePartial(_transactionService),
  })
})

module.exports = indexRouter
