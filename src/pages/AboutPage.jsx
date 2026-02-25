import SectionHeading from '../components/ui/SectionHeading'
import aboutPreviewImage from '../assets/about_us_1.avif'
import valleyImage from '../assets/home_2.avif'

const differentiators = [
  'Powerful, well-designed travel packages',
  'Handpicked hotels with quality comfort',
  'Reliable cab services and professional drivers',
  'Complete end-to-end trip management',
  'Affordable pricing with premium experience',
  '24/7 support throughout your journey',
]

const highlights = [
  { value: '30+', label: 'Years of expertise', tone: 'bg-green-300 text-[#163a0f]' },
  { value: '40k+', label: 'Happy travelers', tone: 'bg-[#1f57b8] text-white' },
  { value: '24/7', label: 'Journey support', tone: 'bg-[#1f57b8] text-white' },
]

export default function AboutPage() {
  return (
    <section className="space-y-8 py-8 sm:space-y-10 sm:py-10">
      <div className="animate-fade-up">
        <SectionHeading
          title="About North Grace Travellers"
          description="We don't just plan trips. We create stories. At North Grace Travellers, travel is an experience crafted with passion, precision, and purpose."
        />
      </div>

      <section className="animate-fade-up animate-delay-100 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-sm">
        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="group relative overflow-hidden">
            <img
              src={aboutPreviewImage?.src || aboutPreviewImage}
              alt="Scenic valley destination"
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80 md:h-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
          </div>
          <div className="flex items-center bg-gradient-to-br from-white via-green-50 to-white p-5 sm:p-8 md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#417e38]">Our Story</p>
              <h3 className="mt-2 text-xl font-bold leading-tight text-slate-900 sm:text-3xl">Built for travelers who want peace of mind</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Born from a love for mountains and a mission to make dream destinations affordable, we create
                unforgettable journeys across Kashmir and the majestic North with comfort and clarity.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                From planning to return, every detail is managed by our team so your trip feels smooth, memorable,
                and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-up animate-delay-200 rounded-3xl border border-green-100 bg-[#eef4ff] p-4 sm:p-8">
        <h3 className="text-center text-xl font-bold text-[#417e38] sm:text-3xl">What Makes Us Different?</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {differentiators.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-fade-up animate-delay-200 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5 transition-transform duration-300 hover:-translate-y-1">
          <h3 className="font-semibold text-[#2f6b2a]">Our Philosophy</h3>
          <p className="mt-2 text-sm text-slate-700">Travel should feel magical, safe, and effortless with balanced itineraries and clear planning.</p>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 transition-transform duration-300 hover:-translate-y-1">
          <h3 className="font-semibold text-[#1748a5]">Our Mission</h3>
          <p className="mt-2 text-sm text-slate-700">Deliver premium travel experiences at honest prices with transparency and reliable service.</p>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
          <h3 className="font-semibold text-[#1748a5]">Our Vision</h3>
          <p className="mt-2 text-sm text-slate-700">Become the most trusted travel brand for unforgettable journeys across the North.</p>
        </div>
      </section>

      <section className="animate-fade-up animate-delay-300 overflow-hidden rounded-3xl bg-[#1748a5] p-5 text-white sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
          <img src={valleyImage?.src || valleyImage} alt="Mountain valley" className="h-52 w-full rounded-2xl object-cover sm:h-64" />
          <div>
            <h3 className="text-xl font-bold sm:text-3xl">Experience the North with confidence</h3>
            <p className="mt-2 text-sm text-blue-100">Trusted support, strong local network, and journeys designed around your comfort.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className={`rounded-2xl px-4 py-3 transition-transform duration-300 hover:-translate-y-1 ${item.tone}`}>
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="mt-1 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
