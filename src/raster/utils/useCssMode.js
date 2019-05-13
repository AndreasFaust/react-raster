import { useState, useEffect } from 'react'

export default (initialValue) => {
  const [cssMode, setCssMode] = useState(initialValue)

  useEffect(() => {
    if (cssMode) return
    const supportsCSS = (window.CSS && window.CSS.supports) || window.supportsCSS || false
    const supportsGrid = supportsCSS
      ? supportsCSS('grid-template-rows', 'none')
      : false

    if (!supportsGrid) {
      setCssMode('flex')
    }
  }, [])

  return cssMode
}
