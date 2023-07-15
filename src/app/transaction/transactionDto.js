module.exports = (props) => {
  const { id, createdAt, updatedAt, label, value, type, categories, dueDate } =
    props
  return {
    id,
    createdAt,
    updatedAt,
    label,
    value,
    type,
    categories,
    dueDate,
  }
}
