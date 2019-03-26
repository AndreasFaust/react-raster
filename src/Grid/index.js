import React, { useMemo } from 'react'
// import { array, bool, number, node, object, string } from 'prop-types'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Context from '../context'
import normalizeProps from '../utils/normalizeProps'
import getMediaQueries from '../utils/getMediaQueries'
import getAlign from '../utils/getAlign'
import useControl from '../utils/useControl'
import StyledInner from './inner'
import StyledContainer from './container'
import Control from '../Control'

const Grid = (props) => {
  const {
    breakpoints,
    left,
    right,
    top,
    bottom,
    gutterX,
    gutterY,
    alignX,
    alignY,
    colspan,
    control,
    position,
    style,
    className,
    children
  } = props
  const controlIsVisible = useControl(control)

  const breakpointsNormalized = useMemo(() => breakpoints, [breakpoints])
  const gutterXNormalized = useMemo(() => normalizeProps({ prop: gutterX, breakpoints: breakpointsNormalized }), [gutterX, breakpointsNormalized])
  const gutterYNormalized = useMemo(() => normalizeProps({ prop: gutterY, breakpoints: breakpointsNormalized }), [gutterY, breakpointsNormalized])
  const alignXNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignX, breakpoints: breakpointsNormalized })), [alignX, breakpointsNormalized])
  const alignYNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignY, breakpoints: breakpointsNormalized })), [alignY, breakpointsNormalized])
  const media = useMemo(() => getMediaQueries(breakpointsNormalized), [breakpointsNormalized])
  const parent = useMemo(() => normalizeProps({ prop: colspan, breakpoints: breakpointsNormalized }), [colspan, breakpointsNormalized])
  const leftNormalized = useMemo(() => normalizeProps({ prop: left, breakpoints: breakpointsNormalized }), [left, breakpointsNormalized])
  const rightNormalized = useMemo(() => normalizeProps({ prop: right, breakpoints: breakpointsNormalized }), [right, breakpointsNormalized])
  const topNormalized = useMemo(() => normalizeProps({ prop: top, breakpoints: breakpointsNormalized }), [top, breakpointsNormalized])
  const bottomNormalized = useMemo(() => normalizeProps({ prop: bottom, breakpoints: breakpointsNormalized }), [bottom, breakpointsNormalized])
  const positionNormalized = useMemo(() => normalizeProps({ prop: position, breakpoints: breakpointsNormalized }), [position, breakpointsNormalized])

  return (
    <StyledContainer
      className={classNames(['Grid', className])}
      gutterX={gutterXNormalized}
      gutterY={gutterYNormalized}
      media={media}
      left={leftNormalized}
      right={rightNormalized}
      top={topNormalized}
      bottom={bottomNormalized}
      style={style}
      position={positionNormalized}
    >
      {control && controlIsVisible && (
        <Control {...props} />
      )}
      <StyledInner
        className='Grid__inner'
        gutterX={gutterXNormalized}
        gutterY={gutterYNormalized}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        media={media}
      >
        <Context.Provider
          value={{
            breakpoints: breakpointsNormalized,
            gutterX: gutterXNormalized,
            gutterY: gutterYNormalized,
            alignX: alignXNormalized,
            alignY: alignYNormalized,
            media,
            colspan,
            parent,
            controlIsVisible
          }}
        >
          {children}
        </Context.Provider>
      </StyledInner>
    </StyledContainer>
  )
}

Grid.propTypes = {
  breakpoints: PropTypes.array,
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  gutterX: PropTypes.string,
  gutterY: PropTypes.string,
  alignX: PropTypes.string,
  alignY: PropTypes.string,
  colspan: PropTypes.number,
  control: PropTypes.bool,
  position: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

Grid.defaultProps = {
  breakpoints: [0, 500, 800, 1025, 1200, 1400],
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  gutterX: '0',
  gutterY: '0',
  alignX: 'left',
  alignY: 'top',
  colspan: 1,
  control: false,
  position: 'relative',
  style: '',
  className: '',
  children: null
}

export default Grid
