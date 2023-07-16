module.exports = (date) => {
  const _date = new Date(date)
  const currentMonth = _date.getMonth() + 1
  console.log(currentMonth)
  return `${_date.getDay()}/${currentMonth}/${_date.getFullYear()}`
}
