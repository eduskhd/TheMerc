'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UtensilsCrossed, Calendar, MapPin, Home } from 'lucide-react'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'
import { business } from '@/data/business'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/menu', icon: UtensilsCrossed, label: 'Menu' },
]

export default function MobileBottomBar() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-merc-border pb-safe"
      style={{ background: 'rgba(16,14,11,0.97)', backdropFilter: 'blur(16px)' }}
      aria-label="Quick actions"
    >
      <div className="flex items-stretch justify-around px-1 pt-1.5 pb-1">

        {/* Home */}
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-col items-center gap-1 px-3 py-1.5 min-w-[60px] rounded-sm transition-colors ${
                isActive ? 'text-amber-merc' : 'text-merc-muted hover:text-merc-cream'
              }`}
              aria-label={`View ${label}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && (
                <span
                  className="absolute top-0 left-3 right-3 h-0.5 rounded-full bg-amber-merc"
                  aria-hidden="true"
                />
              )}
              <Icon size={20} />
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase">{label}</span>
            </Link>
          )
        })}

        {/* Order Online — center prominent */}
        <div className="flex flex-col items-center justify-center min-w-[60px]">
          <OrderOnlineButton variant="mobile" className="min-w-[60px] py-1.5" />
        </div>

        {/* Events */}
        <Link
          href="/events"
          className={`relative flex flex-col items-center gap-1 px-3 py-1.5 min-w-[60px] rounded-sm transition-colors ${
            pathname.startsWith('/events') ? 'text-amber-merc' : 'text-merc-muted hover:text-merc-cream'
          }`}
          aria-label="View events"
          aria-current={pathname.startsWith('/events') ? 'page' : undefined}
        >
          {pathname.startsWith('/events') && (
            <span className="absolute top-0 left-3 right-3 h-0.5 rounded-full bg-amber-merc" aria-hidden="true" />
          )}
          <Calendar size={20} />
          <span className="text-[9px] font-bold tracking-[0.12em] uppercase">Events</span>
        </Link>

        {/* Directions */}
        <Link
          href={business.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-3 py-1.5 min-w-[60px] text-merc-muted hover:text-merc-cream transition-colors rounded-sm"
          aria-label="Get directions"
        >
          <MapPin size={20} />
          <span className="text-[9px] font-bold tracking-[0.12em] uppercase">Map</span>
        </Link>

      </div>
    </nav>
  )
}
