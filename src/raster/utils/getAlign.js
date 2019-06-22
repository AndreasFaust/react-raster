export default (align, cssMode, hasChildBoxes) => {
  return cssMode === 'grid' && hasChildBoxes
    ? align.map(al => {
      switch (al) {
        case 'left': return 'start'
        case 'right': return 'end'
        case 'top': return 'start'
        case 'bottom': return 'end'
        default: return al
      }
    })
    : align.map(al => {
      switch (al) {
        case 'left': return 'flex-start'
        case 'right': return 'flex-end'
        case 'top': return 'flex-start'
        case 'bottom': return 'flex-end'
        default: return al
      }
    })
}
