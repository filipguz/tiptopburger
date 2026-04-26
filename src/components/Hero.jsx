import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/tiptop01.jpg')",
        }}
      />

      {/* Layered gradient overlay – warm dark tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          <span>⭐</span>
          <span>Siden 1985 – originale smaker fra Evje</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-up">
          Velkommen til{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Tip Top Burgers
          </span>{' '}
          &amp; Sånt
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium mb-10 animate-fade-up" style={{ animationDelay: '150ms' }}>
          Kjente burgere og den originale snadderloffen siden 1985
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '300ms' }}>
          <a
            href="https://getfood.no/tiptopburger/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-red-900/40 hover:shadow-xl hover:shadow-red-900/50 hover:-translate-y-1"
          >
            Bestill nå
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#meny"
            className="flex items-center gap-2 border-2 border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200"
          >
            Se meny
          </a>
        </div>

        {/* Quick stats */}
        <div
          className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-up"
          style={{ animationDelay: '450ms' }}
        >
          {[
            { value: '1985', label: 'Grunnlagt' },
            { value: '11–21', label: 'Åpent hver dag' },
            { value: '37 93 12 25', label: 'Ring oss' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-amber-400 font-black text-lg sm:text-xl">{stat.value}</div>
              <div className="text-white/60 text-xs sm:text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
