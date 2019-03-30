import React from 'react'

export default (children, hasChildBoxesProp) => {
  if (typeof hasChildBoxesProp === 'boolean') return hasChildBoxesProp
  let reset = false
  React.Children.forEach(children, (child) => {
    if (child && child.type && child.type.displayName === 'Box') {
      reset = true
    }
  })
  return reset
}
