const transactionDto = require('./transactionDto')

module.exports = (transactionService) => {
  const indexView = async (req, res, next) => {
    try {
      const allTransactions = []
      const transactions = await transactionService.getTransactions()

      for (let itemTransaction of transactions) {
        allTransactions.push(transactionDto(itemTransaction))
      }

      res.render('transaction/index', {
        title: 'Minhas Transações - My Budget',
        model: allTransactions,
      })
    } catch (error) {
      next(error)
    }
  }

  const createView = async (req, res, next) => {
    try {
      res.render('transaction/create', {
        title: 'Adicionar Transação - My Budget',
      })
    } catch (error) {
      next(error)
    }
  }

  const addAndRedirect = async (req, res, next) => {
    try {
      const dto = transactionDto(req.body)
      await transactionService.addTransaction(dto)

      res.redirect('/transaction?source=create&submited=true')
    } catch (error) {
      next(error)
    }
  }

  const deleteAndRedirect = async (req, res, next) => {
    try {
      await transactionService.deleteTransaction(req.params.id)
      res.redirect('/transaction?source=delete&submited=true')
    } catch (error) {
      next(error)
    }
  }

  const editView = async (req, res, next) => {
    try {
      console.log(req.params)
      const transaction = await transactionService.getTransactionById(
        req.params.id
      )
      const model = transactionDto(transaction)
      res.render('transaction/edit', {
        title: `Edit Transaction ID:${model.id}`,
        model: model,
      })
    } catch (error) {
      next(error)
    }
  }
  const updateAndRedirect = async (req, res, next) => {
    try {
      await transactionService.editTransaction(transactionDto(req.body))
      res.redirect('/transaction?source=edit&submited=true')
    } catch (error) {
      next(error)
    }
  }

  return {
    indexView,
    createView,
    addAndRedirect,
    deleteAndRedirect,
    editView,
    updateAndRedirect,
  }
}
