import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fades + lifts direct children matching `selector` into place as the
 * container enters the viewport. Pass `{ stagger }` to space out grids.
 */
export function useReveal(selector = '.reveal-item', { stagger = 0.12 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll(selector)
      if (!items.length) return

      gsap.set(items, { opacity: 0, y: 28 })

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [selector, stagger])

  return ref
}
