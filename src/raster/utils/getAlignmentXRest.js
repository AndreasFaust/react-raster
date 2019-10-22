import React from 'react'
import normalizeProps from './normalizeProps'

function restructureWidths(breakpoints, childWidths) {
  const widthsRestructured = []
  breakpoints.forEach((_, bpIndex) => {
    const widthAtBreakpoint = []
    childWidths.forEach((width) => {
      widthAtBreakpoint.push(width[bpIndex])
    })
    widthsRestructured.push(widthAtBreakpoint)
  })
  return widthsRestructured
}

function buildRestArray(restArrayGroupedByBreakpoint, alignX) {
  const rests = []
  restArrayGroupedByBreakpoint.forEach((breakpoint, index) => {
    const alignmentX = alignX[index]

    breakpoint.forEach((element, bpIndex) => {
      let rest = element || 0
      switch (alignmentX) {
        case 'left':
          rest = 0
          break
        case 'center':
          rest /= 2
          break
        default:
      }
      if (!rests[bpIndex]) {
        rests[bpIndex] = [rest]
      } else {
        rests[bpIndex] = [...rests[bpIndex], rest]
      }
    })
  })
  return rests
}

function sumup(a, b, c) {
  return a.map((el, i) => el + b[i] + c[i])
}

function getChildWidths(children, breakpoints, colsTotal) {
  const childWidths = []
  React.Children.forEach(children, ({ props }) => {
    const left = normalizeProps({ prop: props.left, breakpoints })
    const right = normalizeProps({ prop: props.right, breakpoints })
    const cols = normalizeProps({ prop: props.cols, defaultProp: colsTotal, breakpoints })
    childWidths.push(sumup(cols, left, right))
  })
  return childWidths
}

export default ({ children, breakpoints, colsTotal, alignX }) => {
  if (!children) return null

  const childWidths = getChildWidths(children, breakpoints, colsTotal)
  const widthsGroupedByBreakpoint = restructureWidths(breakpoints, childWidths)

  const restArrayGroupedByBreakpoint = widthsGroupedByBreakpoint.map((breakpoint, index) => {
    if (!breakpoint.length) return breakpoint
    let totalWidth = 0
    let newBreakpoint = []
    let elementStack = []
    for (let i = 0; i < breakpoint.length + 1; i++) {
      let current = breakpoint[i]
      if (current) {
        if (totalWidth + current > colsTotal[index]) {
          newBreakpoint = [...newBreakpoint, ...elementStack.map(() => colsTotal[index] - totalWidth)]
          elementStack = [current]
          totalWidth = 0
          totalWidth += current
          continue
        }
        if (totalWidth + current === colsTotal[index]) {
          newBreakpoint = [...newBreakpoint, ...elementStack.map(() => 0)]
          elementStack = []
          totalWidth = 0
          continue
        }
        elementStack.push(current)
        totalWidth += current
      } else {
        if (totalWidth) {
          newBreakpoint = [...newBreakpoint, ...elementStack.map(() => colsTotal[index] - totalWidth)]
        }
      }
    }
    return newBreakpoint
  })

  return buildRestArray(restArrayGroupedByBreakpoint, alignX)
}