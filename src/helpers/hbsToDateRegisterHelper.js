module.exports = (date) => {
  const _date = new Date(date)
  return `${_date.getDay()}/${currentMonth}/${_date.getFullYear()}`
}
