import { ArrowRightIcon, TruckIcon } from '@heroicons/react/24/solid'
import useFadeIn from '../hooks/useFadeIn'

export default function OrderCTA() {
  const [ref, isVisible] = useFadeIn()

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/oversikt01.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/90 to-orange-800/80" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 text-center section-fade ${isVisible ? 'visible' : ''}`}
      >
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>🚀</span> Enkel og rask online-bestilling
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Bestill mat – vi{' '}
          <span className="text-amber-400">fikser resten</span>
        </h2>

        <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto">
          Bestill enkelt via getfood.no. Velg blant alle våre retter og få
          maten klar til deg.
        </p>

        {/* Home delivery note */}
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-200 text-sm font-medium px-4 py-2 rounded-full mb-10">
          <TruckIcon className="w-4 h-4" />
          Gratis hjemlevering ved store pizza-bestillinger!
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://getfood.no/tiptopburger/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-white text-brand-red font-black text-lg px-10 py-4 rounded-full hover:bg-amber-50 transition-all duration-200 shadow-xl hover:-translate-y-1"
          >
            Bestill nå på getfood.no
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:37931225"
            className="flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200"
          >
            📞 Ring oss
          </a>
        </div>
      </div>
    </section>
  )
}
