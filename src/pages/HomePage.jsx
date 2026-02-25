'use client'

import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import HomeCarousel from '../components/home/HomeCarousel'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'
import aboutPreviewImage from '../assets/about_us_1.avif'
import home4 from '../assets/home_4.avif'
import { homeCarouselSlides } from '../data/homeCarouselSlides'
import { packages } from '../data/packages'

const featuredCards = packages.slice(0, 4).map((pkg) => ({
  title: pkg.name,
  days: pkg.duration,
  price: pkg.price,
  image: pkg.image,
}))

const serviceHighlights = [
  { title: '30+', description: 'Years of local travel expertise', tone: 'bg-green-300 text-[#163a0f]' },
  { title: '40k+', description: 'Happy travelers served with trust', tone: 'bg-[#1f57b8] text-white' },
  { title: 'Easy', description: 'Booking experience with full support', tone: 'bg-[#1f57b8] text-white' },
  { title: 'Best', description: 'Tour guide network across major routes', tone: 'bg-[#1f57b8] text-white' },
]

export default function HomePage() {
  const [quickForm, setQuickForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  function handleQuickFormChange(event) {
    const { name, value } = event.target
    setQuickForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleQuickFormSubmit(event) {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    setIsSubmitting(true)

    try {
      const templateParams = {
        name: quickForm.name,
        from_name: quickForm.name,
        email: quickForm.email,
        from_email: quickForm.email,
        reply_to: quickForm.email,
        phone: '',
        destination: '',
        destination_interest: '',
        message: quickForm.message,
        time: new Date().toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus({ type: 'success', message: 'Message sent successfully.' })
      setQuickForm({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="space-y-12 pb-12 sm:space-y-14 sm:pb-14">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <HomeCarousel slides={homeCarouselSlides} />
      </div>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#417e38] sm:text-4xl">Our Popular Package</h2>
        <p className="mt-2 text-sm text-slate-500">Choose your next journey from our handpicked experiences</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={card.image?.src || card.image} alt={card.title} className="h-48 w-full object-cover transition duration-700 hover:scale-105" />
              <div className="p-3 text-left">
                <p className="text-sm font-semibold text-slate-900">{card.title}</p>
                <p className="mt-1 text-xs text-slate-500">{card.days}</p>
                <p className="mt-1 text-xs font-semibold text-[#417e38]">{card.price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/packages">
            <PrimaryButton>Explore More</PrimaryButton>
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-green-200 bg-white shadow-sm">
        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="group relative overflow-hidden">
            <img src={aboutPreviewImage?.src || aboutPreviewImage} alt="North Grace Travellers scenic destination" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80 md:h-full" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
          </div>
          <div className="flex items-center bg-gradient-to-br from-white via-green-50 to-white p-6 sm:p-8 md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#417e38]">About Us</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">We don't just plan trips, we create stories.</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                North Grace Travellers builds unforgettable journeys across Kashmir and the majestic North with comfort,
                transparency, and zero stress.
              </p>
              <div className="mt-5">
                <Link href="/about">
                  <SecondaryButton>Read More About Us</SecondaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="rounded-3xl border border-green-100 bg-[#eef4ff] p-5 sm:p-8">
        <h3 className="text-center text-2xl font-bold text-[#417e38] sm:text-3xl">Experience and Service</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1.3fr]">
          <img src={home4?.src || home4} alt="Travel service" className="h-64 w-full rounded-2xl object-cover md:h-full" />
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div key={item.title} className={`rounded-2xl p-4 ${item.tone}`}>
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-hero animate-fade-up animate-delay-100 relative overflow-hidden rounded-3xl p-5 text-white sm:p-8 lg:p-10">
        <div className="contact-blob-a" />
        <div className="contact-blob-b" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">Quick Contact</p>
            <h3 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Plan Your Trip In Minutes</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
              Share your destination and dates, and our team will send a custom package built for your budget and comfort.
            </p>
            <div className="mt-5 grid max-w-xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/15 px-3 py-3 backdrop-blur">
                <p className="text-lg font-bold">24/7</p>
                <p className="text-xs text-blue-100">Support</p>
              </div>
              <div className="rounded-2xl bg-white/15 px-3 py-3 backdrop-blur">
                <p className="text-lg font-bold">40k+</p>
                <p className="text-xs text-blue-100">Travelers</p>
              </div>
              <div className="rounded-2xl bg-white/15 px-3 py-3 backdrop-blur">
                <p className="text-lg font-bold">Fast</p>
                <p className="text-xs text-blue-100">Response</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleQuickFormSubmit} className="animate-fade-up animate-delay-200 rounded-3xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-6">
            <h4 className="text-xl font-bold text-slate-900 sm:text-2xl">Contact Us</h4>
            <p className="mt-1 text-sm text-slate-600">We usually reply within a few hours.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={quickForm.name}
                onChange={handleQuickFormChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#417e38] focus:ring-2 focus:ring-green-100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={quickForm.email}
                onChange={handleQuickFormChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#417e38] focus:ring-2 focus:ring-green-100"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={quickForm.message}
                onChange={handleQuickFormChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#417e38] focus:ring-2 focus:ring-green-100 sm:col-span-2"
                required
              />
            </div>
            {status.message && (
              <p
                className={`mt-3 rounded-lg px-3 py-2 text-sm ${
                  status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {status.message}
              </p>
            )}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <PrimaryButton type="submit" className="w-full bg-[#417e38] py-2.5 text-sm hover:bg-[#35692f] sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </PrimaryButton>
              <Link href="/contact" className="w-full sm:w-auto">
                <SecondaryButton className="w-full border-slate-300 text-slate-700 hover:bg-slate-100">Open Full Contact Page</SecondaryButton>
              </Link>
            </div>
          </form>
        </div>
      </section>

    </section>
  )
}
