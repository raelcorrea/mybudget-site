const transactionRouter = require('../app/transaction/transactionRouter')

const routerMiddleWare = (app) => {
  app.use('/', transactionRouter)
}

module.exports = routerMiddleWare
