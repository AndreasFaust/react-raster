import React, { useContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import Context from '../context'
import getReset from '../utils/getReset'
import normalizeProps from '../utils/normalizeProps'
import getAlign from '../utils/getAlign'
import getColsPercent from '../utils/getColsPercent'
import getMarginsPercent from '../utils/getMarginsPercent'
import Inner from '../utils/inner'
import Resetter from '../utils/resetter'
import mergeStyles from '../utils/mergeStyles'
import StyledContainer from './container'

const Box = ({
  className,
  cols,
  alignX,
  alignY,
  children,
  left,
  right,
  top,
  bottom,
  style,
  styleInner,
  styleOuter,
  hasChildBoxes
}) => {
  const {
    cssMode,
    breakpoints,
    gutterX,
    gutterY,
    alignX: alignXContext,
    alignY: alignYContext,
    colspan,
    parent,
    media,
    controlIsVisible,
    controlColor,
    register
  } = useContext(Context)

  const [hasChildBoxesRegistered, setHasChildBoxes] = useState(undefined)
  const hasChildBoxesNormalized = useMemo(() => getReset(hasChildBoxes, hasChildBoxesRegistered), [hasChildBoxes, hasChildBoxesRegistered])

  const alignXNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignX, defaultProp: alignXContext, breakpoints }), cssMode), [alignX, alignXContext, breakpoints, cssMode])
  const alignYNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignY, defaultProp: alignYContext, breakpoints }), cssMode), [alignY, alignYContext, breakpoints, cssMode])

  const leftNormalized = useMemo(() => normalizeProps({ prop: left, breakpoints }), [left, breakpoints])
  const rightNormalized = useMemo(() => normalizeProps({ prop: right, breakpoints }), [right, breakpoints])
  const topNormalized = useMemo(() => normalizeProps({ prop: top, breakpoints }), [top, breakpoints])
  const bottomNormalized = useMemo(() => normalizeProps({ prop: bottom, breakpoints }), [bottom, breakpoints])

  const colsNormalized = useMemo(() => normalizeProps({ prop: cols, defaultProp: parent, breakpoints }), [cols, parent, breakpoints])
  const colsPercent = useMemo(() => getColsPercent({ cols: colsNormalized, left: leftNormalized, parent, cssMode }), [colsNormalized, leftNormalized, parent, cssMode])

  const leftPercent = useMemo(() => getMarginsPercent({ margin: leftNormalized, cols: colsPercent, gutterX, parent, cssMode }), [leftNormalized, colsPercent, gutterX, parent, cssMode])
  const rightPercent = useMemo(() => getMarginsPercent({ margin: rightNormalized, cols: colsPercent, gutterX, parent, cssMode }), [rightNormalized, colsPercent, gutterX, parent, cssMode])
  const topPercent = useMemo(() => getMarginsPercent({ margin: topNormalized, cols: colsPercent, gutterX, parent, cssMode }), [topNormalized, colsPercent, gutterX, parent, cssMode])
  const bottomPercent = useMemo(() => getMarginsPercent({ margin: bottomNormalized, cols: colsPercent, gutterX, parent, cssMode }), [bottomNormalized, colsPercent, gutterX, parent, cssMode])

  const styleOuterNormalized = useMemo(() => normalizeProps({ prop: styleOuter, breakpoints }), [styleOuter, breakpoints])
  const styleInnerNormalized = useMemo(() => normalizeProps({ prop: styleInner, breakpoints }), [styleInner, breakpoints])
  const styleNormalized = useMemo(() => mergeStyles(normalizeProps({ prop: style, breakpoints }), styleInnerNormalized, styleOuterNormalized), [style, breakpoints, styleInnerNormalized, styleOuterNormalized])
  if (register) register()

  return (
    <StyledContainer
      cssMode={cssMode}
      breakpoints={breakpoints}
      className={classNames(['Box', className])}
      cols={colsPercent}
      media={media}
      gutterX={gutterX}
      gutterY={gutterY}
      colspan={colsNormalized}
      hasChildBoxes={hasChildBoxesNormalized}
      alignX={alignXNormalized}
      alignY={alignYNormalized}

      left={leftPercent}
      right={rightPercent}
      top={topPercent}
      bottom={bottomPercent}
      style={cssMode === 'grid'
        ? styleNormalized
        : styleOuterNormalized
      }
    >
      <Inner
        cssMode={cssMode}
        className='Box__Inner'
        gutterX={gutterX}
        gutterY={gutterY}
        media={media}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        style={styleInnerNormalized}
        breakpoints={breakpoints}
        controlIsVisible={controlIsVisible}
        controlColor={controlColor}
      >
        <Resetter
          cssMode={cssMode}
          className='Box__Resetter'
          hasChildBoxes={hasChildBoxesNormalized}
          media={media}
          gutterX={gutterX}
          gutterY={gutterY}
          alignX={alignXNormalized}
          alignY={alignYNormalized}
          breakpoints={breakpoints}
        >
          <Context.Provider
            value={{
              breakpoints,
              gutterX,
              gutterY,
              alignX: alignXNormalized,
              alignY: alignYNormalized,
              colspan,
              media,
              parent: colsNormalized,
              controlIsVisible,
              cssMode,
              register: () => {
                if (!hasChildBoxesRegistered) {
                  setHasChildBoxes(true)
                }
              }
            }}
          >
            {children}
          </Context.Provider>
        </Resetter>
      </Inner>
    </StyledContainer>
  )
}

Box.displayName = 'Box'

Box.propTypes = {
  /**  Width of the Box. Falls back to width of parent Box or Grid. Unit: Grid columns defined with the prop "colspan" */
  cols: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**  Left margin of the Box. Unit: Grid-columns. */
  left: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**  Right margin of the Box. Unit: Grid-columns. */
  right: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**  Top margin of the Box. Unit: Grid-columns. */
  top: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**  Bottom margin of the Box. Unit: Grid-columns. */
  bottom: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**  cssMode={flex} only! Horizontal Align of child elements. */
  alignX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Vertical Align of child elements. */
  alignY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  cssMode={grid} only! Custom styles with styled-components. */
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  cssMode={flex} only! Styles Box-Inner-Container with styled-components. */
  styleInner: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  cssMode={flex} only! Styles Box-Outer-Container with styled-components. */
  styleOuter: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**  Tell react-raster that you have child-Boxes inside this Grid- or Box-Component. See the topic "Resetting Boxes" */
  hasChildBoxes: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

Box.defaultProps = {
  className: '',
  cols: undefined,
  alignX: '',
  alignY: '',
  children: null,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  style: '',
  styleInner: '',
  styleOuter: '',
  hasChildBoxes: undefined
}

export default Box
export { Box }
