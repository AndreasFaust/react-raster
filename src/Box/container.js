import styled from 'styled-components'
import Container from '../utils/container'

const StyledContainer = styled(Container)`
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  ${props => props.media.map((media, index) => {
    return media`
      width: ${props.cols[index]}%;
      
      padding-left: calc(${props.gutterX[index]} / 2);
      padding-right: calc(${props.gutterX[index]} / 2);
      padding-top: calc(${props.gutterY[index]} / 2);
      padding-bottom: calc(${props.gutterY[index]} / 2);

      margin-left: ${props.left[index]}%;
      margin-right: ${props.right[index]}%;
      margin-top: ${props.top[index]}%;
      margin-bottom: ${props.bottom[index]}%;
    `
  })
}
`

const StyledContainerCustom = styled(StyledContainer)`
  ${props => props.style}
`

export default StyledContainerCustom
