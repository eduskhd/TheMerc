import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { business, getTodayHours } from '@/data/business'

export default function VisitCTA() {
  const todayHours = getTodayHours()

  return (
    <section
      className="py-section bg-merc-dark relative overflow-hidden"
      aria-labelledby="visit-cta-heading"
    >
      {/* Background image — community night */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/merc-community.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-merc-dark/80" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Heading + CTA */}
          <div>
            <p className="section-label mb-3">Come See Us</p>
            <h2
              id="visit-cta-heading"
              className="display-md font-display text-merc-cream mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
              aria-label="Find Us in Flandreau"
            >
              Find Us in<br aria-hidden="true" />Flandreau
            </h2>
            <p className="text-merc-cream/60 text-base leading-relaxed mb-8 max-w-sm">
              We&apos;re right in the heart of town on E 2nd Ave. Easy to find, hard to leave.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={business.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Get directions to The Merc"
              >
                <Navigation size={16} />
                Get Directions
              </Link>
              <Link href="/visit" className="btn-secondary">
                <MapPin size={16} />
                Visit Page
              </Link>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <div className="bg-merc-surface/90 backdrop-blur-sm border border-merc-border rounded-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-amber-merc" />
                <span className="text-xs font-semibold tracking-widest uppercase text-merc-muted">Address</span>
              </div>
              <Link
                href={business.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-merc-cream font-medium text-sm hover:text-amber-merc transition-colors"
                aria-label="Open address in Google Maps"
              >
                {business.address.street}<br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </Link>
            </div>

            <div className="bg-merc-surface/90 backdrop-blur-sm border border-merc-border rounded-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <Phone size={16} className="text-amber-merc" />
                <span className="text-xs font-semibold tracking-widest uppercase text-merc-muted">Phone</span>
              </div>
              <Link
                href={business.contact.phoneHref}
                className="text-merc-cream font-medium text-sm hover:text-amber-merc transition-colors"
                aria-label={`Call us at ${business.contact.phone}`}
              >
                {business.contact.phone}
              </Link>
              <p className="text-merc-muted text-xs mt-1">Tap to call</p>
            </div>

            <div className="sm:col-span-2 bg-merc-surface/90 backdrop-blur-sm border border-merc-border rounded-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-amber-merc" />
                <span className="text-xs font-semibold tracking-widest uppercase text-merc-muted">Hours</span>
                {todayHours && (
                  <span className="ml-auto text-xs text-amber-merc font-medium">
                    Today: {todayHours.display}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-xs">
                    <span className="text-merc-muted">{h.day.slice(0, 3)}</span>
                    <span className="text-merc-cream/70">{h.display}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
