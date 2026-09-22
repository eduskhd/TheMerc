import Link from 'next/link'
import Image from 'next/image'
import { UtensilsCrossed, Calendar, MapPin } from 'lucide-react'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'
import { business } from '@/data/business'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end pb-20 sm:pb-28 overflow-hidden"
      aria-label="Welcome to The Merc"
    >
      {/* Hero background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Live music night at The Merc — Flandreau, South Dakota"
          fill
          priority
          className="object-cover object-center scale-[1.02]"
          sizes="100vw"
        />
      </div>

      {/* Main gradient — warmer, more atmospheric */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(16,14,11,0.1) 0%, rgba(16,14,11,0.2) 20%, rgba(16,14,11,0.65) 55%, rgba(16,14,11,0.97) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Warm amber radial glow — bottom left, atmospheric */}
      <div
        className="absolute bottom-0 left-0 w-[60vw] h-[50vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 100%, rgba(212, 148, 58, 0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Vignette sides */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(16,14,11,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-4xl">

          {/* Location label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-amber-merc/80" aria-hidden="true" />
            <p className="section-label tracking-[0.25em]">Flandreau, South Dakota</p>
          </div>

          {/* Main heading — dramatically large */}

          <h1
            className="display-hero text-merc-cream mb-5 font-display"
            style={{
              fontFamily: 'var(--font-playfair)',
              textShadow: '0 4px 32px rgba(0,0,0,0.6)',
            }}
          >
            The Merc
          </h1>


          {/* Tagline */}
          <p
            className="text-lg sm:text-2xl text-merc-cream/80 font-light tracking-wide mb-10 max-w-2xl leading-relaxed"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}
          >
            {business.tagline}
          </p>

          {/* CTA Buttons — clear primary vs secondary hierarchy */}
          <div className="flex flex-wrap gap-3 mb-10">
            <OrderOnlineButton variant="hero" />
            <Link href="/menu" className="btn-secondary">
              <UtensilsCrossed size={16} />
              View Menu
            </Link>
            <Link href="/events" className="btn-secondary">
              <Calendar size={16} />
              Events
            </Link>
            <Link
              href={business.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Get directions to The Merc"
            >
              <MapPin size={16} />
              Directions
            </Link>
          </div>

          {/* Feature pills — more refined */}
          <div className="flex flex-wrap gap-2" aria-label="What we offer">
            {business.features.map((feature) => (
              <span
                key={feature}
                className="px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-merc-cream/65 border border-white/15 rounded-full backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
