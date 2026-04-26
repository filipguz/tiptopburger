import { FireIcon } from '@heroicons/react/24/solid'
import useFadeIn from '../hooks/useFadeIn'

const dishes = [
  {
    name: 'Den originale Snadderloffen',
    description: 'Vår signaturrett siden 1985. Grillet kjøtt, hjemmelaget saus og friske grønnsaker i vår hemmelige brødoppskrift.',
    price: 'fra kr 79',
    emoji: '🌭',
    badge: 'Signaturrett',
    badgeColor: 'bg-amber-500',
    image: '/snadderloff.jpeg',
  },
  {
    name: 'Klassisk Hamburger',
    description: 'Saftig hamburger med ferske råvarer, hjemmelaget dressing og sprøstekt løk. Serveres med pommes frites.',
    price: 'fra kr 89',
    emoji: '🍔',
    badge: 'Bestselger',
    badgeColor: 'bg-brand-red',
    image: '/BurgerKvadratisk.png',
  },
  {
    name: 'Løvbiffsnadder',
    description: 'Møre, tynne skiver løvbiff med sautert løk, paprika og hjemmelaget saus. En skikkelig klassiker.',
    price: 'fra kr 119',
    emoji: '🥩',
    badge: 'Husets favoritt',
    badgeColor: 'bg-orange-600',
    image: '/lovbiff.jpeg',
  },
]

export default function PopularDishes() {
  const [ref, isVisible] = useFadeIn()

  return (
    <section className="py-20 bg-white" id="populaere">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            <FireIcon className="w-4 h-4" />
            Populære retter
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark">
            Gjestenes favoritter
          </h2>
          <p className="mt-3 text-stone-500 max-w-lg mx-auto">
            Disse rettene har holdt folk tilbake til oss i over 40 år.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 stagger section-fade ${isVisible ? 'visible' : ''}`}
        >
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-stone-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className={`absolute top-4 left-4 ${dish.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
                >
                  {dish.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-brand-dark leading-snug">
                    {dish.name}
                  </h3>
                  <span className="text-2xl flex-shrink-0">{dish.emoji}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-red font-bold text-lg">{dish.price}</span>
                  <a
                    href="https://getfood.no/tiptopburger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-800 transition-colors"
                  >
                    Bestill
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
