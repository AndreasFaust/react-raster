function restructureWidths(breakpoints, childWidths) {
  const widthsRestructured = []
  breakpoints.forEach((_, bpIndex) => {
    const widthAtBreakpoint = []
    childWidths.forEach(({ id, width }) => {
      widthAtBreakpoint.push({ id, width: width[bpIndex] })
    })
    widthsRestructured.push(widthAtBreakpoint)
  })
  return widthsRestructured
}

function buildRestObject(restArray, alignX) {
  const rests = {}
  restArray.forEach((breakpoint, index) => {
    const alignmentX = alignX[index]

    breakpoint.forEach(element => {
      let rest = element.rest || 0
      switch (alignmentX) {
        case 'left':
          rest = 0
          break
        case 'center':
          rest /= 2
          break
        default:
      }
      if (!rests[element.id]) {
        rests[element.id] = [rest]
      } else {
        rests[element.id] = [...rests[element.id], rest]
      }
    })
  })
  return rests
}

function applyRestToStack(elementStack, rest) {
  elementStack.forEach(stack => {
    stack.rest = rest
  })
}

export default (breakpoints, childWidths, colspan, alignX) => {
  const widthsRestructured = restructureWidths(breakpoints, childWidths)

  const restArray = widthsRestructured.map(breakpoint => {
    if (!breakpoint.length) return breakpoint
    let totalWidth = 0
    let elementStack = []
    for (let i = 0; i < breakpoint.length + 1; i++) {
      let current = breakpoint[i]
      // if (!totalWidth) elementStack = []
      if (current) {
        if (totalWidth + current.width > colspan) {
          applyRestToStack(elementStack, colspan - totalWidth)
          elementStack = [current]
          totalWidth = 0
          totalWidth += current.width
          continue
        }
        if (totalWidth + current.width === colspan) {
          applyRestToStack(elementStack, 0)
          elementStack = []
          totalWidth = 0
          continue
        }
        elementStack.push(current)
        totalWidth += current.width
      } else {
        if (totalWidth) {
          applyRestToStack(elementStack, colspan - totalWidth)
        }
      }
    }
    return breakpoint
  })

  console.log(restArray)
  return buildRestObject(restArray, alignX)
}