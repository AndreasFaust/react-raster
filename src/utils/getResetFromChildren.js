import React from 'react'

export default (children, resetProps) => {
  if (typeof resetProps === 'boolean') return resetProps
  let reset = false
  React.Children.forEach(children, (child) => {
    if (child && child.type && child.type.displayName === 'Box') {
      reset = true
    }
  })
  return reset
}
