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
import useCssMode from '../utils/useCssMode'
import StyledContainer from './container'
import Control from '../Control'
import mergeStyles from '../utils/mergeStyles'
import useCurrentBreakpoint from '../utils/useCurrentBreakpoint'

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
    tag
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

  return (
    <StyledContainer
      cssMode={cssModeNormalized}
      colspan={colspan}
      className={classNames(['Grid', 'bp-', className])}
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
              controlColor
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
  /** Breakpoints in Pixels, in ascending order starting with zero. */
  breakpoints: PropTypes.array,
  /** Number of columns. */
  colspan: PropTypes.number,
  /**  Left padding of the Grid. */
  left: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Right padding of the Grid. */
  right: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Top padding of the Grid. */
  top: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Bottom padding of the Grid. */
  bottom: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Horizontal gutter. */
  gutterX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Verical gutter. */
  gutterY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Horizontal align of child elements. Works only when: cssMode={flex}  */
  alignX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Vertical align of child elements. */
  alignY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Enable visual control via ESC-Key. */
  control: PropTypes.bool,
  /**  Custom color for the grid-control. */
  controlColor: PropTypes.string,
  /**  CSS-position. */
  position: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  /**  cssMode={grid} only! Custom styles with styled-components. */
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  cssMode={flex} only! Styles Grid-Inner-Container with styled-components. */
  styleInner: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  cssMode={flex} only! Styles Grid-Outer-Container with styled-components. */
  styleOuter: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  children: PropTypes.node,
  /**  Use CSS Grid Layout or Flexbox. Override automatic detection of Grid-Layout-support. */
  cssMode: PropTypes.string,
  tag: PropTypes.string
  /**  cssMode={flex} only!  Tell react-raster that you have child-Boxes inside this Grid- or Box-Component. See the topic "Group Boxes inside custom components" for more information. If the Boxes are nested inside other components react-raster does not know, that you are sitll using its grid. */
  // reset: PropTypes.bool
}

Grid.defaultProps = {
  breakpoints: [0, 432, 800, 1025, 1200, 1400],
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
  tag: 'div'
  // reset: undefined
}

export default Grid
export { Grid }
