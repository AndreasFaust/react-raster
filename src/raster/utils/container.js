import React from 'react'

const Container = React.forwardRef(({
  className,
  children,
  attrs = {},
  tag = 'div'
}, ref) => {
  return React.createElement(
    tag,
    { ...attrs, className, ref },
    tag !== 'img' ? children : undefined
  )
})

export default Container
