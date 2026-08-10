'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/projecten', label: 'Werk' },
    { href: '/diensten/nieuwbouw',   label: 'Nieuwbouw' },
    { href: '/diensten/renovatie',   label: 'Renovatie' },
    { href: '/diensten/restauratie', label: 'Restauratie' },
    { href: '/diensten/interieur',   label: 'Interieur' },
    { href: '/over',                 label: 'Over' },
    { href: '/contact',              label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-ink-100">
      <div className="container-x flex h-20 lg:h-24 items-center justify-between gap-6">
        <Link href="/" aria-label="Topwood home" className="shrink-0">
          <Image
            src="/logo/topwood-banner.jpg"
            alt="Topwood Bouwbedrijf"
            width={220}
            height={101}
            priority
            className="h-12 lg:h-14 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-display text-[13.5px] font-medium text-ink-800 hover:text-sand-400 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden lg:inline-flex btn btn-primary">
          Vraag offerte <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 text-ink-900" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-ink-100">
          <div className="container-x py-8 flex flex-col gap-5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="font-display text-[17px] font-medium text-ink-900 hover:text-sand-400">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary self-start mt-4">
              Vraag offerte <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
