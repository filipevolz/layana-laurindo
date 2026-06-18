import { useEffect, useRef, useState } from 'react'

interface UseRevealOptions {
  once?: boolean
  threshold?: number
  rootMargin?: string
}

export function useReveal({
  once = true,
  threshold = 0.15,
  rootMargin = '0px 0px -5% 0px',
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once, threshold, rootMargin])

  return { ref, visible }
}
