module.exports = (date) => {
  console.log(date)
  const d = new Date(date).toLocaleDateString().split('/')
  return `${d[2]}-${d[1]}-${d[0]}`
}
