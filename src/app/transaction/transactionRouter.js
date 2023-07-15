const transactionRouter = require('express').Router()
const transactionService = require('./transactionService')
const transactionController = require('./transactionController')
const transactionRepository = require('./transactionRepository')

const controller = transactionController(
  transactionService(transactionRepository)
)

transactionRouter.get('/', controller.indexView)
transactionRouter.get('/create', controller.createView)
transactionRouter.get('/delete/:id', controller.deleteAndRedirect)
transactionRouter.get('/edit/:id', controller.editView)
transactionRouter.post('/create', controller.addAndRedirect)
transactionRouter.post('/edit', controller.updateAndRedirect)

module.exports = transactionRouter
