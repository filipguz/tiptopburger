import { ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useFadeIn from '../hooks/useFadeIn'

const regularHours = [
  { day: 'Mandag', hours: '11:00 – 21:00' },
  { day: 'Tirsdag', hours: '11:00 – 21:00' },
  { day: 'Onsdag', hours: '11:00 – 21:00' },
  { day: 'Torsdag', hours: '11:00 – 21:00' },
  { day: 'Fredag', hours: '11:00 – 21:00' },
  { day: 'Lørdag', hours: '11:00 – 21:00' },
  { day: 'Søndag', hours: '11:00 – 21:00' },
]

const specialHours = [
  { day: 'Julaften (24. des.)', hours: 'STENGT', closed: true },
  { day: '1. juledag (25. des.)', hours: 'STENGT', closed: true },
  { day: '2. juledag (26. des.)', hours: 'STENGT', closed: true },
  { day: 'Nyttårsaften (31. des.)', hours: 'Stenger 15:00', note: true },
  { day: 'Nyttårsdagen (1. jan.)', hours: 'Åpner 14:00', note: true },
]

// Returns the current Norwegian day name for highlighting
function getTodayNorwegian() {
  const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
  return days[new Date().getDay()]
}

export default function Hours() {
  const today = getTodayNorwegian()
  const [ref, isVisible] = useFadeIn()

  return (
    <section id="apningstider" className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            <ClockIcon className="w-4 h-4" />
            Åpningstider
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark">
            Når kan du besøke oss?
          </h2>
          <p className="mt-3 text-stone-500">
            Vi holder åpent alle ukedager – klar til å servere deg!
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 section-fade ${isVisible ? 'visible' : ''}`}
        >
          {/* Regular hours */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="bg-brand-red px-6 py-4 flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-white" />
              <h3 className="text-white font-bold text-lg">Ordinære åpningstider</h3>
            </div>
            <div className="p-2">
              {regularHours.map(({ day, hours }) => {
                const isToday = day === today
                return (
                  <div
                    key={day}
                    className={`flex justify-between items-center px-4 py-3 rounded-xl transition-colors ${
                      isToday
                        ? 'bg-red-50 border border-red-200'
                        : 'hover:bg-stone-50'
                    }`}
                  >
                    <span
                      className={`font-medium ${isToday ? 'text-brand-red font-bold' : 'text-stone-700'}`}
                    >
                      {day}
                      {isToday && (
                        <span className="ml-2 text-xs bg-brand-red text-white px-2 py-0.5 rounded-full font-semibold">
                          I dag
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-semibold ${isToday ? 'text-brand-red' : 'text-stone-600'}`}
                    >
                      {hours}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Special hours + info */}
          <div className="flex flex-col gap-6">
            {/* Special holiday hours */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              <div className="bg-amber-500 px-6 py-4 flex items-center gap-2">
                <ExclamationTriangleIcon className="w-5 h-5 text-white" />
                <h3 className="text-white font-bold text-lg">Helligdager</h3>
              </div>
              <div className="p-2">
                {specialHours.map(({ day, hours, closed, note }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center px-4 py-3 rounded-xl hover:bg-stone-50"
                  >
                    <span className="text-stone-700 font-medium text-sm">{day}</span>
                    <span
                      className={`font-bold text-sm ${
                        closed
                          ? 'text-red-500'
                          : note
                          ? 'text-amber-600'
                          : 'text-stone-600'
                      }`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info card */}
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-6 text-white shadow-lg">
              <div className="text-4xl mb-3">🍔</div>
              <h4 className="font-black text-xl mb-2">Klar for en god burger?</h4>
              <p className="text-red-200 text-sm mb-4 leading-relaxed">
                Kom innom, ring eller bestill online – vi er her for deg
                mandag til søndag.
              </p>
              <a
                href="tel:37931225"
                className="inline-flex items-center gap-2 bg-white text-brand-red font-bold text-sm px-5 py-2.5 rounded-full hover:bg-amber-50 transition-colors"
              >
                📞 37 93 12 25
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
