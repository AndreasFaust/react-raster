import React from 'react'
import styled from 'styled-components'

const InnerTag = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

const StyledInner = styled(InnerTag)`  
  position: relative;
  width: 100%;
  
  ${props => props.media.map((media, index) => {
    return props.hasChildBoxes
      ? media`
        display: flex;
        align-items: stretch;
        justify-content: stretch;
      `
      : media`
        ${(props.alignX[index] || props.alignY[index]) && `
          display: flex;
        `}
        ${props.alignX[index] && `justify-content: ${props.alignX[index]};`}
        ${props.alignY[index] && `align-items: ${props.alignY[index]};`}
      `
  })}
  ${props => props.media.map((media, index) => {
    return media`
      ${props.style && props.style[index]}   
    `
  })}
`

const Inner = ({
  media,
  className,
  alignX,
  alignY,
  style,
  children,
  hasChildBoxes,
  cssMode
}) => {
  // console.log(cssMode)
  if (cssMode === 'grid') return children
  return (
    <StyledInner
      className={className}
      media={media}
      alignX={alignX}
      alignY={alignY}
      style={style}
      hasChildBoxes={hasChildBoxes}
    >
      {children}
    </StyledInner>
  )
}

export default Inner
