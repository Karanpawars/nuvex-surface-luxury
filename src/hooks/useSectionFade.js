import { useEffect, useRef } from 'react'

export default function useSectionFade() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('section-visible')
          section.classList.remove('section-hidden')
        } else {
          section.classList.remove('section-visible')
          section.classList.add('section-hidden')
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return sectionRef
}