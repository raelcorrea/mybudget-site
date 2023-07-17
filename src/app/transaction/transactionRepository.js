const { Op } = require('sequelize')

// Transaction Repository
const transactionRepository = (transactionModel) => {
  const addTransaction = async (transactionDto) => {
    return await transactionModel.create(transactionDto)
  }

  const editTransaction = async (transactionDto) => {
    return await transactionModel.update(transactionDto, {
      where: { id: transactionDto.id },
    })
  }

  const deleteTransaction = async (id) => {
    return await transactionModel.destroy({ where: { id: id } })
  }

  const findAllTransaction = async () => {
    return await transactionModel.findAll()
  }

  const findTransactionById = async (id) => {
    return await transactionModel.findOne({ where: { id } })
  }
  const findAllTransactionLabelLike = async (label) => {
    return await transactionModel.findAll({
      where: {
        label: {
          [Op.like]: `%${label}%`,
        },
      },
    })
  }
  return {
    addTransaction,
    editTransaction,
    deleteTransaction,
    findAllTransaction,
    findTransactionById,
    findAllTransactionLabelLike,
  }
}

module.exports = transactionRepository
