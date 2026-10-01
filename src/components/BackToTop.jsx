import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`
        fixed
        bottom-6
        right-6
        z-50

        w-12
        h-12

        rounded-full

        flex
        items-center
        justify-center

        border
        border-gold/50

        bg-ink/95
        backdrop-blur-md

        text-gold

        shadow-lg

        transition-all
        duration-300
        ease-out

        hover:bg-gold
        hover:text-ink
        hover:border-gold
        hover:-translate-y-1

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-gold
        focus-visible:ring-offset-2
        focus-visible:ring-offset-ink

        ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
    >
      <ArrowUp
        size={18}
        strokeWidth={1.8}
      />
    </button>
  )
}