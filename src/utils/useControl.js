import { useState, useEffect } from 'react'

const useControl = (control) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    function onKeyup (event) {
      if (event.keyCode !== 27) return
      setIsVisible(prevState => !prevState)
    }
    if (!control) return
    document.addEventListener('keyup', onKeyup)
    return () => document.removeEventListener('keyup', onKeyup)
  }, [])

  return isVisible
}

export default useControl
