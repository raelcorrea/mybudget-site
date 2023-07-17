const modal = (id) => {
  const block = document.getElementById(id)

  if (block) {
    const toggle = () => {
      if (block) {
        block.classList.toggle('open')
      }
    }

    return {
      block,
      toggle,
    }
  }

  return undefined
}
