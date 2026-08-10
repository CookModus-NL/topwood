'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/projecten',            label: 'Werk' },
    { href: '/diensten/nieuwbouw',   label: 'Nieuwbouw' },
    { href: '/diensten/renovatie',   label: 'Renovatie' },
    { href: '/diensten/restauratie', label: 'Restauratie' },
    { href: '/diensten/interieur',   label: 'Interieur' },
    { href: '/over',                 label: 'Over' },
    { href: '/contact',              label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink-950/90 backdrop-blur-md border-b border-ink-700/40' : ''}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="group inline-flex items-baseline gap-3">
          <span className="font-display font-semibold text-[18px] tracking-[0.28em] text-ink-50 group-hover:text-sand-300 transition-colors">
            TOPWOOD
          </span>
          <span className="hidden sm:inline font-display text-[9.5px] tracking-[0.24em] uppercase text-ink-300">— Bouwbedrijf</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-display text-[11.5px] font-medium tracking-[0.22em] uppercase text-ink-100 hover:text-sand-300 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 text-ink-50" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-950 border-t border-ink-700/40">
          <div className="container-x py-10 flex flex-col gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="font-display text-[18px] tracking-[0.18em] uppercase text-ink-50 hover:text-sand-300">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
