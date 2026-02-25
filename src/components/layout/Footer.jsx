import Link from 'next/link'
import logo from '../../assets/Logo.jpg'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-green-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 text-slate-700 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo?.src || logo} alt="North Grace Travellers logo" className="h-10 w-auto rounded-md object-contain" />
            <h4 className="text-lg font-bold text-slate-900">North Grace Travellers</h4>
          </div>
          <p className="mt-2 text-sm text-slate-600">Guided tours across Kashmir and the North with trusted support.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Quick Links</h4>
          <div className="mt-2 flex flex-col gap-1 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/packages">Packages</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h4>
          <p className="mt-2 text-sm text-slate-600">Email: info@northgrace.com</p>
          <p className="text-sm text-slate-600">Phone: +92 300 0000000</p>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} North Grace Travellers. All rights reserved.
      </div>
    </footer>
  )
}
