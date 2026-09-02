import { Cog, Compass, Leaf, Handshake } from 'lucide-react'
import { principles } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const icons = { Cog, Compass, Leaf, Handshake }

export default function Principles() {
  const ref = useReveal('.reveal-item', { stagger: 0.12 })

  return (
    <section id="principles" ref={ref} className="section-pad bg-ink">
      <div className="container-inner">
        <div className="reveal-item flex items-center justify-center gap-4 mb-16">
          <span className="w-10 h-px bg-gold/50" />
          <h2 className="text-2xl md:text-5xl text-white tracking-wide text-center">
            PRINCIPLES BEHIND EVERY SURFACE
          </h2>
          <span className="w-10 h-px bg-gold/50" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => {
            const Icon = icons[p.icon]
            return (
              <div
                key={p.title}
                className="reveal-item group border border-gold/25 px-7 py-10 text-center hover:border-gold/70 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="mx-auto mb-6 w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm tracking-wide uppercase mb-4">
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
