import { useState } from 'react'
import useFadeIn from '../hooks/useFadeIn'

const categories = [
  {
    id: 'snadder',
    label: 'Snadderloffen',
    emoji: '🌭',
    items: [
      { name: 'Original Snadderloffen', desc: 'Den ekte, originale oppskriften fra 1985', price: 'kr 79' },
      { name: 'Stor Snadderloffen', desc: 'Dobbel fylling, ekstra saus', price: 'kr 99' },
      { name: 'Snadderloffen Deluxe', desc: 'Med bacon, ost og karamellisert løk', price: 'kr 109' },
    ],
  },
  {
    id: 'burger',
    label: 'Burgere',
    emoji: '🍔',
    items: [
      { name: 'Klassisk Hamburger', desc: 'Hjemmelaget dressing, sprøstekt løk, salat og tomat', price: 'kr 89' },
      { name: 'Cheeseburger', desc: 'Med smeltet cheddar og dill-pickles', price: 'kr 99' },
      { name: 'Dobbel Cheeseburger', desc: 'To saftige kjøttpålegg, dobbel ost', price: 'kr 129' },
      { name: 'Bacon Lover', desc: 'Sprøstekt bacon, BBQ-saus og jalapeños', price: 'kr 129' },
      { name: 'Spicy Jalapeño Burger', desc: 'Krydret saus, jalapeños og pepper-ost', price: 'kr 119' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    emoji: '🍕',
    items: [
      { name: 'Margherita', desc: 'Tomatsaus, fersk mozzarella, basilikum', price: 'kr 159' },
      { name: 'Pepperoni', desc: 'Rik tomatsaus, pepperoni og ost', price: 'kr 169' },
      { name: 'BBQ Kylling', desc: 'BBQ-saus, grillet kylling, rødløk og ost', price: 'kr 179' },
      { name: 'Storpizza (2–3 pers.)', desc: 'Valgfri topping, gratis hjemlevering!', price: 'kr 269', badge: 'Gratis levering' },
    ],
  },
  {
    id: 'kylling',
    label: 'Kylling',
    emoji: '🍗',
    items: [
      { name: 'Grillet Kyllingfilet', desc: 'Med pommes frites og salat', price: 'kr 109' },
      { name: 'Kylling Wrap', desc: 'Krydret kylling, grønnsaker og dressing i tortilla', price: 'kr 99' },
      { name: 'Kyllingstrips', desc: 'Sprøstekte strips med dip, 6 stk.', price: 'kr 89' },
    ],
  },
  {
    id: 'pita',
    label: 'Pita & Biffsnadder',
    emoji: '🥙',
    items: [
      { name: 'Kyllingpita', desc: 'Grillet kylling, friske grønnsaker og tzatziki', price: 'kr 99' },
      { name: 'Kebabpita', desc: 'Saftig kebab, salat, tomat og hvitløkssaus', price: 'kr 109' },
      { name: 'Vegetarisk Pita', desc: 'Grillet grønnsaker, hummus og feta', price: 'kr 89' },
      { name: 'Original Biffsnadder', desc: 'Tynne skiver biff, saus og løk i snadderbrod', price: 'kr 119' },
      { name: 'Dobbel Biffsnadder', desc: 'Ekstra biff, sprøstekt løk og rødvin-saus', price: 'kr 149' },
    ],
  },
  {
    id: 'is',
    label: 'Is & Drikke',
    emoji: '🍦',
    badge: 'Sommer',
    items: [
      { name: 'Softis', desc: 'Klassisk hvit eller sjokolade – eller twist!', price: 'kr 39' },
      { name: 'Milkshake', desc: 'Vanilje, jordbær eller sjokolade', price: 'kr 59' },
      { name: 'Kuleis', desc: 'Utvalg av is fra kjøledisken', price: 'fra kr 29' },
      { name: 'Softdrikk', desc: 'Cola, Sprite, Solo, Farris og mer', price: 'kr 39' },
    ],
  },
]

export default function Menu() {
  const [activeTab, setActiveTab] = useState('snadder')
  const [ref, isVisible] = useFadeIn()

  const activeCategory = categories.find((c) => c.id === activeTab)

  return (
    <section id="meny" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            <span>📋</span> Vår meny
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark">
            Noe for enhver smak
          </h2>
          <p className="mt-3 text-stone-500 max-w-lg mx-auto">
            Fra den originale snadderloffen til fersk pizza – vi har det du trenger.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-brand-red text-white shadow-md shadow-red-200'
                  : 'bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-brand-dark'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
              {cat.badge && (
                <span className="ml-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full leading-none">
                  {cat.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div
          key={activeTab}
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in"
        >
          {activeCategory?.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-4 bg-stone-50 hover:bg-amber-50 rounded-2xl p-5 transition-colors group border border-transparent hover:border-amber-200"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-brand-dark">{item.name}</h3>
                  {item.badge && (
                    <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-brand-red font-bold text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full menu CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://getfood.no/tiptopburger/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Bestill online
            <span>→</span>
          </a>
          <a
            href="/meny_Tip_Top_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 font-bold px-8 py-4 rounded-full transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
          >
            <span>📄</span>
            Last ned meny (PDF)
          </a>
        </div>
        <p className="text-center text-stone-400 text-sm mt-4">
          Priser kan variere. Se oppdatert meny på getfood.no
        </p>
      </div>
    </section>
  )
}
