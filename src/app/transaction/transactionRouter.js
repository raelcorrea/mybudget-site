const transactionService = require('./transactionService')
const transactionController = require('./transactionController')
const transactionRepository = require('./transactionRepository')

module.exports = (router) => {
  const controller = transactionController(
    transactionService(transactionRepository)
  )

  router.get('/', controller.indexView)
  router.get('/create', controller.createView)
  router.get('/delete/:id', controller.deleteAndRedirect)
  router.get('/edit/:id', controller.editView)
  router.post('/create', controller.addAndRedirect)
  router.post('/edit', controller.updateAndRedirect)

  return router
}
