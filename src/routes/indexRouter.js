const transactionService = require('../app/transaction/transactionService')
const transactionRepository = require('../app/transaction/transactionRepository')
const balanceHelper = require('../helpers/balanceHelper')

const indexRouter = require('express').Router()
indexRouter.get('/', async function (req, res, next) {
  res.render('home', {
    title: 'Express',
    balance: await balanceHelper(transactionService(transactionRepository)),
  })
})

module.exports = indexRouter
