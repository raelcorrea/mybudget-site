const transactionRouter = require('../app/transaction/transactionRouter')
module.exports = (app) => {
  app.use('/', transactionRouter)
}
