import React, { useMemo } from 'react'
import styled from 'styled-components'
import normalizeProps from '../utils/normalizeProps'

const InnerTag = ({ className, children }) => (
  <div
    className={className}
  >
    {children}
  </div>
)

const StyledInner = styled(InnerTag)`  
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  ${props => props.media.map((media, index) => {
    return media`
      align-items: ${props.alignY[index]};
      justify-content: ${props.alignX[index]};    
    `
  })}
`
const StyledInnerCustom = styled(StyledInner)`
  ${props => props.media.map((media, index) => {
    return media`
      ${props.style[index]}   
    `
  })}
`

const StyledInnerControl = styled('div')`
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 100, 255, 0.1);
`

const Inner = ({ reset, media, gutterX, gutterY, alignX, alignY, breakpoints, styleContent, controlIsVisible, children }) => {
  const styleContentNormalized = useMemo(() => normalizeProps({ prop: styleContent, breakpoints }), [styleContent, breakpoints])

  return (
    <StyledInnerCustom
      className={`Box__content`}
      media={media}
      alignX={alignX}
      alignY={alignY}
      style={styleContentNormalized}
    >
      {controlIsVisible
        ? (
            <>
              <StyledInnerControl />
              {children}
            </>
        )
        : children
      }
    </StyledInnerCustom>
  )
}

export default Inner
