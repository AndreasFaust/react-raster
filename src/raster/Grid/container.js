import React from 'react'
import styled from 'styled-components'

import Container from '../utils/container'

const controlStyles = `
  width: 100%;
  z-index: 10000;
  left: 0; 
  top: 0; 
  bottom: 0;
  margin: 0;
  grid-auto-rows: auto;
  pointer-events: none;
`

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(${props => props.colspan}, 1fr);
  grid-auto-columns: ${props => props.colspan}fr;
  grid-auto-rows: min-content;
  box-sizing: border-box;

  ${props => props.media.map((media, index) => {
    return media`
      position: ${props => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
      grid-column-gap: ${props.gutterX[index]};
      grid-row-gap: ${props.gutterY[index]};
      ${props.style[index]}
      align-content: ${props => props.alignY[index]};
      align-items: ${props => props.alignY[index]};
    `
  })}
  ${props => props.isControl && controlStyles}
`

const FlexContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  box-sizing: border-box;

  ${props => props.media.map((media, index) => {
    return media`
      position: ${props => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
      ${props.style[index]}
    `
  })}
  ${props => props.isControl && controlStyles}
`

export default React.forwardRef((props, ref) => {
  switch (props.cssMode) {
    case 'flex':
      return <FlexContainer {...props} ref={ref} />
    case 'grid':
      return <GridContainer {...props} ref={ref} />
  }
})
