import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import logo from '../assets/images/logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed border-b border-white/10 top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container-inner flex items-center justify-between px-6 md:px-12 h-20">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex flex-col leading-none">
          {/* <span className="font-display text-2xl md:text-3xl tracking-widest2 text-white">
            NUVEX<span className="align-super text-[0.5em] text-gold">™</span>
          </span>
          <span className="text-[0.55rem] md:text-[0.6rem] tracking-widest2 uppercase text-gold/80 mt-0.5">
            Surface Luxury
          </span> */}
          <img
            src={logo}
            alt=""
            className="w-40 h-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="text-xs tracking-widest2 uppercase text-white/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
          className="hidden lg:inline-flex btn-gold"
        >
          Get In Touch
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="text-sm tracking-widest2 uppercase text-white/85 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="btn-gold justify-center mt-2"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  )
}
