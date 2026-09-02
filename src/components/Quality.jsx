import { Globe2, Leaf, BadgeCheck, Award, CheckCircle2 } from 'lucide-react'
import { compliance } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const icons = { Globe2, Leaf, BadgeCheck, Award, CheckCircle2 }

export default function Quality() {
  const ref = useReveal('.reveal-item', { stagger: 0.08 })

  return (
    <section id="quality" ref={ref} className="section-pad bg-ink">
      <div className="container-inner text-center">
        <h2 className="reveal-item text-xl md:text-4xl tracking-wide text-white mb-12">
          Quality &amp; Compliance — Certified for the World&rsquo;s Most Demanding Projects.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {compliance.map((c) => {
            const Icon = icons[c.icon]
            return (
              <div
                key={c.title}
                className="reveal-item flex flex-col items-center justify-center gap-4 border border-gold/25 py-9 px-4 hover:border-gold/60 transition-colors"
              >
                <Icon size={30} strokeWidth={1.4} className="text-gold" />
                <span className="text-white/80 text-xs tracking-wide uppercase">
                  {c.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
