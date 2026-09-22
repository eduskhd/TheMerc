'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'
import { navLinks } from '@/config/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled || isMobileOpen
            ? 'bg-merc-black/97 backdrop-blur-xl border-b border-merc-border shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-merc-black/70 to-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo — stronger wordmark */}
          <Link
            href="/"
            className="flex-shrink-0 group"
            aria-label="The Merc — Home"
          >
            <span
              className="font-display text-xl lg:text-2xl font-bold tracking-tight text-merc-cream group-hover:text-amber-merc transition-colors duration-200"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em' }}
            >
              THE MERC
            </span>
            <span className="block text-[9px] tracking-[0.25em] uppercase text-merc-muted font-body -mt-0.5">
              Flandreau · SD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-200 rounded-sm group ${
                      isActive
                        ? 'text-amber-merc'
                        : 'text-merc-cream/70 hover:text-merc-cream'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {/* Active underline indicator */}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-amber-merc scale-x-100 opacity-100'
                          : 'bg-amber-merc scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40'
                      }`}
                    />
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
            className="lg:hidden p-3 text-merc-cream hover:text-amber-merc transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              key="mobile-menu"
              className="lg:hidden bg-merc-black border-t border-merc-border"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <nav aria-label="Mobile navigation">
                <ul className="px-4 py-3 space-y-0.5" role="list">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(link.href)
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-3 px-4 py-3 text-sm font-bold tracking-wider uppercase rounded-sm transition-colors ${
                            isActive
                              ? 'text-amber-merc bg-amber-merc/10 border-l-2 border-amber-merc pl-3'
                              : 'text-merc-cream/70 hover:text-merc-cream hover:bg-merc-surface'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <div className="px-4 pb-6 pt-3 border-t border-merc-border mt-1">
                  <OrderOnlineButton variant="full" />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] btn-primary text-sm -translate-y-20 focus:translate-y-0 transition-transform duration-150"
      >
        Skip to main content
      </a>
    </>
  )
}
