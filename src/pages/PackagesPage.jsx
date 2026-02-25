'use client'

import { useMemo, useState } from 'react'
import PackageCard from '../components/packages/PackageCard'
import SectionHeading from '../components/ui/SectionHeading'
import { packages } from '../data/packages'

export default function PackagesPage() {
  const categories = useMemo(() => ['All', ...new Set(packages.map((pkg) => pkg.category))], [])
  const [activeCategory, setActiveCategory] = useState('All')

  const visiblePackages =
    activeCategory === 'All' ? packages : packages.filter((pkg) => pkg.category === activeCategory)

  return (
    <section className="relative py-10 sm:py-14">
      <div className="packages-orb-a" />
      <div className="packages-orb-b" />
      <div className="packages-gridlines" />

      <div className="relative z-10">
        <div className="animate-fade-up rounded-3xl border border-white/40 bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900 px-6 py-10 text-white shadow-[0_25px_60px_rgba(15,23,42,0.35)] sm:px-10">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
            Signature Collection
          </p>
          <h1 className="max-w-2xl text-3xl leading-tight font-black sm:text-4xl lg:text-5xl">Packages That Feel Unreal, Built for Real Travelers</h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
            Explore curated journeys with high-energy activities, cinematic landscapes, and premium support from start to finish.
          </p>
          <div className="mt-7 grid max-w-4xl gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-xs tracking-wide text-white/75 uppercase">Packages</p>
              <p className="mt-1 text-2xl font-bold">{packages.length}+</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-xs tracking-wide text-white/75 uppercase">Categories</p>
              <p className="mt-1 text-2xl font-bold">{categories.length - 1}</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-xs tracking-wide text-white/75 uppercase">Avg Rating</p>
              <p className="mt-1 text-2xl font-bold">4.8/5</p>
            </div>
          </div>
        </div>

        <div className="mt-10 animate-fade-up animate-delay-100">
          <SectionHeading title="Choose Your Category" description="Filter by your travel mood and discover your next adventure." />
          <div className="mt-5 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? 'border-slate-900 bg-slate-900 text-white shadow-[0_10px_22px_rgba(15,23,42,0.25)]'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-green-400 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visiblePackages.map((pkg, index) => (
            <div key={pkg.id} className={`animate-fade-up ${index % 3 === 1 ? 'animate-delay-100' : index % 3 === 2 ? 'animate-delay-200' : ''}`}>
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>

        {visiblePackages.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600">
            No packages found in this category yet.
          </div>
        )}
      </div>
    </section>
  )
}
