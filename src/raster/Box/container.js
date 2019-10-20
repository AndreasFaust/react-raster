import React from 'react'
import styled from 'styled-components'
import Container from '../utils/container'

const GridContainer = styled(Container)`
  box-sizing: border-box;
  display: ${props => props.hasChildBoxes ? 'grid' : 'flex'};

  ${props => props.hasChildBoxes && props.media.map((media, index) => {
    return media`
      grid-template-columns: repeat(${props => props.colspan[index]}, 1fr);
      grid-auto-columns: ${props => props.colspan[index]}fr;
      grid-auto-rows: min-content;
      grid-column-gap: ${props.gutterX[index]};
      grid-row-gap: ${props.gutterY[index]};
    `
  })}
  ${props => props.media.map((media, index) => {
    return media`
      ${!props.colsNumber[index] ? 'display: none;' : ''}
      grid-column: auto / span ${props.cols[index]};
      margin-left: ${props.left[index]};
      margin-right: ${props.right[index]};
      margin-top: ${props.top[index]};
      margin-bottom: ${props.bottom[index]};
      ${props.style[index]}

      align-content: ${props => props.alignY[index]};
      align-items: ${props => props.alignY[index]};
      // justify-content: ${props => props.alignX[index]};    
    `
  })}
  ${props => {
    if (props.controlIsVisible) {
      return props.tag !== 'img'
        ? `
          position: relative; 
          
          ::after { 
            content: '';
            display: block;
            position: absolute;
            background: ${props.controlColor};
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
            pointer-events: none;
          }
        `
        : `box-shadow: 0 0 200vw 200vw ${props.controlColor} inset;`
    }
  }}
`

const FlexContainer = styled(Container)`
  display: flex;
  box-sizing: border-box;
  
  ${props => props.media.map((media, index) => {
    return media`
      width: ${props.cols[index]}%;
      
      padding-left: calc(${props.gutterX[index]} / 2);
      padding-right: calc(${props.gutterX[index]} / 2);
      padding-top: calc(${props.gutterY[index]} / 2);
      padding-bottom: calc(${props.gutterY[index]} / 2);

      margin-left: ${props.left[index]};
      margin-right: ${props.right[index]};
      margin-top: ${props.top[index]};
      margin-bottom: ${props.bottom[index]};
      ${props.style[index]}
    `
  })
}
`

export default React.forwardRef((props, ref) => {
  if (props.cssMode === 'flex') {
    return <FlexContainer {...props} ref={ref} />
  }
  return <GridContainer {...props} ref={ref} />
})
