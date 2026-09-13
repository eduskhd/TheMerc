import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Navigation, Instagram, Facebook, Star, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { business, getOpenStatus, getTodayHours } from '@/data/business'
import { socials } from '@/data/socials'
import TikTokIcon from '@/components/ui/TikTokIcon'

export const metadata: Metadata = {
  title: 'Visit',
  description:
    'Find The Merc in Flandreau, South Dakota. Address, hours, phone, and directions. 113 E 2nd Ave, Flandreau, SD 57028.',
}

export default function VisitPage() {
  const openStatus = getOpenStatus()
  const todayHours = getTodayHours()

  return (
    <div className="pt-20 min-h-screen bg-merc-dark">

      {/* Header */}
      <div className="relative border-b border-merc-border py-12 px-4 sm:px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A1510 0%, #221C16 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-merc/40 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,148,58,0.07) 0%, transparent 60%)' }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto relative flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            as="h1"
            label="Come See Us"
            title="Visit The Merc"
            subtitle={`We're at ${business.address.full} — right in the heart of Flandreau.`}
          />
          <Link
            href={business.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 self-start sm:self-auto"
            aria-label="Get directions to The Merc"
          >
            <Navigation size={16} />
            Get Directions
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Info Cards */}
          <div className="space-y-4">

            {/* Status + Hours */}
            <div className="bg-merc-surface border border-merc-border rounded-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-merc-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-merc" />
                  <h2 className="font-semibold text-merc-cream text-sm tracking-wider uppercase">Hours</h2>
                </div>
                {openStatus.status === 'open' ? (
                  <span className="badge-open">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open Now
                  </span>
                ) : (
                  <span className="badge-closed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    Closed
                  </span>
                )}
              </div>
              <div className="px-6 py-5">
                {todayHours && (
                  <p className="text-sm text-amber-merc font-medium mb-4">
                    Today ({todayHours.day}): {todayHours.display}
                    {openStatus.status === 'open' && openStatus.closesAt && (
                      <span className="text-merc-muted font-normal"> — Closes at {openStatus.closesAt}</span>
                    )}
                  </p>
                )}
                <div className="space-y-2">
                  {business.hours.map((h) => {
                    const isToday = h.day === todayHours?.day
                    return (
                      <div
                        key={h.day}
                        className={`flex justify-between items-center py-1.5 px-2 rounded-sm text-sm ${
                          isToday ? 'bg-amber-merc/10 border border-amber-merc/20' : ''
                        }`}
                        aria-current={isToday ? 'date' : undefined}
                      >
                        <span className={`font-medium w-28 ${isToday ? 'text-amber-merc' : 'text-merc-muted'}`}>
                          {h.day}
                          {isToday && <span className="text-[10px] ml-1 tracking-widest uppercase">(Today)</span>}
                        </span>
                        <span className={isToday ? 'text-merc-cream' : 'text-merc-cream/60'}>
                          {h.display}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-merc-surface border border-merc-border rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-amber-merc" />
                <h2 className="font-semibold text-merc-cream text-sm tracking-wider uppercase">Address</h2>
              </div>
              <address className="not-italic text-merc-cream/80 text-base font-medium mb-4">
                {business.address.street}<br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </address>
              <Link
                href={business.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
                aria-label="Open in Google Maps"
              >
                <Navigation size={15} />
                Open in Google Maps
              </Link>
            </div>

            {/* Phone */}
            <div className="bg-merc-surface border border-merc-border rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Phone size={16} className="text-amber-merc" />
                <h2 className="font-semibold text-merc-cream text-sm tracking-wider uppercase">Phone</h2>
              </div>
              <Link
                href={business.contact.phoneHref}
                className="btn-secondary w-full justify-center text-sm"
                aria-label={`Call The Merc at ${business.contact.phone}`}
              >
                <Phone size={15} />
                {business.contact.phone}
              </Link>
              <p className="text-center text-xs text-merc-muted mt-2">Tap to call on mobile</p>
            </div>

            {/* Social */}
            <div className="bg-merc-surface border border-merc-border rounded-sm p-6">
              <h2 className="font-semibold text-merc-cream text-sm tracking-wider uppercase mb-4">Follow Us</h2>
              <div className="space-y-2">
                <Link
                  href={socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-sm hover:bg-merc-card transition-colors group"
                  aria-label="Follow The Merc on Instagram"
                >
                  <Instagram size={18} className="text-pink-400" />
                  <div>
                    <p className="text-sm text-merc-cream font-medium group-hover:text-amber-merc transition-colors">Instagram</p>
                    <p className="text-xs text-merc-muted">{socials.instagram.handle}</p>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-merc-muted" />
                </Link>
                <Link
                  href={socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-sm hover:bg-merc-card transition-colors group"
                  aria-label="Follow The Merc on Facebook"
                >
                  <Facebook size={18} className="text-blue-400" />
                  <div>
                    <p className="text-sm text-merc-cream font-medium group-hover:text-amber-merc transition-colors">Facebook</p>
                    <p className="text-xs text-merc-muted">The Merc</p>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-merc-muted" />
                </Link>
                <Link
                  href={socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-sm hover:bg-merc-card transition-colors group"
                  aria-label="Follow The Merc on TikTok"
                >
                  <TikTokIcon size={18} className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-merc-cream font-medium group-hover:text-amber-merc transition-colors">TikTok</p>
                    <p className="text-xs text-merc-muted">{socials.tiktok.handle}</p>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-merc-muted" />
                </Link>
              </div>
            </div>

            {/* Review CTA */}
            <div className="bg-amber-merc/10 border border-amber-merc/30 rounded-sm p-6 text-center">
              <Star size={24} className="text-amber-merc mx-auto mb-3" aria-hidden="true" />
              <p className="text-merc-cream font-semibold mb-1">Love The Merc?</p>
              <p className="text-merc-muted text-sm mb-4">
                Leave us a Google review and help your neighbors discover us.
              </p>
              <Link
                href={business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
                aria-label="Leave a Google review for The Merc"
              >
                <Star size={15} />
                Leave a Review
              </Link>
            </div>
          </div>

          {/* Right: Map */}
          <div className="space-y-4">
            <div className="bg-merc-surface border border-merc-border rounded-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <iframe
                  title="The Merc on Google Maps"
                  src={business.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Getting Here box */}
            <div className="bg-merc-surface border border-merc-border rounded-sm p-6">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-merc-muted mb-4">
                Getting Here
              </h3>
              <div className="space-y-3 text-sm text-merc-cream/70">
                <p>
                  <strong className="text-merc-cream">By Car:</strong> We&apos;re on E 2nd Ave
                  in downtown Flandreau. Parking available on the street and nearby lots.
                </p>
                <p>
                  <strong className="text-merc-cream">From I-29:</strong> Take Exit 114 toward
                  Flandreau. Head east into town — we&apos;re right in the heart of downtown.
                </p>
                <p>
                  <strong className="text-merc-cream">Coordinates:</strong>{' '}
                  <span className="text-merc-muted">Flandreau, SD 57028</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
