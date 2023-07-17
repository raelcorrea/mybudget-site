const balancePartial = require('../../partials/balancePartial')
const transactionDto = require('./transactionDto')

module.exports = (transactionService) => {
  const addAndRedirect = async (req, res, next) => {
    try {
      const dto = transactionDto(req.body)

      if (dto.type == 'Despesa') {
        dto.value = dto.value * -1
      }

      await transactionService.addTransaction(dto)

      res.redirect('/?source=create&submited=true')
    } catch (error) {
      next(error)
    }
  }

  const deleteAndRedirect = async (req, res, next) => {
    try {
      await transactionService.deleteTransaction(req.params.id)
      res.redirect('/?source=delete&submited=true')
    } catch (error) {
      next(error)
    }
  }

  const updateAndRedirect = async (req, res, next) => {
    try {
      await transactionService.editTransaction(transactionDto(req.body))
      res.redirect('/?source=edit&submited=true')
    } catch (error) {
      next(error)
    }
  }

  const allTransactions = async () => {
    const allTransactions = []
    const transactions = await transactionService.getTransactions()

    for (let itemTransaction of transactions) {
      allTransactions.push(transactionDto(itemTransaction))
    }

    return allTransactions
  }

  const homeView = async (req, res, next) => {
    console.log(req.params, req.query.q)
    let _allTransactions = await allTransactions()
    const { q } = req.query
    if (q) {
      const searchResult = await transactionService.searchTransactionByLabel(q)

      _allTransactions = searchResult
    }
    res.render('home', {
      title: 'My Budget',
      transactions: _allTransactions.reverse(),
      balancePartial: await balancePartial(transactionService),
    })
  }

  const editView = async (req, res, next) => {
    const _allTransactions = await allTransactions()
    const transaction = await transactionService.getTransactionById(
      req.params.id
    )
    if (!transaction) {
      return res.redirect('/?source=edit&status=404')
    }
    res.render('edit', {
      title: 'My Budget',
      transactions: _allTransactions.reverse(),
      balancePartial: await balancePartial(transactionService),
      model: transaction,
    })
  }

  return {
    addAndRedirect,
    deleteAndRedirect,
    updateAndRedirect,
    homeView,
    editView,
  }
}
