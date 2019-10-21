import React from 'react'
import normalizeProps from './normalizeProps'

function restructureWidths(breakpoints, childWidths) {
  const widthsRestructured = []
  breakpoints.forEach((_, bpIndex) => {
    const widthAtBreakpoint = []
    childWidths.forEach((width) => {
      widthAtBreakpoint.push({ width: width[bpIndex] })
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
      if (!rests[bpIndex]) {
        rests[bpIndex] = [rest]
      } else {
        rests[bpIndex] = [...rests[bpIndex], rest]
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
  // if (!children || !children.length) return []

  const childWidths = getChildWidths(children, breakpoints, colsTotal)
  const widthsGroupedByBreakpoint = restructureWidths(breakpoints, childWidths)
  console.log(widthsGroupedByBreakpoint)

  const restArrayGroupedByBreakpoint = widthsGroupedByBreakpoint.map(breakpoint => {
    if (!breakpoint.length) return breakpoint
    let totalWidth = 0
    let elementStack = []
    for (let i = 0; i < breakpoint.length + 1; i++) {
      let current = breakpoint[i]
      if (current) {
        if (totalWidth + current.width > colsTotal) {
          applyRestToStack(elementStack, colsTotal - totalWidth)
          elementStack = [current]
          totalWidth = 0
          totalWidth += current.width
          continue
        }
        if (totalWidth + current.width === colsTotal) {
          applyRestToStack(elementStack, 0)
          elementStack = []
          totalWidth = 0
          continue
        }
        elementStack.push(current)
        totalWidth += current.width
      } else {
        if (totalWidth) {
          applyRestToStack(elementStack, colsTotal - totalWidth)
        }
      }
    }
    return breakpoint
  })
  return buildRestArray(restArrayGroupedByBreakpoint, alignX)
}