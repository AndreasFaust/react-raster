import React, { useEffect, useContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import getReset from '../utils/getReset'
import normalizeProps from '../utils/normalizeProps'
import getAlign from '../utils/getAlign'
import getColsPercent from '../utils/getColsPercent'
import getMarginsPercent from '../utils/getMarginsPercent'
import Inner from '../utils/inner'
import Resetter from '../utils/resetter'
import getAlignmentXRest from '../utils/getAlignmentXRest'

import Context from '../context'
import StyledContainer from './container'
import { ControlBox } from '../control'

const Box = React.forwardRef(({
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
  hasChildBoxes,
  tag,
  attrs,
  rest
}, ref) => {
  const {
    cssMode,
    breakpoints,
    gutterX,
    gutterY,
    colspan,
    parent,
    media,
    controlIsVisible,
    controlColor,
    register,
  } = useContext(Context)

  const [hasChildBoxesRegistered, setHasChildBoxes] = useState(undefined)
  const hasChildBoxesNormalized = useMemo(() => getReset(hasChildBoxes, hasChildBoxesRegistered), [hasChildBoxes, hasChildBoxesRegistered])

  const alignXNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignX, breakpoints }), cssMode, hasChildBoxesNormalized), [alignX, breakpoints, cssMode, hasChildBoxesNormalized])
  const alignYNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignY, breakpoints }), cssMode, hasChildBoxesNormalized), [alignY, breakpoints, cssMode, hasChildBoxesNormalized])

  const leftNormalized = useMemo(() => normalizeProps({ prop: left, breakpoints }), [left, breakpoints])
  const rightNormalized = useMemo(() => normalizeProps({ prop: right, breakpoints }), [right, breakpoints])
  const restNormalized = useMemo(() => normalizeProps({ prop: rest, breakpoints }), [rest, breakpoints])
  const colsNormalized = useMemo(() => normalizeProps({ prop: cols, defaultProp: parent, breakpoints }), [cols, parent, breakpoints])

  const topNormalized = useMemo(() => normalizeProps({ prop: top, breakpoints }), [top, breakpoints])
  const bottomNormalized = useMemo(() => normalizeProps({ prop: bottom, breakpoints }), [bottom, breakpoints])

  const colsPercent = useMemo(() => getColsPercent({ cols: colsNormalized, left: leftNormalized, right: rightNormalized, parent, cssMode }), [colsNormalized, leftNormalized, rightNormalized, parent, cssMode])

  const restPercent = useMemo(() => getMarginsPercent({ margin: restNormalized, cols: colsPercent, gutterX, parent, cssMode }), [restNormalized, colsPercent, gutterX, parent, cssMode])
  const leftPercent = useMemo(() => getMarginsPercent({ margin: leftNormalized, cols: colsPercent, gutterX, parent, cssMode }), [leftNormalized, colsPercent, gutterX, parent, cssMode])
  const rightPercent = useMemo(() => getMarginsPercent({ margin: rightNormalized, cols: colsPercent, gutterX, parent, cssMode }), [rightNormalized, colsPercent, gutterX, parent, cssMode])
  const topPercent = useMemo(() => getMarginsPercent({ margin: topNormalized, cols: colsPercent, gutterX, parent, cssMode }), [topNormalized, colsPercent, gutterX, parent, cssMode])
  const bottomPercent = useMemo(() => getMarginsPercent({ margin: bottomNormalized, cols: colsPercent, gutterX, parent, cssMode }), [bottomNormalized, colsPercent, gutterX, parent, cssMode])

  const styleNormalized = useMemo(() => normalizeProps({ prop: style, breakpoints }), [style, breakpoints])

  const alignmentXRest = useMemo(() => getAlignmentXRest({
    children,
    breakpoints,
    cssMode,
    colsTotal: colsNormalized,
    alignX: alignXNormalized,
    alignXRaw: alignX,
  }), [alignX, alignXNormalized, breakpoints, children, colsNormalized, cssMode])

  useEffect(() => {
    if (register) register()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledContainer
      cssMode={cssMode}
      breakpoints={breakpoints}
      className={classNames(['Box', className])}
      cols={colsPercent}
      rest={restPercent}
      colsNumber={colsNormalized}
      media={media}
      gutterX={gutterX}
      gutterY={gutterY}
      colspan={colsNormalized}
      hasChildBoxes={hasChildBoxesNormalized}
      alignX={alignXNormalized}
      alignY={alignYNormalized}
      tag={tag}
      left={leftPercent}
      right={rightPercent}
      top={topPercent}
      bottom={bottomPercent}
      controlIsVisible={controlIsVisible}
      controlColor={controlColor}
      style={cssMode === 'grid' && styleNormalized}
      ref={ref}
      attrs={attrs}
    >
      <Inner
        cssMode={cssMode}
        className='Box__Inner'
        gutterX={gutterX}
        gutterY={gutterY}
        media={media}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        style={styleNormalized}
        breakpoints={breakpoints}
        controlIsVisible={controlIsVisible}
        controlColor={controlColor}
      >
        {controlIsVisible && <ControlBox controlColor={controlColor} />}
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
              colspan,
              media,
              parent: colsNormalized,
              controlIsVisible,
              controlColor,
              cssMode,
              register: () => {
                if (!hasChildBoxesRegistered) {
                  setHasChildBoxes(true)
                }
              }
            }}
          >
            {
              React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                  rest: alignmentXRest && alignmentXRest[index]
                })
              })
            }
          </Context.Provider>
        </Resetter>
      </Inner>
    </StyledContainer>
  )
})

Box.displayName = 'Box'

Box.propTypes = {
  cols: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  alignX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alignY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  tag: PropTypes.string,
  attrs: PropTypes.object,
  hasChildBoxes: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.array,
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
  hasChildBoxes: undefined,
  tag: 'div',
  attrs: {},
  rest: [0]
}

export default Box
export { Box }
