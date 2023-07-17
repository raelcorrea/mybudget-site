module.exports = (date) => {
  const newDateArr = date ? date.split('-') : []
  if (newDateArr.length >= 0) {
    return `${newDateArr[2]}/${newDateArr[1]}/${newDateArr[0]}`
  }
  return date
}
