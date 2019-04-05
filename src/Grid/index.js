import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Context from '../context'
import normalizeProps from '../utils/normalizeProps'
import getMediaQueries from '../utils/getMediaQueries'
import getAlign from '../utils/getAlign'
import useControl from '../utils/useControl'
import Inner from '../utils/inner'
import Resetter from '../utils/resetter'
import StyledContainer from './container'
import Control from '../Control'
import getResetFromChildren from '../utils/getResetFromChildren'

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
    controlColor,
    position,
    className,
    styleOuter,
    styleInner,
    children,
    hasChildBoxes
  } = props
  const controlIsVisible = useControl(control)
  const resetNormalized = useMemo(() => getResetFromChildren(children, hasChildBoxes), [children, hasChildBoxes])

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
  const styleOuterNormalized = useMemo(() => normalizeProps({ prop: styleOuter, breakpoints }), [styleOuter, breakpoints])
  const styleInnerNormalized = useMemo(() => normalizeProps({ prop: styleInner, breakpoints }), [styleInner, breakpoints])

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
      style={styleOuterNormalized}
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
          controlColor={controlColor}
        />
      )}
      <Inner
        className='Grid__Inner'
        gutterX={gutterXNormalized}
        gutterY={gutterYNormalized}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        media={media}
        style={styleInnerNormalized}
        controlColor={controlColor}
      >
        <Resetter
          className='Grid__Resetter'
          reset={resetNormalized}
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
              controlIsVisible,
              controlColor
            }}
          >
            {children}
          </Context.Provider>
        </Resetter>
      </Inner>
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
  controlColor: PropTypes.string,
  position: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  styleInner: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  children: PropTypes.node,
  hasChildBoxes: PropTypes.bool
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
  controlColor: 'rgba(0, 100, 255, 0.1)',
  position: 'relative',
  style: '',
  styleInner: '',
  className: '',
  children: null,
  hasChildBoxes: undefined
}

export default Grid
