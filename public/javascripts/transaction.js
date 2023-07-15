const currentDateValue = function () {
  const date = new Date()

  const currentDate = () => {
    const localeDateStr = date.toLocaleDateString()
    const d = localeDateStr.split('/')
    return `${d[2]}-${d[1]}-${d[0]}`
  }

  document.querySelector('input[type="date"]').value = currentDate()
}

currentDateValue()
