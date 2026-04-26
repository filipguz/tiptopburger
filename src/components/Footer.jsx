const footerLinks = [
  { label: 'Hjem', href: '#hjem' },
  { label: 'Om oss', href: '#om-oss' },
  { label: 'Meny', href: '#meny' },
  { label: 'Åpningstider', href: '#apningstider' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-black text-xl mb-4">
              <span className="text-2xl">🍔</span>
              <span>
                Tip Top{' '}
                <span className="text-amber-400">Burgers</span>
                {' '}&amp; Sånt
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Kjente burgere og den originale snadderloffen siden 1985.
              Midt i Evje sentrum – alltid åpent for deg.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-stone-400 mb-4">
              Navigasjon
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-stone-400 mb-4">
              Kontakt oss
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-stone-400">
                <span>📞</span>
                <a href="tel:37931225" className="hover:text-amber-400 transition-colors">
                  37 93 12 25
                </a>
              </li>
              <li className="flex items-start gap-2 text-stone-400">
                <span className="mt-0.5">📍</span>
                <span>Evje sentrum, vis-à-vis Pernille Kafé</span>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <span>🕐</span>
                <span>Man–Søn: 11:00 – 21:00</span>
              </li>
            </ul>

            <div className="mt-5">
              <a
                href="https://getfood.no/tiptopburger/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                Bestill online →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Tip Top Burgers &amp; Sånt. Alle rettigheter forbeholdt.
          </p>
          <p className="text-stone-600 text-xs">
            Den originale snadderloffen siden 1985 🌭
          </p>
        </div>
      </div>
    </footer>
  )
}
