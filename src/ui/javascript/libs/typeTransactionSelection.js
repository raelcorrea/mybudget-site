const clearTypeTransactionSelection = () => {
  const box = document.querySelectorAll('.radioLabel')
  box.forEach((itemBox) => {
    itemBox.classList.remove('checked')
  })
}
const typeTransactionSelection = () => {
  const radioBox = document.querySelectorAll('.radioLabel input[type="radio"]')

  radioBox.forEach((radio) => {
    radio.addEventListener('click', () => {
      clearTypeTransactionSelection()
      radio.parentNode.classList.add('checked')
    })
  })
}

module.exports = typeTransactionSelection
