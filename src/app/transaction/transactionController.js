const balancePartial = require('../../partials/balancePartial')
const transactionDto = require('./transactionDto')

module.exports = (transactionService) => {
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

  const updateAndRedirect = async (req, res, next) => {
    try {
      await transactionService.editTransaction(transactionDto(req.body))
      res.redirect('/transaction?source=edit&submited=true')
    } catch (error) {
      next(error)
    }
  }

  return {
    addAndRedirect,
    deleteAndRedirect,
    updateAndRedirect,
  }
}
