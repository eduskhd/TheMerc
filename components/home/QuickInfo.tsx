import Link from 'next/link'
import { Clock, MapPin, Phone, Navigation } from 'lucide-react'
import { business, getTodayHours, getOpenStatus } from '@/data/business'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'

export default function QuickInfo() {
  const todayHours = getTodayHours()
  const openStatus = getOpenStatus()

  return (
    <section
      className="border-y border-merc-border relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1E1810 0%, #221C16 60%, #1A1510 100%)' }}
      aria-label="Quick information"
    >
      {/* Subtle amber accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-merc/40 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 items-center">

          {/* Open/Closed Status */}
          <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
            {openStatus.status === 'open' ? (
              <div>
                <span className="badge-open">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  Open Now
                </span>
                <p className="text-xs text-merc-muted mt-1.5 font-medium">
                  Until {openStatus.closesAt}
                </p>
              </div>
            ) : (
              <div>
                <span className="badge-closed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" aria-hidden="true" />
                  Closed
                </span>
                {openStatus.opensAt && (
                  <p className="text-xs text-merc-muted mt-1.5 font-medium">
                    Opens {openStatus.opensAt}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Today's Hours */}
          <div className="flex items-start gap-2.5">
            <Clock size={15} className="text-amber-merc shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-merc-muted">Today</p>
              <p className="text-sm text-merc-cream font-semibold mt-0.5">
                {todayHours ? todayHours.display : 'Closed Today'}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="text-amber-merc shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-merc-muted">Location</p>
              <p className="text-sm text-merc-cream font-semibold mt-0.5">Flandreau, SD</p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-start gap-2.5">
            <Phone size={15} className="text-amber-merc shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-merc-muted">Call Us</p>
              <Link
                href={business.contact.phoneHref}
                className="text-sm text-merc-cream font-semibold mt-0.5 hover:text-amber-merc transition-colors block"
                aria-label={`Call The Merc at ${business.contact.phone}`}
              >
                {business.contact.phone}
              </Link>
            </div>
          </div>

          {/* Directions + Order */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex flex-wrap items-center gap-2 lg:justify-end">
            <Link
              href={business.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs px-3 py-2 shrink-0"
              aria-label="Get directions to The Merc"
            >
              <Navigation size={12} />
              Directions
            </Link>
            <OrderOnlineButton variant="navbar" />
          </div>

        </div>
      </div>

      {/* Subtle amber accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-merc/20 to-transparent" aria-hidden="true" />
    </section>
  )
}
