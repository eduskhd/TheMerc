'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'
import { navLinks } from '@/config/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileOpen
            ? 'bg-merc-black/95 backdrop-blur-md border-b border-merc-border shadow-lg'
            : 'bg-gradient-to-b from-black/60 to-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 group"
            aria-label="The Merc — Home"
          >
            <span
              className="font-display text-xl lg:text-2xl font-bold tracking-tight text-merc-cream group-hover:text-amber-merc transition-colors duration-200"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              THE MERC
            </span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-merc-muted font-body -mt-0.5">
              Flandreau, SD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-sm ${
                      isActive
                        ? 'text-amber-merc'
                        : 'text-merc-cream/80 hover:text-merc-cream'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <OrderOnlineButton variant="navbar" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-merc-cream hover:text-amber-merc transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileOpen && (
          <div className="lg:hidden bg-merc-black/98 border-t border-merc-border">
            <nav aria-label="Mobile navigation">
              <ul className="px-4 py-4 space-y-1" role="list">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href)
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 text-base font-medium tracking-wide uppercase rounded-sm transition-colors ${
                          isActive
                            ? 'text-amber-merc bg-merc-surface'
                            : 'text-merc-cream/80 hover:text-merc-cream hover:bg-merc-surface'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="px-4 pb-6 pt-2">
                <OrderOnlineButton variant="full" />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] btn-primary text-sm -translate-y-20 focus:translate-y-0 transition-transform duration-150 focus:outline-none"
      >
        Skip to main content
      </a>
    </>
  )
}
