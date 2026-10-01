import { Linkedin, Instagram } from 'lucide-react'
import { footerLinks } from '../data/content'
import logo from '../assets/images/logo.png'
import useSectionFade from '../hooks/useSectionFade'

export default function Footer() {
  const sectionRef = useSectionFade()

  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <footer
      ref={sectionRef}
      className="scroll-fade-section bg-ink pt-16 pb-8 px-6 md:px-12"
    >
      <div className="container-inner grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        {/* LOGO */}
        <div>
          <img
            src={logo}
            alt="NUVEX Surface Luxury"
            className="w-40 h-auto"
          />
        </div>

        {/* QUICK LINKS */}
        <FooterColumn
          title="Quick Links"
          links={footerLinks.quick}
          onNav={handleNav}
        />

        {/* MORE LINKS */}
        <FooterColumn
          title=""
          links={footerLinks.more}
          onNav={handleNav}
          className="lg:mt-7"
        />

        {/* LEGAL + SOCIAL */}
        <div>
          <FooterColumn
            title=""
            links={footerLinks.legal}
            onNav={handleNav}
          />

          {/* <p className="text-white/50 text-xs tracking-widest2 uppercase mt-8 mb-3">
            Follow Us
          </p> */}

          {/* <div className="flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="
                w-9 h-9
                rounded-full
                border border-white/20
                flex items-center justify-center
                text-white/70
                hover:text-gold
                hover:border-gold
                transition-colors
              "
            >
              <Linkedin size={15} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="
                w-9 h-9
                rounded-full
                border border-white/20
                flex items-center justify-center
                text-white/70
                hover:text-gold
                hover:border-gold
                transition-colors
              "
            >
              <Instagram size={15} />
            </a>
          </div> */}
        </div>
      </div>

      {/* DISCLAIMER */}
      <p
        className="
          text-white/35
          text-[0.68rem]
          leading-relaxed
          max-w-content
          mx-auto
          pt-8
          text-center
        "
      >
        Corporate &amp; Material Disclaimer: NUVEX™ is a premium commercial surface brand operating through established corporate distribution and strategic management frameworks. Product specifications and compliance references are subject to verified manufacturing standards. All material descriptions, compliance highlights (including
        ISO, CE, and GREENGUARD parameters), and technical references
        correspond strictly to the baseline manufacturing standards of our
        verified production and sourcing supply lines. Technical datasheets and
        specific factory certification logs are available strictly upon formal
        corporate documentation and supply agreement.
      </p>

      {/* COPYRIGHT */}
      <p className="text-white/30 text-xs text-center mt-6">
        © {new Date().getFullYear()} NUVEX Surface Luxury. All rights reserved.
      </p>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
  onNav,
  className = '',
}) {
  return (
    <div className={className}>
      {title && (
        <p className="text-white/50 text-xs tracking-widest2 uppercase mb-4">
          {title}
        </p>
      )}

      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                onNav(l.href)
              }}
              className="
                text-white/70
                text-sm
                hover:text-gold
                transition-colors
              "
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}