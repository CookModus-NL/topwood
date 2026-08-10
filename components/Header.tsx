'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/diensten/nieuwbouw',   label: 'Nieuwbouw' },
    { href: '/diensten/renovatie',   label: 'Renovatie' },
    { href: '/diensten/restauratie', label: 'Restauratie' },
    { href: '/diensten/interieur',   label: 'Interieur' },
    { href: '/projecten',            label: 'Projecten' },
    { href: '/over',                 label: 'Over' },
    { href: '/contact',              label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 backdrop-blur-md bg-ink-950/85">
      <div className="container-x flex h-20 lg:h-24 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          {/* Compact framed logo */}
          <div className="frame-thin px-3 py-2 group-hover:border-sand-100 transition-colors">
            <div className="font-display text-[9px] tracking-[0.3em] text-sand-300 group-hover:text-sand-100 leading-none">
              BOUWBEDRIJF
            </div>
            <div className="font-display font-bold text-[22px] tracking-[0.14em] text-sand-300 group-hover:text-sand-100 leading-tight mt-1">
              TOPWOOD
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-display text-[11.5px] font-medium tracking-[0.24em] uppercase text-ink-100 hover:text-sand-300 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden lg:inline-flex btn btn-solid">
          Aanvraag
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 text-sand-300" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-800 bg-ink-950">
          <div className="container-x py-8 flex flex-col gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="font-display text-[15px] tracking-[0.2em] uppercase text-ink-50 hover:text-sand-300 border-b border-ink-800 pb-3">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-solid self-start mt-4">
              Aanvraag doen
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
