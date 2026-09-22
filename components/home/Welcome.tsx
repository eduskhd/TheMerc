import Image from 'next/image'
import { Pizza, Coffee, Beer, Music, Users, Heart } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const pillars = [
  { icon: Pizza, label: 'Food' },
  { icon: Coffee, label: 'Coffee' },
  { icon: Beer, label: 'Drinks' },
  { icon: Music, label: 'Music' },
  { icon: Users, label: 'Friends' },
  { icon: Heart, label: 'Community' },
]

export default function Welcome() {
  return (
    <section
      className="py-section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #181410 0%, #1E1812 60%, #221C16 100%)' }}
      aria-labelledby="welcome-heading"
    >
      {/* Warm amber glow — left side atmospheric */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[80%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(212,148,58,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Side */}
          <div>
            <SectionHeader
              id="welcome-heading"
              label="Welcome"
              title="Your Spot in Flandreau"
            />

            <div className="space-y-4 mt-6 text-merc-cream/65 leading-relaxed text-sm sm:text-base">
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
            <div className="flex flex-wrap gap-2.5 mt-8" aria-label="What we offer">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 px-3.5 py-2 border border-merc-border rounded-sm transition-colors duration-200 hover:border-amber-merc/40 hover:bg-amber-merc/5 group cursor-default"
                  style={{ background: 'rgba(34,28,22,0.8)' }}
                >
                  <p.icon size={14} className="text-amber-merc group-hover:text-amber-light transition-colors" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-merc-muted group-hover:text-merc-cream/80 transition-colors">
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
                  src="/images/venue/merc-bar.jpg"
                  alt="The Merc bar interior — rustic wood bar, THE MERC sign, longhorn skull"
                  fill
                  className="object-cover object-center transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-merc-black/30 to-transparent" aria-hidden="true" />
              </div>

              {/* Cocktail */}
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/images/venue/merc-cocktail.jpg"
                  alt="Craft cocktail at The Merc — Bloody Mary with THE MERC bar in background"
                  fill
                  className="object-cover object-center transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Outdoor events */}
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/images/venue/merc-events.jpg"
                  alt="Live music at The Merc outdoor stage — string lights, band, community"
                  fill
                  className="object-cover object-top transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Decorative amber corner accent */}
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 border border-amber-merc/25 rounded-sm -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 -left-3 w-12 h-12 border border-merc-border rounded-sm -z-10"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
