
// https://blog.usejournal.com/react-hooks-the-rebirth-of-state-management-and-beyond-7d84f6026d87
import React, { useState, useEffect, useContext, useMemo } from 'react'
import {
  array, bool, node, number, object, oneOfType, string
} from 'prop-types'
import debounce from 'lodash/debounce'
import { getBreakpoints } from '../breakpoints'

function makeStore () {
  const context = React.createContext()

  const Provider = ({
    control = false,
    controlIsVisible = false,
    breakpoints,
    maxwidth,
    children
  }) => {
    const [state, setState] = useState({
      breakpoints: getBreakpoints(breakpoints, 'grid-provider'),
      maxwidth,
      controlIsVisible,
      control,
      viewport: 0
    })

    const contextValue = useMemo(() => [state, setState], [state])

    useEffect(() => {
      function onKeyup (event) {
        if (event.keyCode !== 27) return
        setState(prevState => ({
          ...prevState,
          controlIsVisible: !prevState.controlIsVisible
        }))
      }
      if (!control) return
      window.addEventListener('keyup', onKeyup)
      return window.removeEventListener('keyup', onKeyup)
    }, [])

    useEffect(() => {
      function onResize (event) {
        const { innerWidth, innerHeight } = window
        setState(prevState => ({
          ...prevState,
          viewport: { width: innerWidth, height: innerHeight }
        }))
      }
      onResize()
      const dOnResize = debounce(onResize, 150)
      window.addEventListener('resize', dOnResize)
      return window.removeEventListener('resize', dOnResize)
    }, [])

    return (
      <context.Provider value={contextValue}>
        {children}
      </context.Provider>
    )
  }

  Provider.propTypes = {
    children: node.isRequired,
    breakpoints: oneOfType([array, object, string]),
    control: bool,
    maxwidth: oneOfType([object, number])
  }

  Provider.defaultProps = {
    viewport: null,
    breakpoints: null,
    control: false,
    maxwidth: undefined
  }

  const useStore = () => useContext(context)
  return [ Provider, useStore, context ]
}

const [Provider, useStore, context] = makeStore()

export {
  Provider as GridProvider,
  useStore,
  context
}
