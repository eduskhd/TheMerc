import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { socials } from '@/data/socials'

export default function DakotaJoe() {
  return (
    <section
      className="py-section bg-merc-dark overflow-hidden"
      aria-labelledby="dakota-joe-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-merc-border">

          {/* Image Side — coffee bar / interior sign */}
          <div className="relative lg:order-2 h-64 lg:h-auto min-h-[320px]">
            <Image
              src="/images/venue/merc-interior-sign.jpg"
              alt="Dakota Joe Coffee bar at The Merc — vintage Ben Franklin sign, tables and coffee cups"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-merc-surface/80 via-transparent to-transparent lg:bg-gradient-to-l" aria-hidden="true" />
          </div>

          {/* Content Side */}
          <div className="relative p-8 lg:p-12 bg-merc-surface lg:order-1 flex flex-col justify-center">

            <div
              className="w-12 h-12 rounded-sm bg-amber-merc/10 border border-amber-merc/20 flex items-center justify-center mb-6"
              aria-hidden="true"
            >
              <span className="text-2xl">☕</span>
            </div>

            <p className="section-label mb-3">Coffee Bar</p>
            <h2
              id="dakota-joe-heading"
              className="display-md font-display text-merc-cream mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Dakota Joe Coffee
            </h2>

            <div className="space-y-3 text-merc-cream/70 text-sm leading-relaxed mb-6">
              <p>
                The front of The Merc is home to Dakota Joe Coffee Co. —
                premium coffee roasted with character and served with care.
                Morning people, remote workers, and coffee lovers call it their
                favorite spot in Flandreau.
              </p>
              <p>
                Espresso drinks, drip coffee, seasonal specials. Whether you
                need a quick pick-me-up or want to linger over your laptop —
                this is your corner.
              </p>
            </div>

            <p className="text-xs text-merc-muted italic mb-6">
              Dakota Joe Coffee Co. is served at The Merc. Coffee bar in the
              front, full bar in the back — one great space, two great vibes.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/menu?tab=coffee"
                className="btn-primary text-sm"
                aria-label="View coffee menu"
              >
                Coffee Menu
                <ArrowRight size={14} />
              </Link>
              <Link
                href={socials.dakotaJoeCoffee.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
                aria-label="Follow Dakota Joe Coffee on Instagram"
              >
                {socials.dakotaJoeCoffee.handle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
