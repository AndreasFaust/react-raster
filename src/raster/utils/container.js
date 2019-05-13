import React from 'react'

const Container = ({
  className,
  children,
  tag = 'div'
}) => {
  return React.createElement(
    tag,
    { className },
    children
  )
}

export default Container
