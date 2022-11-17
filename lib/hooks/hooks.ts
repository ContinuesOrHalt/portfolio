import { useEffect, useState, useCallback, useRef, createRef } from 'react'

export const useOnClickOutside = (handler: any) => {
  const ref: any = useRef()

  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
  return ref
}

export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }, [isClient])

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return () => {}
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getSize, isClient]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export const useBoundingRect = (ref: any, callback: (_: any) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref) {
        const rect = ref.current.getBoundingClientRect()
        callback?.(rect)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref, callback])
}

export const useEffectMounted = (callback: () => () => void, dp = []) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      return callback() || (() => {})
    }
  }, dp) // eslint-disable-line

  useEffect(() => {
    isMounted.current = true
  }, [])
}

export const useScrollTo: any = () => {
  const ref = createRef<HTMLDivElement>()

  return [
    ref,
    (options = {}) => {
      window.scrollTo({
        top: (ref.current?.offsetTop || 0) - 80,
        ...options,
      })
    },
  ]
}
