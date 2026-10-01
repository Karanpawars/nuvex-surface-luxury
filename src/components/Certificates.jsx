import React from 'react'
import { Globe2, Leaf, ShieldCheck, BadgeCheck, FlaskConical } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const certificates = [
  {
    title: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: Globe2,
  },
  {
    title: 'ISO 14001',
    description: 'Environmental Management',
    icon: Leaf,
  },
  {
    title: 'GREENGUARD',
    description: 'Certified for Low Chemical Emissions',
    icon: ShieldCheck,
  },
  {
    title: 'CE MARKING',
    description: 'European Conformity',
    icon: BadgeCheck,
  },
  {
    title: 'REACH',
    description: 'Chemical Safety Compliance',
    icon: FlaskConical,
  },
]

export default function Certificates() {
  const certificateRef = useReveal('.certificate-reveal', { stagger: 0.1 })

  return (
    <section
      ref={certificateRef}
  id="certificates"
      className="relative overflow-hidden bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="certificate-reveal mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-5 text-xs font-medium tracking-[0.35em] text-[#c9a96e]">
            QUALITY & COMPLIANCE
          </p>

          <h2 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
            Certified for the world
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">
            Built around rigorous quality standards, environmental
            responsibility and internationally recognised compliance
            requirements.
          </p>
        </div>

        {/* CERTIFICATES */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon

            return (
              <div
                key={index}
                className="certificate-reveal group relative flex min-h-[280px] flex-col justify-between bg-[#171717] p-7 transition-all duration-500 hover:bg-[#222]"
              >

                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center border border-[#c9a96e]/40 text-[#c9a96e] transition-all duration-500 group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#171717]">
                  <Icon size={25} strokeWidth={1.2} />
                </div>

                {/* NUMBER */}
                <span className="absolute right-6 top-6 text-xs tracking-widest text-white/20">
                  0{index + 1}
                </span>

                {/* CONTENT */}
                <div>
                  <div className="mb-3 h-px w-8 bg-[#c9a96e] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-lg font-light tracking-wide">
                    {certificate.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    {certificate.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* BOTTOM LINE */}
        <div className="certificate-reveal mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-[10px] tracking-[0.3em] text-white/35">
            QUALITY • PERFORMANCE • RESPONSIBILITY • COMPLIANCE
          </p>
        </div>

      </div>
    </section>
  )
}