import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'

const pillars = [
  { icon: '🍕', label: 'Food' },
  { icon: '☕', label: 'Coffee' },
  { icon: '🍺', label: 'Drinks' },
  { icon: '🎸', label: 'Music' },
  { icon: '👥', label: 'Friends' },
  { icon: '❤️', label: 'Community' },
]

export default function Welcome() {
  return (
    <section
      className="py-section bg-merc-dark"
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Side */}
          <div>
            <SectionHeader
              label="Welcome"
              title="Your Spot in Flandreau"
            />

            <div className="space-y-4 mt-6 text-merc-cream/70 leading-relaxed">
              <p>
                The Merc is what happens when a coffee house and a gastropub decide
                to share the same roof — and somehow, it just works. Walk in for
                morning coffee and you&apos;ll smell the espresso before you even open
                the door. Show up on a Friday night and you&apos;ll hear the music from
                the parking lot.
              </p>
              <p>
                We&apos;re tucked right here in Flandreau, South Dakota — and we&apos;re
                proud of it. This place belongs to this community. Whether you&apos;re
                grabbing a quick coffee before work, sitting down for an
                award-winning pizza with the family, or staying late for live
                music with friends — there&apos;s a seat here for you.
              </p>
              <p>
                Coffee bar up front. Bar feel in the back. Great food all day.
                That&apos;s The Merc.
              </p>
            </div>

            {/* Pillar icons */}
            <div className="flex flex-wrap gap-3 mt-8" aria-label="What we offer">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 px-3 py-2 bg-merc-surface border border-merc-border rounded-sm"
                >
                  <span aria-hidden="true">{p.icon}</span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-merc-muted">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {/* Main bar interior — spans full width */}
              <div className="col-span-2 relative aspect-[16/9] rounded-sm overflow-hidden">
                <Image
                  src="/images/merc-bar.jpg"
                  alt="The Merc bar interior — rustic wood bar, THE MERC sign, longhorn skull"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Cocktail */}
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/images/merc-cocktail.jpg"
                  alt="Craft cocktail at The Merc — Bloody Mary with THE MERC bar in background"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Outdoor events */}
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/images/merc-events.jpg"
                  alt="Live music at The Merc outdoor stage — string lights, band, community"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-amber-merc/20 rounded-sm -z-10"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
