'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus({ type: 'success', message: 'Message sent successfully.' })
      setFormData({ name: '', email: '', phone: '', destination: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleReset() {
    setFormData({ name: '', email: '', phone: '', destination: '', message: '' })
    setStatus({ type: '', message: '' })
  }

  return (
    <section className="space-y-8 py-6 sm:space-y-10 sm:py-10">
      <section className="contact-hero animate-fade-up relative overflow-hidden rounded-3xl p-5 text-white sm:p-8 lg:p-10">
        <div className="contact-blob-a" />
        <div className="contact-blob-b" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">North Grace Travellers</p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Let&apos;s Build Your Next Journey</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
              Drop your details, share your dream destination, and our team will craft a premium travel plan with clear pricing and full support.
            </p>
            <div className="mt-5 grid max-w-xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/15 px-3 py-3 backdrop-blur">
                <p className="text-lg font-bold">24/7</p>
                <p className="text-xs text-blue-100">Response support</p>
              </div>
              <div className="rounded-2xl bg-white/15 px-3 py-3 backdrop-blur">
                <p className="text-lg font-bold">40k+</p>
                <p className="text-xs text-blue-100">Travelers served</p>
              </div>
              <div className="rounded-2xl bg-white/15 px-3 py-3 backdrop-blur">
                <p className="text-lg font-bold">100%</p>
                <p className="text-xs text-blue-100">Custom itineraries</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} onReset={handleReset} className="animate-fade-up animate-delay-100 rounded-3xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-6">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Contact Us</h2>
            <p className="mt-1 text-sm text-slate-600">Tell us your plan and get a personalized itinerary.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#417e38] focus:ring-2 focus:ring-green-100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#417e38] focus:ring-2 focus:ring-green-100"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#417e38] focus:ring-2 focus:ring-green-100 sm:col-span-2"
              />
              <input
                type="text"
                name="destination"
                placeholder="Destination of Interest"
                value={formData.destination}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#417e38] focus:ring-2 focus:ring-green-100 sm:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
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
              <SecondaryButton type="reset" className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 sm:w-auto" disabled={isSubmitting}>
                Reset
              </SecondaryButton>
            </div>
          </form>
        </div>
      </section>

      <section className="animate-fade-up animate-delay-200 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-green-200 bg-green-50 p-5 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2f6b2a]">Office Hours</p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">Always Ready</h3>
          <p className="mt-2 text-sm text-slate-700">Monday to Sunday, 9:00 AM - 10:00 PM with quick response support.</p>
        </article>
        <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1748a5]">Email Support</p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">info@northgrace.com</h3>
          <p className="mt-2 text-sm text-slate-700">Share your travel details and we will send a custom quote.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Call Us</p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">+92 300 0000000</h3>
          <p className="mt-2 text-sm text-slate-700">Talk directly with our consultant for route and budget guidance.</p>
        </article>
      </section>
    </section>
  )
}
