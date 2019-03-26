import { css } from 'styled-components'

export default (breakpoints) => {
  return breakpoints.map((bp) => {
    return (...args) => css`
        @media (min-width: ${bp}px) {
          ${css(...args)};
        }
    `
  })
}
