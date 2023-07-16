const transactionRouter = require('express').Router()
const transactionService = require('./transactionService')
const transactionController = require('./transactionController')
const transactionRepository = require('./transactionRepository')

const controller = transactionController(
  transactionService(transactionRepository)
)

transactionRouter.get('/delete/:id', controller.deleteAndRedirect)
transactionRouter.post('/create', controller.addAndRedirect)
transactionRouter.post('/edit', controller.updateAndRedirect)

module.exports = transactionRouter
