import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { label: 'Hjem', href: '#hjem' },
  { label: 'Om oss', href: '#om-oss' },
  { label: 'Meny', href: '#meny' },
  { label: 'Åpningstider', href: '#apningstider' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hjem"
          className={`flex items-center gap-2 font-black text-xl tracking-tight transition-colors ${
            scrolled ? 'text-brand-dark' : 'text-white'
          }`}
        >
          <span className="text-2xl">🍔</span>
          <span>
            Tip Top{' '}
            <span className={scrolled ? 'text-brand-red' : 'text-amber-400'}>
              Burgers
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                scrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://getfood.no/tiptopburger/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-brand-red hover:bg-red-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Bestill nå
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Åpne meny"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden animate-slide-down bg-white shadow-xl border-t border-stone-100">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-stone-700 font-medium py-3 px-3 rounded-lg hover:bg-amber-50 hover:text-brand-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://getfood.no/tiptopburger/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 bg-brand-red text-white font-semibold py-3 px-4 rounded-full text-center hover:bg-red-800 transition-colors"
            >
              Bestill nå 🍔
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
