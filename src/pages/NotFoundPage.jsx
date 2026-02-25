import Link from 'next/link'
import { PrimaryButton } from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Page Not Found</h2>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      <div className="mt-6">
        <Link href="/">
          <PrimaryButton>Go Home</PrimaryButton>
        </Link>
      </div>
    </section>
  )
}
