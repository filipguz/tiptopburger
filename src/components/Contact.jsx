import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'
import useFadeIn from '../hooks/useFadeIn'

// Simple inline SVG icons for social media (heroicons doesn't include brand icons)
const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
)

export default function Contact() {
  const [ref, isVisible] = useFadeIn()

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            <span>📍</span> Finn oss
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark">
            Kontakt & kart
          </h2>
          <p className="mt-3 text-stone-500 max-w-lg mx-auto">
            Vi ligger midt i Evje sentrum – lett å finne, vanskelig å forlate.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 section-fade ${isVisible ? 'visible' : ''}`}
        >
          {/* Contact info column */}
          <div className="flex flex-col gap-6">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:37931225"
                className="group flex items-start gap-4 bg-stone-50 hover:bg-red-50 hover:border-red-200 rounded-2xl p-5 border border-transparent transition-all"
              >
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-1">
                    Telefon
                  </div>
                  <div className="text-brand-dark font-bold group-hover:text-brand-red transition-colors">
                    37 93 12 25
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-stone-50 rounded-2xl p-5">
                <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-1">
                    Adresse
                  </div>
                  <div className="text-brand-dark font-bold leading-snug">
                    Evje sentrum<br />
                    <span className="font-normal text-stone-500 text-sm">
                      Vis-à-vis Pernille Kafé
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-stone-50 rounded-2xl p-5">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-1">
                    Åpningstider
                  </div>
                  <div className="text-brand-dark font-bold">
                    Man – Søn
                  </div>
                  <div className="text-stone-500 text-sm">11:00 – 21:00</div>
                </div>
              </div>

              <a
                href="https://getfood.no/tiptopburger/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-red-50 hover:bg-red-100 rounded-2xl p-5 border border-red-100 transition-colors"
              >
                <div className="text-3xl">🛒</div>
                <div>
                  <div className="text-xs text-red-400 font-medium uppercase tracking-wider mb-1">
                    Bestill online
                  </div>
                  <div className="text-brand-red font-bold text-sm">
                    getfood.no/<br />tiptopburger
                  </div>
                </div>
              </a>
            </div>

            {/* Social media */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-7 text-white">
              <h3 className="font-black text-xl mb-2">Følg oss!</h3>
              <p className="text-stone-400 text-sm mb-5 leading-relaxed">
                Følg oss på sosiale medier for nyheter, tilbud og deilige bilder av mat.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map column */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-96 lg:h-auto min-h-80 border border-stone-200">
            <iframe
              src="https://maps.google.com/maps?q=Evje+sentrum,+4735+Evje,+Norway&t=m&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tip Top Burgers & Sånt – Kart over Evje sentrum"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
