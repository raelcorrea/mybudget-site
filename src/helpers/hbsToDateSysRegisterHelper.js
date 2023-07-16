module.exports = (date) => {
  const d = new Date(date).toLocaleDateString().split('/')
  console.log(d)
  return `${d[2]}-${d[1]}-${d[0]}`
}
