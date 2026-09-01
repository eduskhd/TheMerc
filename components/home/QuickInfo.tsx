import Link from 'next/link'
import { Clock, MapPin, Phone, Navigation } from 'lucide-react'
import { business, getTodayHours, getOpenStatus } from '@/data/business'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'

export default function QuickInfo() {
  const todayHours = getTodayHours()
  const openStatus = getOpenStatus()

  return (
    <section
      className="bg-merc-surface border-y border-merc-border"
      aria-label="Quick information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 items-center">

          {/* Open/Closed Status */}
          <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
            <div>
              {openStatus.status === 'open' ? (
                <>
                  <span className="badge-open">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                    Open Now
                  </span>
                  <p className="text-xs text-merc-muted mt-1.5">
                    Until {openStatus.closesAt}
                  </p>
                </>
              ) : (
                <>
                  <span className="badge-closed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" aria-hidden="true" />
                    Closed
                  </span>
                  {openStatus.opensAt && (
                    <p className="text-xs text-merc-muted mt-1.5">
                      Opens at {openStatus.opensAt}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Today's Hours */}
          <div className="flex items-start gap-2.5">
            <Clock size={16} className="text-amber-merc shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-merc-muted">Today&apos;s Hours</p>
              <p className="text-sm text-merc-cream font-medium mt-0.5">
                {todayHours ? todayHours.display : 'Closed Today'}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2.5">
            <MapPin size={16} className="text-amber-merc shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-merc-muted">Location</p>
              <p className="text-sm text-merc-cream font-medium mt-0.5">
                Flandreau, SD
              </p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-start gap-2.5">
            <Phone size={16} className="text-amber-merc shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-merc-muted">Call Us</p>
              <Link
                href={business.contact.phoneHref}
                className="text-sm text-merc-cream font-medium mt-0.5 hover:text-amber-merc transition-colors block"
                aria-label={`Call The Merc at ${business.contact.phone}`}
              >
                {business.contact.phone}
              </Link>
            </div>
          </div>

          {/* Directions + Order */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex items-center gap-3 lg:justify-end">
            <Link
              href={business.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs px-3 py-2 shrink-0"
              aria-label="Get directions to The Merc"
            >
              <Navigation size={13} />
              Directions
            </Link>
            <OrderOnlineButton variant="navbar" />
          </div>

        </div>
      </div>
    </section>
  )
}
