const balancePartial = require('../../partials/balancePartial')
const transactionDto = require('./transactionDto')

const transactionTransformerDto = (reqBody) => {
  const { id, label, value, type, categories, dueDate, createdAt, updatedAt } =
    transactionDto(reqBody)

  let transformedValue = value
  if (type === 'Despesa') {
    transformedValue = value * -1
  }

  return {
    id,
    label,
    value: transformedValue,
    type,
    categories,
    dueDate,
    createdAt,
    updatedAt,
  }
}

const transactionController = (transactionService) => {
  const deleteAndRedirect = async (req, res, next) => {
    try {
      await transactionService.deleteTransaction(req.params.id)
      res.redirect('/?source=delete&submited=true')
    } catch (error) {
      next(error)
    }
  }

  const addAndEditRedirect = async (req, res, next) => {
    try {
      const dto = transactionTransformerDto(req.body)

      if (dto.id !== undefined && dto.id !== '') {
        await transactionService.editTransaction(dto)
        res.redirect('/?source=edit&submited=true')
      } else {
        await transactionService.addTransaction(dto)
        res.redirect('/?source=create&submited=true')
      }
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
    deleteAndRedirect,
    addAndEditRedirect,
    homeView,
    editView,
  }
}

module.exports = transactionController
