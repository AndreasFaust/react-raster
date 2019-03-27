import React, { useMemo } from 'react'
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
    styleContent,
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
  const styleNormalized = useMemo(() => normalizeProps({ prop: style, breakpoints }), [style, breakpoints])
  const styleContentNormalized = useMemo(() => normalizeProps({ prop: styleContent, breakpoints }), [styleContent, breakpoints])

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
      style={styleNormalized}
      position={positionNormalized}
    >
      {control && controlIsVisible && (
        <Control
          colspan={colspan}
          breakpoints={breakpoints}
          gutterX={gutterX}
          gutterY={gutterY}
          left={left}
          right={right}
          top={top}
          bottom={bottom}
        />
      )}
      <StyledInner
        className='Grid__inner'
        gutterX={gutterXNormalized}
        gutterY={gutterYNormalized}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        media={media}
        style={styleContentNormalized}
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
  left: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  gutterX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  gutterY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alignX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alignY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  colspan: PropTypes.number,
  control: PropTypes.bool,
  position: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  styleContent: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
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
  styleContent: '',
  className: '',
  children: null
}

export default Grid
