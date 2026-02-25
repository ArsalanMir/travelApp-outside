'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../ui/Button'

function slideBackground(slide, isActive) {
  const base = 'absolute inset-0 transition-all duration-[1400ms] ease-out'
  const visibility = isActive ? 'opacity-100' : 'opacity-0'
  const scale = isActive ? 'scale-100' : 'scale-110'

  if (slide.image) {
    const imageUrl = slide.image?.src || slide.image

    return (
      <div
        className={`${base} ${visibility} ${scale} bg-cover bg-center`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden={!isActive}
      />
    )
  }

  return (
    <div
      className={`${base} ${visibility} ${scale} bg-gradient-to-br from-[#5CE65C] via-green-400 to-[#417e38]`}
      aria-hidden={!isActive}
    />
  )
}

export default function HomeCarousel({ slides }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!slides.length) return undefined

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [slides.length])

  if (!slides.length) return null

  return (
    <section className="relative overflow-hidden border-y border-green-200 shadow-sm">
      <div className="relative h-[calc(100vh-72px)] min-h-[560px] sm:min-h-[620px] md:h-[calc(100vh-80px)]">
        {slides.map((slide, idx) => (
          <div key={slide.id}>
            {slideBackground(slide, idx === current)}
            <div
              className={`absolute inset-0 bg-black/35 transition-opacity duration-700 ${
                idx === current ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={idx !== current}
            />
          </div>
        ))}

        <div className="absolute inset-x-0 top-0 p-5 sm:p-8 md:p-12">
          <h1
            key={`title-${slides[current].id}`}
            className="max-w-3xl animate-[fadeUp_.6s_ease-out] text-3xl font-extrabold text-white drop-shadow sm:text-5xl md:text-6xl"
          >
            {slides[current].title}
          </h1>
          <p
            key={`sub-${slides[current].id}`}
            className="mt-3 max-w-2xl animate-[fadeUp_.8s_ease-out] text-base text-white/95 sm:text-xl"
          >
            {slides[current].subtitle}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center gap-3 px-4 sm:bottom-12 sm:flex-row">
          <Link href="/packages">
            <PrimaryButton className="min-w-44 shadow-lg">Explore Packages</PrimaryButton>
          </Link>
          <Link href="/contact">
            <SecondaryButton className="min-w-44 shadow-lg">Contact Us</SecondaryButton>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-4">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === current ? 'w-6 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
