import Link from 'next/link'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'

export default function PackageDetailsPage({ pkg }) {
  if (!pkg) {
    return (
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Package Not Found</h1>
          <p className="mt-2 text-sm text-slate-600">
            The selected package details are unavailable.
          </p>
          <div className="mt-5">
            <Link href="/packages" className="inline-flex">
              <SecondaryButton>Back to Packages</SecondaryButton>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-5xl space-y-6">
        <Link href="/packages" className="inline-flex">
          <SecondaryButton>Back to Packages</SecondaryButton>
        </Link>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
          <img
            src={pkg.image?.src || pkg.image}
            alt={pkg.name}
            className="h-64 w-full object-cover sm:h-80"
          />

          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold tracking-wide text-green-700 uppercase">
                  {pkg.category}
                </p>
                <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">{pkg.name}</h1>
              </div>
              <p className="text-xl font-black text-slate-900">{pkg.price}</p>
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">{pkg.duration}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">{pkg.details}</p>

            <dl className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-900">Location</dt>
                <dd>{pkg.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Group Size</dt>
                <dd>{pkg.groupSize}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-4 rounded-2xl border border-slate-200 bg-white p-4">
              <Link href="/contact" className="inline-flex">
                <PrimaryButton>Book Now</PrimaryButton>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
