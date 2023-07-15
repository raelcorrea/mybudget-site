const transactionRouter = require('../app/transaction/transactionRouter')
const indexRouter = require('../routes/indexRouter')
module.exports = (app) => {
  app.use('/transaction', transactionRouter)
  app.use('/', indexRouter)
}
