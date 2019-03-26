export default (align) => {
  return align.map(al => {
    switch (al) {
      case 'left': return 'flex-start'
      case 'right': return 'flex-end'
      case 'top': return 'flex-start'
      case 'bottom': return 'flex-end'
      default: return al
    }
  })
}
