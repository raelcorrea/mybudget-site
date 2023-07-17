const transactionRouter = require('express').Router()
const transactionController = require('./transactionController')
const transactionService = require('./transactionService')
const transactionRepository = require('./transactionRepository')
const transactionModel = require('./transactionModel')

const controller = transactionController(
  transactionService(transactionRepository(transactionModel))
)

transactionRouter.get('/delete/:id', controller.deleteAndRedirect)
transactionRouter.post('/create', controller.addAndRedirect)
transactionRouter.post('/edit', controller.updateAndRedirect)
transactionRouter.get('/:q', controller.homeView)
transactionRouter.get('/', controller.homeView)
transactionRouter.get('/edit/:id', controller.editView)

module.exports = transactionRouter
