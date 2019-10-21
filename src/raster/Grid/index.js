import React, { useMemo, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Context from '../context'
import normalizeProps from '../utils/normalizeProps'
import getMediaQueries from '../utils/getMediaQueries'
import getAlign from '../utils/getAlign'
import useControl from '../utils/useControl'
import Inner from '../utils/inner'
import Resetter from '../utils/resetter'
import useCssMode from '../utils/useCssMode'
import StyledContainer from './container'
import Control from '../Control'
import mergeStyles from '../utils/mergeStyles'
import useCurrentBreakpoint from '../utils/useCurrentBreakpoint'
import getAlignmentXRest from '../utils/getAlignmentXRest'


const Grid = React.forwardRef((props, ref) => {
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
    style,
    styleInner,
    styleOuter,
    children,
    cssMode,
    tag,
    attrs
  } = props
  const controlIsVisible = useControl(control)
  const cssModeNormalized = useCssMode(cssMode || 'grid')

  const breakpointsNormalized = useMemo(() => breakpoints, [breakpoints])
  const currentBreakpoint = useCurrentBreakpoint(breakpointsNormalized)
  const gutterXNormalized = useMemo(() => normalizeProps({ prop: gutterX, breakpoints: breakpointsNormalized }), [gutterX, breakpointsNormalized])
  const gutterYNormalized = useMemo(() => normalizeProps({ prop: gutterY, breakpoints: breakpointsNormalized }), [gutterY, breakpointsNormalized])
  const alignXNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignX, breakpoints: breakpointsNormalized }), cssModeNormalized, true), [alignX, breakpointsNormalized, cssModeNormalized])
  const alignYNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignY, breakpoints: breakpointsNormalized }), cssModeNormalized, true), [alignY, breakpointsNormalized, cssModeNormalized])

  const media = useMemo(() => getMediaQueries(breakpointsNormalized), [breakpointsNormalized])
  const parent = useMemo(() => normalizeProps({ prop: colspan, breakpoints: breakpointsNormalized }), [colspan, breakpointsNormalized])
  const leftNormalized = useMemo(() => normalizeProps({ prop: left, breakpoints: breakpointsNormalized }), [left, breakpointsNormalized])
  const rightNormalized = useMemo(() => normalizeProps({ prop: right, breakpoints: breakpointsNormalized }), [right, breakpointsNormalized])
  const topNormalized = useMemo(() => normalizeProps({ prop: top, breakpoints: breakpointsNormalized }), [top, breakpointsNormalized])
  const bottomNormalized = useMemo(() => normalizeProps({ prop: bottom, breakpoints: breakpointsNormalized }), [bottom, breakpointsNormalized])
  const positionNormalized = useMemo(() => normalizeProps({ prop: position, breakpoints: breakpointsNormalized }), [position, breakpointsNormalized])
  const styleOuterNormalized = useMemo(() => normalizeProps({ prop: styleOuter, breakpoints }), [styleOuter, breakpoints])
  const styleInnerNormalized = useMemo(() => normalizeProps({ prop: styleInner, breakpoints }), [styleInner, breakpoints])
  const styleNormalized = useMemo(() => mergeStyles(normalizeProps({ prop: style, breakpoints }), styleInnerNormalized, styleOuterNormalized), [style, breakpoints, styleInnerNormalized, styleOuterNormalized])

  const [childWidths, reportChildWidth] = useState([])
  const alignmentXRest = useMemo(() => getAlignmentXRest(breakpoints, childWidths, colspan, alignXNormalized), [breakpoints, childWidths, colspan, alignXNormalized])

  return (
    <StyledContainer
      cssMode={cssModeNormalized}
      colspan={colspan}
      className={classNames(['Grid', `bp-${currentBreakpoint}`, className])}
      gutterX={gutterXNormalized}
      gutterY={gutterYNormalized}
      alignX={alignXNormalized}
      alignY={alignYNormalized}
      media={media}
      left={leftNormalized}
      right={rightNormalized}
      top={topNormalized}
      bottom={bottomNormalized}
      position={positionNormalized}
      tag={tag}
      attrs={attrs}
      style={cssModeNormalized === 'grid'
        ? styleNormalized
        : styleOuterNormalized
      }
      ref={ref}
    >
      {control && controlIsVisible && (
        <Control
          cssMode={cssModeNormalized}
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
        cssMode={cssModeNormalized}
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
          cssMode={cssModeNormalized}
          className='Grid__Resetter'
          hasChildBoxes
          gutterX={gutterXNormalized}
          gutterY={gutterYNormalized}
          alignX={alignXNormalized}
          alignY={alignYNormalized}
          media={media}
        >
          <Context.Provider
            value={{
              cssMode: cssModeNormalized,
              breakpoints: breakpointsNormalized,
              gutterX: gutterXNormalized,
              gutterY: gutterYNormalized,
              alignX: alignXNormalized,
              alignY: alignYNormalized,
              media,
              colspan,
              parent,
              controlIsVisible,
              controlColor,
              reportChildWidth,
              alignmentXRest
            }}
          >
            {children}
          </Context.Provider>
        </Resetter>
      </Inner>
    </StyledContainer>
  )
})

Grid.propTypes = {
  breakpoints: PropTypes.array,
  colspan: PropTypes.number,
  left: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  gutterX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  gutterY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alignX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alignY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  control: PropTypes.bool,
  controlColor: PropTypes.string,
  position: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  styleInner: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  styleOuter: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  children: PropTypes.node,
  cssMode: PropTypes.string,
  tag: PropTypes.string,
  attrs: PropTypes.object
}

Grid.defaultProps = {
  breakpoints: [0, 432, 768, 1024, 1200, 1400],
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  gutterX: '0',
  gutterY: '0',
  alignX: '',
  alignY: '',
  colspan: 1,
  control: false,
  controlColor: 'rgba(0, 0, 0, 0.1)',
  position: 'relative',
  style: '',
  styleOuter: '',
  styleInner: '',
  className: '',
  children: null,
  cssMode: undefined,
  tag: 'div',
  attrs: {}
}

export default Grid
export { Grid }
