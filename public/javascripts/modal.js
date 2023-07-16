const modal = (id) => {
  const block = document.getElementById(id)

  const toggle = () => {
    block.classList.toggle('open')
  }

  return {
    block,
    toggle,
  }
}
