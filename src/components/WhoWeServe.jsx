import { Home, Compass, Handshake, ShieldCheck } from 'lucide-react'
import { whoWeServe } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const icons = { Home, Compass, Handshake, ShieldCheck }

export default function WhoWeServe() {
  const ref = useReveal('.reveal-item', { stagger: 0.1 })

  return (
    <section id="who-we-serve" ref={ref} className="section-pad bg-cream">
      <div className="container-inner">
        <div className="reveal-item text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Who We Serve</p>
          <h2 className="text-2xl md:text-5xl text-ink leading-snug">
            BUILT FOR EVERY STAGE OF THE DESIGN AND BUILD PROCESS.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {whoWeServe.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div key={item.title} className="reveal-item">
                <div className="w-14 h-14 flex items-center justify-center text-gold mb-5">
                  <Icon size={54} strokeWidth={1.3} />
                </div>
                <h3 className="text-ink font-bold text-[24px] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
