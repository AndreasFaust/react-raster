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

const StyledControlCustom = styled('div')`
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 100, 255, 0.1);
`

const StyledControlInner = styled('div')`
  position: absolute;
  z-index: 10000;
  background-color: rgba(0, 100, 255, 0.1);
  ${props => props.media.map((media, index) => {
    return media`
      left: calc(${props.gutterX[index]} / 2);
      right: calc(${props.gutterX[index]} / 2);
      top: calc(${props.gutterY[index]} / 2);
      bottom: calc(${props.gutterY[index]} / 2); 
    `
  })}
`

const Inner = ({ reset, media, gutterX, gutterY, alignX, alignY, breakpoints, styleContent, controlIsVisible, children }) => {
  const styleContentNormalized = useMemo(() => normalizeProps({ prop: styleContent, breakpoints }), [styleContent, breakpoints])

  return reset
    ? (
      <StyledContentCustom
        className={`Box__content`}
        media={media}
        alignX={alignX}
        alignY={alignY}
        style={styleContentNormalized}
      >
        {controlIsVisible
          ? (
            <>
              <StyledControlCustom />
              {children}
            </>
          )
          : children
        }
      </StyledContentCustom>
    )
    : (
      <StyledInnerCustom
        className={`Box__inner`}
        gutterX={gutterX}
        gutterY={gutterY}
        alignX={alignX}
        alignY={alignY}
        media={media}
        controlIsVisible={controlIsVisible}
        style={styleContentNormalized}
      >
        {controlIsVisible
          ? (
            <>
              <StyledControlInner
                gutterX={gutterX}
                gutterY={gutterY}
                media={media}
              />
              {children}
            </>
          )
          : children
        }

      </StyledInnerCustom>
    )
}

export default Inner
