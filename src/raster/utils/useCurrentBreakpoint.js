import { useState, useEffect } from 'react'

export default (breakpoints) => {
  const [currentBp, setCurrentBp] = useState(0)
  useEffect(() => {
    function onResize () {
      const w = window.innerWidth
      let bp = 0
      breakpoints.forEach(breakpoint => {
        if (breakpoint <= w) {
          bp = breakpoint
        }
      })
      setCurrentBp(bp)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return currentBp
}
