const transactionService = (transactionRepository) => {
  const addTransaction = async (transactionDto) => {
    try {
      return await transactionRepository.addTransaction(transactionDto)
    } catch (error) {
      throw new Error(error)
    }
  }

  const editTransaction = async (transactionDto) => {
    try {
      return await transactionRepository.editTransaction(transactionDto)
    } catch (error) {
      throw new Error(error)
    }
  }

  const getTransactions = async () => {
    try {
      return await transactionRepository.findAllTransaction()
    } catch (error) {
      throw new Error(error)
    }
  }

  const getTransactionById = async (id) => {
    try {
      return await transactionRepository.findTransactionById(id)
    } catch (error) {
      throw new Error(error)
    }
  }

  const deleteTransaction = async (id) => {
    try {
      return await transactionRepository.deleteTransaction(id)
    } catch (error) {
      throw new Error(error)
    }
  }

  const searchTransactionByLabel = async (label) => {
    return await transactionRepository.findAllTransactionLabelLike(label)
  }

  return {
    addTransaction,
    editTransaction,
    getTransactions,
    getTransactionById,
    deleteTransaction,
    searchTransactionByLabel,
  }
}

module.exports = transactionService
