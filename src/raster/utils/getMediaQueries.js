import { css } from 'styled-components'

export default (breakpoints) => {
  const breakpointsLength = breakpoints.length
  return breakpoints.map((bp, index) => {
    const max = index !== breakpointsLength - 1
      ? ` and (max-width: ${breakpoints[index + 1] - 1}px)`
      : ''

    return (...args) => css`
      @media (min-width: ${bp}px)${max} {
        ${css(...args)};
      }
    `
  })
}
