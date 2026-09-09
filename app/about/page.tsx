import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Coffee, Music, UtensilsCrossed, MapPin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { business } from '@/data/business'
import { socials } from '@/data/socials'

export const metadata: Metadata = {
  title: 'About',
  description:
    "The story of The Merc — Flandreau, South Dakota's neighborhood gastropub, coffee bar, and live music venue.",
}

const pillars = [
  {
    icon: Coffee,
    title: 'Dakota Joe Coffee',
    description:
      'The Merc is home to Dakota Joe Coffee Co., bringing premium coffee to the heart of Flandreau. Coffee bar in the front, bar feel in the back.',
    color: '#6B4423',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food',
    description:
      'Award-winning pizza with a cauliflower crust option. Handcrafted burgers. Daily specials. Breakfast and lunch through dinner.',
    color: '#C4842A',
  },
  {
    icon: Music,
    title: 'Live Music',
    description:
      "Regular live music nights and a dedicated event space. From Friday night performers to community events — there's always something happening.",
    color: '#2A5C8A',
  },
  {
    icon: MapPin,
    title: 'Community',
    description:
      "The Merc is a Flandreau original. A gathering place for the community — whether you're a regular or a first-timer, you're welcome here.",
    color: '#5A7A3A',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-merc-dark">

      {/* Hero Section */}
      <div className="relative bg-merc-surface border-b border-merc-border overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          <div className="py-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
            <SectionHeader
              as="h1"
              label="About The Merc"
              title="Flandreau's Own"
              subtitle="We're not a chain. We're not a franchise. We're The Merc — and we're proud to call Flandreau home."
            />
            <p className="text-merc-cream/60 text-sm leading-relaxed mt-6 max-w-md">
              {business.description}
            </p>
          </div>
          <div className="relative hidden lg:block min-h-[400px]">
            <Image
              src="/images/venue/merc-bar.jpg"
              alt="The Merc bar interior — rustic wood bar, THE MERC sign, longhorn skull on the wall"
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-merc-surface via-merc-surface/30 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <h2
              className="display-md font-display text-merc-cream mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              The Story
            </h2>
            <div className="space-y-4 text-merc-cream/70 leading-relaxed">
              <p>
                The Merc sits right in the heart of Flandreau, South Dakota at
                113 E 2nd Ave — a gathering place for anyone who wants a great
                meal, a good cup of coffee, or a cold drink with friends.
              </p>
              <p>
                What makes The Merc different is how it combines things that
                don&apos;t usually go together — and makes it feel completely natural.
                Walk in the front door and you&apos;ll find a proper coffee bar
                serving Dakota Joe Coffee. Keep walking and you&apos;ll find yourself
                in a full gastropub with craft beers, handcrafted cocktails, and
                a kitchen that turns out some of the best pizza in the region.
              </p>
              <p>
                On Friday and Saturday nights, there&apos;s often live music — local
                acts and touring musicians who fill the room with energy. It&apos;s
                the kind of place where you come in for one thing and end up
                staying for several more.
              </p>
              <p>
                The Merc specializes in craft beers, premium liquors, unique
                local food, and an atmosphere that feels genuine. No pretense.
                Just a great local spot doing things the right way.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 relative aspect-video rounded-sm overflow-hidden">
              <Image
                src="/images/venue/merc-events.jpg"
                alt="Live music at The Merc outdoor stage — crowd gathered under string lights at twilight"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/images/venue/merc-decor.jpg"
                alt="The Merc interior decor — longhorn skull on concrete wall, rustic bar atmosphere"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/images/venue/merc-interior-sign.jpg"
                alt="Dakota Joe Coffee bar at The Merc — vintage interior signage, tables and coffee area"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* What We're About */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="section-label mb-3">What We&apos;re About</p>
            <h2
              className="display-md font-display text-merc-cream"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              One Place, Many Reasons to Visit
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="bg-merc-surface border border-merc-border rounded-sm p-6 hover:border-amber-merc/30 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                    style={{ background: `${pillar.color}20`, border: `1px solid ${pillar.color}30` }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <h3
                    className="font-display font-bold text-merc-cream text-lg mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-merc-cream/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Flandreau */}
        <div className="relative bg-merc-surface border border-merc-border rounded-sm p-8 lg:p-12 mb-12 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-5"
            style={{ background: 'radial-gradient(circle, #C4842A 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <p className="section-label mb-3">Our Town</p>
            <h2
              className="display-md font-display text-merc-cream mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Proud to Be in Flandreau
            </h2>
            <p className="text-merc-cream/70 leading-relaxed mb-4">
              Flandreau, South Dakota is a small town with a big community
              spirit. The Merc was built with that community in mind — a place
              where neighbors meet, where out-of-towners feel welcome, and where
              everyone can find something they love.
            </p>
            <p className="text-merc-cream/70 leading-relaxed mb-6">
              We&apos;re located at 113 E 2nd Ave, right in the heart of downtown
              Flandreau. Come see us.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visit" className="btn-primary">
                <MapPin size={16} />
                Visit Us
              </Link>
              <Link
                href={socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Follow The Merc on Instagram"
              >
                Follow on Instagram
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
