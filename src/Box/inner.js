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
  position: relative;
  display: flex;
  flex-wrap: wrap;

  ${props => props.media.map((media, index) => {
    return media`
      width: calc(100% + (${props.gutterX[index]}));
      margin-left: calc(-${props.gutterX[index]} / 2);
      margin-right: calc(-${props.gutterX[index]} / 2);
      margin-top: calc(-${props.gutterY[index]} / 2);
      margin-bottom: calc(-${props.gutterY[index]} / 2);

      align-items: ${props.alignY[index]};
      justify-content: ${props.alignX[index]};    

      ::before {
        content: '';
        display: ${props.controlIsVisible ? 'block' : 'none'};
        position: absolute;
        z-index: -1;
        left: calc(${props.gutterX[index]} / 2);
        right: calc(${props.gutterX[index]} / 2);
        top: calc(${props.gutterY[index]} / 2);
        bottom: calc(${props.gutterY[index]} / 2); 
        background: rgba(0, 100, 255, 0.1); 
      }    
    `
  })}
`

const StyledContent = styled(InnerTag)`  
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
const StyledContentCustom = styled(StyledContent)`
  ${props => props.media.map((media, index) => {
    return media`
      ${props.style[index]}   
    `
  })}
`

function getStylesContentControl (style, controlIsVisible) {
  return style.map(s => (controlIsVisible
    ? s + '\n background-color: rgba(0, 100, 255, 0.1);'
    : s
  ))
}

const Inner = ({ reset, media, gutterX, gutterY, alignX, alignY, breakpoints, styleContent, controlIsVisible, children }) => {
  const styleContentNormalized = useMemo(() => normalizeProps({ prop: styleContent, breakpoints }), [styleContent, breakpoints])
  const styleContentControl = useMemo(() => getStylesContentControl(styleContentNormalized, controlIsVisible)
    , [styleContentNormalized, controlIsVisible])

  return reset
    ? (
      <StyledContentCustom
        className={`Box__content`}
        media={media}
        alignX={alignX}
        alignY={alignY}
        style={styleContentControl}
      >
        {children}
      </StyledContentCustom>
    )
    : (
      <StyledInner
        className={`Box__inner`}
        gutterX={gutterX}
        gutterY={gutterY}
        alignX={alignX}
        alignY={alignY}
        media={media}
        controlIsVisible={controlIsVisible}
      >
        {children}
      </StyledInner>
    )
}

export default Inner
