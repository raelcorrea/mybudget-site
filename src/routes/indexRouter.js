const transactionService = require('../app/transaction/transactionService')
const transactionRepository = require('../app/transaction/transactionRepository')
const balancePartial = require('../partials/balancePartial')

const indexRouter = require('express').Router()
indexRouter.get('/', async function (req, res, next) {
  res.render('home', {
    title: 'Express',
    balancePartial: await balancePartial(
      transactionService(transactionRepository)
    ),
  })
})

module.exports = indexRouter
