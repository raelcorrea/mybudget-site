const modal = require('./modal')

const addTransactionButton = () => {
  const button = document.getElementById('addTransactionActionButton')
  const modalRegisterTransaction = modal('modalRegisterTransaction')
  if (modalRegisterTransaction) {
    button.addEventListener('click', () => {
      modalRegisterTransaction.toggle()
    })

    if (modalRegisterTransaction) {
      const closeButton = modalRegisterTransaction.block.querySelectorAll(
        '.body > .title > button'
      )[0]
      if (closeModal) {
        closeButton.addEventListener('click', () => {
          modalRegisterTransaction.toggle()
        })
      }
    }
  }
}

module.exports = addTransactionButton
