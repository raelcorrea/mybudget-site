const currentDate = function () {
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

module.exports = currentDate
