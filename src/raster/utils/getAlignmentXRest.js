import React from 'react'
import normalizeProps from './normalizeProps'

function groupElementsByBreakpoint(breakpoints, elements) {
  const elementsRestructured = []
  breakpoints.forEach((_, bpIndex) => {
    const elementAtBreakpoint = []
    elements.forEach(element => {
      elementAtBreakpoint.push({
        cols: element.cols[bpIndex],
        left: element.left[bpIndex],
        right: element.right[bpIndex],
        total: element.total[bpIndex],
      })
    })
    elementsRestructured.push(elementAtBreakpoint)
  })
  return elementsRestructured
}

function regroupRestByElement(restArrayGroupedByBreakpoint) {
  const rests = []
  restArrayGroupedByBreakpoint.forEach((breakpoint) => {
    breakpoint.forEach((rest, bpIndex) => {
      if (!rests[bpIndex]) {
        rests[bpIndex] = [rest]
      } else {
        rests[bpIndex] = [...rests[bpIndex], rest]
      }
    })
  })
  return rests
}

function getElements(children, breakpoints, colsTotal) {
  function sumup(a, b, c) {
    return a.map((el, i) => el + b[i] + c[i])
  }
  return React.Children.map(children, ({ props }) => {
    const left = normalizeProps({ prop: props.left, breakpoints })
    const right = normalizeProps({ prop: props.right, breakpoints })
    const cols = normalizeProps({ prop: props.cols, defaultProp: colsTotal, breakpoints })
    const total = sumup(cols, left, right)
    return { left, right, cols, total }
  })
}

function getRest({ stack, rest, alignX }) {
  return stack.map(() => {
    switch (alignX) {
      case 'start':
        return 0
      case 'center':
        return rest / 2
      default:
        return rest
    }
  })
}

export default ({ children, breakpoints, colsTotal, alignX }) => {
  if (!children) return null

  const elements = getElements(children, breakpoints, colsTotal)
  const elementsGroupedByBreakpoint = groupElementsByBreakpoint(breakpoints, elements)

  const restArrayGroupedByBreakpoint = elementsGroupedByBreakpoint.map((breakpoint, index) => {
    if (!breakpoint.length) return breakpoint
    let totalWidth = 0
    let newBreakpoint = []
    let elementStack = []
    for (let i = 0; i < breakpoint.length + 1; i++) {
      let current = breakpoint[i]
      if (current) {
        if (totalWidth + current.total > colsTotal[index]) {
          newBreakpoint = [...newBreakpoint, ...getRest({
            stack: elementStack,
            rest: colsTotal[index] - totalWidth,
            alignX: alignX[index]
          })]
          elementStack = [current]
          totalWidth = 0
          totalWidth += current.total

        } else if (totalWidth + current.total === colsTotal[index]) {
          elementStack.push(current)
          newBreakpoint = [...newBreakpoint, ...elementStack.map(() => 0)]
          elementStack = []
          totalWidth = 0

        } else {
          elementStack.push(current)
          totalWidth += current.total
        }
      } else {
        if (totalWidth) {
          newBreakpoint = [...newBreakpoint, ...getRest({
            stack: elementStack,
            rest: colsTotal[index] - totalWidth,
            alignX: alignX[index]
          })]
        }
      }
    }
    return newBreakpoint
  })

  return regroupRestByElement(restArrayGroupedByBreakpoint)
}