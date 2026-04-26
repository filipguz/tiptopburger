import { CheckCircleIcon } from '@heroicons/react/24/solid'
import useFadeIn from '../hooks/useFadeIn'

const highlights = [
  'Den originale snadderloffen – oppfunnet i 1985, fortsatt original',
  'Hamburger, biffsnadder, pizza, kylling og pita',
  'Sommer: is, softis, milkshake og kuleis',
  'Gratis hjemlevering ved store pizza-bestillinger',
  'Midt i Evje sentrum – lett å finne!',
]

export default function About() {
  const [refText, visText] = useFadeIn()
  const [refImg, visImg] = useFadeIn()

  return (
    <section id="om-oss" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image side */}
          <div
            ref={refImg}
            className={`section-fade ${visImg ? 'visible' : ''}`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Interiør Tip Top Burgers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating badge – "Siden 1985" */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-red text-white rounded-2xl shadow-xl px-6 py-4 text-center">
                <div className="text-3xl font-black leading-none">1985</div>
                <div className="text-xs font-semibold mt-1 text-red-200 uppercase tracking-wider">
                  Siden
                </div>
              </div>

              {/* Floating tag – address */}
              <div className="absolute -top-5 -left-4 md:-left-6 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2">
                <span className="text-xl">📍</span>
                <div>
                  <div className="text-xs text-stone-400 font-medium">Vi er her</div>
                  <div className="text-sm font-bold text-brand-dark">Evje sentrum</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            ref={refText}
            className={`section-fade ${visText ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">
              <span>🍔</span> Vår historie
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-brand-dark leading-tight mb-6">
              Et smakfullt hjørne{' '}
              <span className="text-brand-red">midt i Evje</span>
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed mb-8">
              <p>
                Tip Top Burgers &amp; Sånt ligger midt i hjertet av Evje sentrum,
                vis-à-vis Pernille Kafé. Vi har vært en institusjon i Evje i over
                40 år og er kjent for burgere og ikke minst vår{' '}
                <strong className="text-brand-dark">legendære snadderloffen</strong>.
              </p>
              <p>
                Snadderloffen ble oppfunnet av oss i 1985 og serveres den dag i dag
                nøyaktig slik den alltid har vært. En original oppskrift, originale
                smaker – det er hemmeligheten vår.
              </p>
              <p>
                Vi tilbyr en variert meny for hele familien, og om sommeren kan du
                nyte fersk softis, milkshake og kuleis rett fra disken.
              </p>
            </div>

            {/* Feature list */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
