const currentDateValue = function () {
  const date = new Date()

  const currentDate = () => {
    const localeDateStr = date.toLocaleDateString()
    const d = localeDateStr.split('/')
    return `${d[2]}-${d[1]}-${d[0]}`
  }

  const selector = document.querySelector('input[type="date"]')

  if (selector) {
    selector.value = currentDate()
  }
}

currentDateValue()

const addTransactionActionButton = () => {
  const button = document.getElementById('addTransactionActionButton')
  const modalRegisterTransaction = modal('modalRegisterTransaction')
  button.addEventListener('click', () => {
    modalRegisterTransaction.toggle()
  })

  const closeButton = modalRegisterTransaction.block.querySelectorAll(
    '.body > .title > button'
  )[0]
  if (closeModal) {
    closeButton.addEventListener('click', () => {
      modalRegisterTransaction.toggle()
    })
  }
}

addTransactionActionButton()

const clearTransctionTypeChecked = () => {
  const box = document.querySelectorAll('.radioLabel')
  box.forEach((itemBox) => {
    itemBox.classList.remove('checked')
  })
}
const transactionTypeChecked = () => {
  const radioBox = document.querySelectorAll('.radioLabel input[type="radio"]')

  radioBox.forEach((radio) => {
    radio.addEventListener('click', () => {
      clearTransctionTypeChecked()
      radio.parentNode.classList.add('checked')
    })
  })
}

transactionTypeChecked()
