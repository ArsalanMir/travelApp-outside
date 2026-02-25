import Link from 'next/link'
import logo from '../../assets/Logo.png'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-green-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 text-slate-700 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <img src={logo?.src || logo} alt="North Grace Travellers logo" className="h-16 w-auto rounded-md object-contain" />
            <h4 className="bg-gradient-to-r from-[#1f57b8] via-[#417e38] to-[#1f57b8] bg-clip-text text-xl font-black tracking-tight text-transparent">
              North Grace Travellers
            </h4>
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
          <p className="mt-2 text-sm text-slate-600">
            Email:{' '}
            <a href="mailto:info@northgracetravellers.in" className="text-[#1748a5] hover:underline">
              info@northgracetravellers.in
            </a>
          </p>
          <p className="text-sm text-slate-600">Phone: +91 8899933707</p>
          <p className="text-sm text-slate-600">Address: Soiteng Lasjan, Srinagar, Jammu and Kashmir, India</p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/14UhAyv4ebv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform duration-200 hover:scale-110"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M13.5 8.5V6.8c0-.8.5-1 1-1h1.2V3h-2c-2.3 0-3.7 1.6-3.7 3.9v1.6H8v2.9h2V21h3.5v-9.6h2.2l.3-2.9h-2.5Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/northgracetravellers?igsh=MXdnbTByYXprNHM2ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition-transform duration-200 hover:scale-110"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm5.2-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
                <path d="M12 2.8c3 0 3.4 0 4.6.1 1 .1 1.6.2 2 .4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.3 1 .4 2 .1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6c-.1 1-.2 1.6-.4 2-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .3-2 .4-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1c-1-.1-1.6-.2-2-.4a3.4 3.4 0 0 1-2.1-2.1c-.2-.4-.3-1-.4-2C2.8 15.4 2.8 15 2.8 12s0-3.4.1-4.6c.1-1 .2-1.6.4-2 .2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.3 2-.4C8.6 2.8 9 2.8 12 2.8Zm0-1.8c-3 0-3.5 0-4.7.1-1.2.1-2 .3-2.8.6-.7.3-1.4.7-2 1.3-.6.6-1 1.3-1.3 2-.3.8-.5 1.6-.6 2.8C.5 8.5.5 9 .5 12s0 3.5.1 4.7c.1 1.2.3 2 .6 2.8.3.7.7 1.4 1.3 2 .6.6 1.3 1 2 1.3.8.3 1.6.5 2.8.6 1.2.1 1.7.1 4.7.1s3.5 0 4.7-.1c1.2-.1 2-.3 2.8-.6.7-.3 1.4-.7 2-1.3.6-.6 1-1.3 1.3-2 .3-.8.5-1.6.6-2.8.1-1.2.1-1.7.1-4.7s0-3.5-.1-4.7c-.1-1.2-.3-2-.6-2.8-.3-.7-.7-1.4-1.3-2-.6-.6-1.3-1-2-1.3-.8-.3-1.6-.5-2.8-.6C15.5 1 15 1 12 1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} North Grace Travellers. All rights reserved.
      </div>
    </footer>
  )
}

