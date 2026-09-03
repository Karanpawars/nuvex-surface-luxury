import { useReveal } from '../hooks/useReveal'
import storyBg from '../assets/images/about.png'

export default function OurStory() {
  const ref = useReveal('.reveal-item', { stagger: 0.15 })

  return (
    <section id="our-story" ref={ref} className="relative bg-[#f4f0e8] overflow-hidden">
      {/* <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-ink/10 to-transparent pointer-events-none" /> */}
      <div className="grid md:grid-cols-2 min-h-[400px]">
        <div className="relative flex items-center px-6 md:px-16 py-20 md:py-0 order-2 md:order-1">
          {/* Decorative arc, echoing the circular motif from the brand mark */}
          <div className="hidden md:block absolute -left-32 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-gold/30" />
          <div className="hidden md:block absolute -right-32 top-1/2 -translate-y-1/1 w-72 h-72 rounded-full border border-gold/30" />
          <div className="relative max-w-md">
            <p className="reveal-item eyebrow mb-4">Our Story</p>
            <h2 className="reveal-item text-3xl md:text-6xl leading-tight text-ink mb-6">
              Crafting Surfaces That Define Spaces
            </h2>
            <div className="reveal-item w-14 h-px bg-gold mb-6" />
            <p className="reveal-item text-ink/70 leading-relaxed">
              From architectural innovation to material excellence — the story behind NUVEX™ is driven by a commitment to engineering premium surfaces with absolute purpose.
            </p>
          </div>
        </div>

        <div className="relative order-1 md:order-2 min-h-[320px] md:min-h-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${storyBg})`,
            }}
          />

          {/* Inward curve */}
          <div
            className="absolute top-[-20%] bottom-[-20%] left-[-75%] w-[90%] rounded-full bg-ivory"
          />
        </div>
      </div>
    </section>
  )
}
