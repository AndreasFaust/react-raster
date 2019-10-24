import { useState, useEffect } from 'react'

export default (breakpoints) => {
  const [currentBp, setCurrentBp] = useState({ index: 1, value: 0 })
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth
      let bp = { index: 1, value: 0 }
      breakpoints.forEach((breakpoint, index) => {
        if (breakpoint <= w) {
          bp = { index: index + 1, value: breakpoint }
        }
      })
      setCurrentBp(bp)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoints])
  return currentBp
}
