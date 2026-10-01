import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { whoWeServe } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import useSectionFade from '../hooks/useSectionFade'

export default function WhoWeServe() {
  const revealRef = useReveal('.reveal-item', {
    stagger: 0.12,
  })

  const sectionRef = useSectionFade()

  return (
    <section
      id="who-we-serve"
      ref={(element) => {
        revealRef.current = element
        sectionRef.current = element
      }}
      className="scroll-fade-section section-pad bg-sand text-ink border-b border-black/10 "
    >
      <div className="container-inner">

        {/* SECTION TITLE */}
        <div className="reveal-item flex items-center justify-center gap-4 mb-16">
          <span className="w-10 h-px bg-gold/50" />

          <h2 className="text-2xl md:text-5xl tracking-wide text-center">
            WHO WE SERVE
          </h2>

          <span className="w-10 h-px bg-gold/50" />
        </div>

        {/* WHO WE SERVE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeServe.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="
                reveal-item
                group
                border
                border-ink/20
                p-8
                min-h-[260px]
                flex
                flex-col
                justify-between
                hover:border-gold
                hover:bg-white/40
                transition-all
                duration-300
              "
            >
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-ink/45">
                  NUVEX™
                </p>

                <h3 className="mt-8 text-2xl md:text-3xl font-light">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-ink/60">
                  {item.text}
                </p>
              </div>

              {/* <div className="mt-8 flex justify-end">
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.5}
                  className="text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </div> */}
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}