import Link from 'next/link'
import Image from 'next/image'
import { MapPin, UtensilsCrossed, Calendar } from 'lucide-react'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'
import { business } from '@/data/business'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end pb-16 sm:pb-24 overflow-hidden"
      aria-label="Welcome to The Merc"
    >
      {/* Hero background — outdoor concert at The Merc at twilight */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Live music night at The Merc — Flandreau, South Dakota"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — dark at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(17,17,16,0.2) 0%, rgba(17,17,16,0.35) 30%, rgba(17,17,16,0.75) 60%, rgba(17,17,16,0.96) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle vignette on sides */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(17,17,16,0.4) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          {/* Location label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-amber-merc" aria-hidden="true" />
            <p className="section-label">Flandreau, South Dakota</p>
          </div>

          {/* Main heading */}
          <h1
            className="display-xl text-merc-cream mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair)', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            The Merc
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-merc-cream/85 font-light tracking-wide mb-8 max-w-xl"
             style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
            {business.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/menu" className="btn-primary">
              <UtensilsCrossed size={16} />
              View Menu
            </Link>
            <OrderOnlineButton variant="hero" />
            <Link href="/events" className="btn-secondary">
              <Calendar size={16} />
              Events &amp; Music
            </Link>
            <Link
              href={business.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Get directions to The Merc"
            >
              <MapPin size={16} />
              Get Directions
            </Link>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2" aria-label="What we offer">
            {business.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 text-xs font-medium tracking-wider uppercase text-merc-cream/60 border border-white/20 rounded-full backdrop-blur-sm"
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
