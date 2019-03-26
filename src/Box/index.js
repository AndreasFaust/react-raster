import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import Context from '../context'
import getResetFromChildren from '../utils/getResetFromChildren'
import normalizeProps from '../utils/normalizeProps'
import getAlign from '../utils/getAlign'
import getCols from '../utils/getCols'
import Inner from './inner'
import StyledContainer from './container'

const Box = ({
  className = '',
  cols,
  alignX,
  alignY,
  children,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  style,
  styleContent
}) => {
  const {
    breakpoints,
    gutterX,
    gutterY,
    alignX: alignXContext,
    alignY: alignYContext,
    colspan,
    parent,
    media,
    controlIsVisible
  } = useContext(Context)
  const colsNormalized = useMemo(() => normalizeProps({ prop: cols, defaultProp: parent, breakpoints }), [cols, parent])
  const colsWidth = useMemo(() => getCols({ cols: colsNormalized, parent }), [colsNormalized, parent])
  const reset = useMemo(() => getResetFromChildren(children), [children])
  const alignXNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignX, defaultProp: alignXContext, breakpoints })), [alignX, alignXContext, breakpoints])
  const alignYNormalized = useMemo(() => getAlign(normalizeProps({ prop: alignY, defaultProp: alignYContext, breakpoints })), [alignY, alignYContext, breakpoints])

  const leftNormalized = useMemo(() => getCols({ cols: normalizeProps({ prop: left, breakpoints }), parent }), [left, parent])
  const rightNormalized = useMemo(() => getCols({ cols: normalizeProps({ prop: right, breakpoints }), parent }), [right, parent])
  const topNormalized = useMemo(() => getCols({ cols: normalizeProps({ prop: top, breakpoints }), parent }), [top, parent])
  const bottomNormalized = useMemo(() => getCols({ cols: normalizeProps({ prop: bottom, breakpoints }), parent }), [bottom, parent])

  return (
    <StyledContainer
      breakpoints={breakpoints}
      className={classNames(['Box', className])}
      cols={colsWidth}
      media={media}
      gutterX={gutterX}
      gutterY={gutterY}
      left={leftNormalized}
      right={rightNormalized}
      top={topNormalized}
      bottom={bottomNormalized}
      style={style}
    >
      <Inner
        gutterX={gutterX}
        gutterY={gutterY}
        media={media}
        reset={reset}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        styleContent={styleContent}
        breakpoints={breakpoints}
        controlIsVisible={controlIsVisible}
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
            controlIsVisible
          }}
        >
          {children}
        </Context.Provider>
      </Inner>
    </StyledContainer>
  )
}

Box.displayName = 'Box'

Box.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  alignX: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alignY: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  children: PropTypes.node,
  left: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.string,
  styleContent: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

Box.defaultProps = {
  className: '',
  cols: undefined,
  alignX: '0',
  alignY: '0',
  children: null,
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  style: '',
  styleContent: ''
}

export default Box
