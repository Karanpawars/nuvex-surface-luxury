import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import logo from '../assets/images/logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)

    // If already on Home page, smoothly scroll to section
    if (isHomePage) {
      const el = document.querySelector(href)

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      return
    }

    // If on another page, go back to Home first
    navigate('/')

    // Wait for HomePage to render before scrolling
    setTimeout(() => {
      const el = document.querySelector(href)

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  const handleLogoClick = () => {
    setOpen(false)

    if (!isHomePage) {
      navigate('/')
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <header
      className={`fixed border-b border-white/10 top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container-inner flex items-center justify-between px-6 md:px-12 h-20">
        <Link to="/" onClick={(e) => {
            e.preventDefault()
            handleLogoClick()
          }} className="flex flex-col leading-none">
          {/* <span className="font-display text-2xl md:text-3xl tracking-widest2 text-white">
            NUVEX<span className="align-super text-[0.5em] text-gold">™</span>
          </span>
          <span className="text-[0.55rem] md:text-[0.6rem] tracking-widest2 uppercase text-gold/80 mt-0.5">
            Surface Luxury
          </span> */}
          <img
            src={logo}
            alt="NUVEX Surface Luxury"
            className="w-40 h-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="text-xs tracking-widest2 uppercase text-white/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
          className="hidden lg:inline-flex btn-gold"
        >
          Get In Touch
        </Link>

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
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="text-sm tracking-widest2 uppercase text-white/85 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="btn-gold justify-center mt-2"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  )
}