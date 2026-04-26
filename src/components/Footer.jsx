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
          <div className="flex items-center gap-3">
            <p className="text-stone-600 text-xs">
              Den originale snadderloffen siden 1985 🌭
            </p>
            <span className="text-stone-700 text-xs">·</span>
            <a
              href="https://github.com/filipguz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-amber-400 text-xs transition-colors flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Laget av filipguz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
