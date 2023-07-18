const modal = require('./modal')

const editTransactionButton = () => {
  const modalEditTransaction = modal('modalEditTransaction')

  if (modalEditTransaction) {
    modalEditTransaction.toggle()
    const closeButton = modalEditTransaction.block.querySelectorAll(
      '.body > .title > button'
    )[0]
    closeButton.addEventListener('click', () => {
      modalEditTransaction.toggle()
    })
  }
}

module.exports = editTransactionButton
