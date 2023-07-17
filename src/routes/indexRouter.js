const transactionService = require('../app/transaction/transactionService')
const transactionRepository = require('../app/transaction/transactionRepository')
const balancePartial = require('../partials/balancePartial')
const transactionDto = require('../app/transaction/transactionDto')
const transactionController = require('../app/transaction/transactionController')

const indexRouter = require('express').Router()
const controller = transactionController(
  transactionService(transactionRepository)
)
indexRouter.get('/:q', controller.homeView)
indexRouter.get('/', controller.homeView)
indexRouter.get('/edit/:id', controller.editView)

module.exports = indexRouter
