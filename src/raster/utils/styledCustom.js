import styled from 'styled-components'

export default (Element, props) => styled(Element)`
  ${props => props.media.map((media, index) => {
    return media`
      ${props.style[index]}   
    `
  })}
`
