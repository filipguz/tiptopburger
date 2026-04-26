import useFadeIn from '../hooks/useFadeIn'

const photos = [
  { src: '/burger02.jpeg', alt: 'Saftig burger fra Tip Top' },
  { src: '/burger03.jpeg', alt: 'Hjemmelaget burger med tilbehør' },
  { src: '/snadderloff.jpeg', alt: 'Den originale snadderloffen' },
  { src: '/lovbiff.jpeg', alt: 'Løvbiffsnadder' },
]

export default function Gallery() {
  const [ref, isVisible] = useFadeIn(0.05)

  return (
    <section className="py-16 bg-stone-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            <span>📸</span> Galleriet vårt
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Mat laget med hjerte
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 section-fade ${isVisible ? 'visible' : ''}`}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`overflow-hidden rounded-2xl group ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
