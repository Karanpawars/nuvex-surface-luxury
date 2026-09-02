import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, ChevronDown } from 'lucide-react'
import heroBg from '../assets/images/hero-bg.png'

const rotatingLines = [
  'The Future of High-End Residential Design',
  'The Future of Commercial Spaces',
  'The Future of Healthcare Environments',
  'The Future of Luxury Hospitality',
]

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      tl.set('.hero-reveal', {
        opacity: 0,
        y: 30,
      })
        .to('.hero-bg', {
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
        })
        .to(
          '.hero-reveal',
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          '-=0.9'
        )
    }, root)

    return () => ctx.revert()
  }, [])

  const scrollToStory = () => {
    document
      .querySelector('#our-story')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-screen flex items-end bg-ink overflow-hidden pt-20"
    >
      {/* HERO BACKGROUND IMAGE */}
      <div className="hero-bg absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-auto object-cover object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <div className="container-inner relative z-10 px-6 md:px-12 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">

          <p className="hero-reveal text-white/80 text-lg md:text-xl font-display italic mb-3">
            NUVEX™ Surface Luxury —
          </p>

          <h1 className="hero-reveal font-display text-4xl sm:text-5xl md:text-7xl leading-[1.08] text-gold-light">
            THE FUTURE OF <br />
            ARCHITECTURAL SURFACES.
          </h1>

          <div className="hero-reveal w-16 h-px bg-gold my-7" />

          <div className="hero-reveal space-y-1 text-white/70 text-sm md:text-base mb-9">
            <p>
              {rotatingLines[0]} &nbsp;|&nbsp; {rotatingLines[1]}
            </p>

            <p>
              {rotatingLines[2]} &nbsp;|&nbsp; {rotatingLines[3]}
            </p>
          </div>

          <div className="hero-reveal flex flex-wrap gap-4">

            <a
              href="#materials"
              className="btn-gold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#materials')
              }}
            >
              Explore Collections
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>

          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <button
        onClick={scrollToStory}
        aria-label="Scroll to next section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full border border-white/25 text-white/70 hover:text-gold hover:border-gold transition-colors animate-bounce"
      >
        <ChevronDown size={18} />
      </button>
    </section>
  )
}