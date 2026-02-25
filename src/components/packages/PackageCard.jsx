'use client'

import { PrimaryButton, SecondaryButton } from '../ui/Button'
import { useRouter } from 'next/navigation'

export default function PackageCard({ pkg }) {
  const router = useRouter()

  return (
    <article className="package-card group relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 p-5 shadow-[0_16px_40px_rgba(16,24,40,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(16,24,40,0.2)]">
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-green-100/80 blur-2xl transition duration-500 group-hover:scale-150" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold tracking-wide text-green-700 uppercase">
              {pkg.category}
            </p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">{pkg.name}</h3>
          </div>
          <p className="text-right text-xl font-black text-slate-900">{pkg.price}</p>
        </div>

        <p className="mt-3 text-sm font-medium text-slate-500">{pkg.duration}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">{pkg.details}</p>

        <dl className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-600 sm:text-sm">
          <div>
            <dt className="font-semibold text-slate-800">Location</dt>
            <dd>{pkg.location}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-800">Group Size</dt>
            <dd>{pkg.groupSize}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-800">Difficulty</dt>
            <dd>{pkg.difficulty}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-800">Best Season</dt>
            <dd>{pkg.season}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <p className="text-xs font-semibold text-slate-600 uppercase">Guest Rating</p>
          <p className="text-sm font-bold text-slate-900">{pkg.rating}/5</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <PrimaryButton className="flex-1 min-w-28" onClick={() => router.push('/contact')}>
            Book Now
          </PrimaryButton>
          <SecondaryButton className="flex-1 min-w-28">View Details</SecondaryButton>
        </div>
      </div>
    </article>
  )
}
