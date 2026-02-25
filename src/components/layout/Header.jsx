'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navItems } from '../../data/navigation'
import logo from '../../assets/Logo.jpg'

function navClass(isActive) {
  return `rounded-full px-4 py-2 text-sm font-medium transition ${
    isActive ? 'bg-[#417e38] text-white' : 'text-slate-700 hover:bg-green-50 hover:text-[#417e38]'
  }`
}

function mobileNavClass(isActive) {
  return `rounded-md px-3 py-2 text-left text-sm font-medium ${
    isActive ? 'bg-[#417e38] text-white' : 'text-slate-700 hover:bg-green-50 hover:text-[#417e38]'
  }`
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex w-full items-center justify-between gap-3 px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Link href="/" className="inline-flex min-w-0 flex-1 items-center gap-2 sm:gap-3" onClick={() => setMenuOpen(false)}>
          <img
            src={logo?.src || logo}
            alt="North Grace Travellers logo"
            className="block h-8 w-auto rounded-md object-contain sm:h-10"
          />
          <span className="truncate text-base font-extrabold leading-tight text-slate-900 sm:text-2xl lg:text-3xl">
            North Grace Travellers
          </span>
        </Link>

        <button
          className="shrink-0 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={navClass(pathname === item.path)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <nav className="border-t border-slate-200 bg-white px-3 py-3 shadow-sm md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={mobileNavClass(pathname === item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
