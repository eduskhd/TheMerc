import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { socials } from '@/data/socials'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from The Merc — food, drinks, live music, and community moments from Flandreau, South Dakota.',
}

const galleryItems = [
  {
    id: 'outdoor-concert',
    src: '/images/gallery/merc-events-outdoor.jpg',
    alt: 'Live music night at The Merc outdoor stage — string lights at twilight, band performing, community gathered',
    category: 'music',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 'bar',
    src: '/images/gallery/merc-bar.jpg',
    alt: 'The Merc bar interior — rustic wood bar, THE MERC sign, longhorn skull, tap handles',
    category: 'venue',
    span: '',
  },
  {
    id: 'cocktail',
    src: '/images/gallery/merc-cocktail.jpg',
    alt: 'Craft Bloody Mary cocktail at The Merc — spicy rim, pickled garnish, THE MERC sign in background',
    category: 'drinks',
    span: '',
  },
  {
    id: 'pizza-bbq',
    src: '/images/gallery/merc-pizza-bbq.jpg',
    alt: 'BBQ pizza from The Merc — loaded with jalapeños, red onions, and cheese',
    category: 'food',
    span: 'col-span-2',
  },
  {
    id: 'burger-parmesan',
    src: '/images/gallery/merc-burger-parmesan.jpg',
    alt: 'Garlic Parmesan Burger at The Merc — crispy patty, parmesan, rustic bar backdrop',
    category: 'food',
    span: '',
  },
  {
    id: 'events-crowd',
    src: '/images/gallery/merc-events-crowd.jpg',
    alt: 'Outdoor event at The Merc — crowd enjoying live music with string lights',
    category: 'music',
    span: '',
  },
  {
    id: 'chili-fries',
    src: '/images/gallery/merc-chili-fries.jpg',
    alt: 'Loaded chili cheese fries at The Merc — topped with jalapeños and red onions',
    category: 'food',
    span: '',
  },
  {
    id: 'community',
    src: '/images/gallery/merc-community.jpg',
    alt: 'Community night at The Merc — packed bar, Halloween party, live music and laughter',
    category: 'people',
    span: 'col-span-2',
  },
  {
    id: 'pizza-cheese',
    src: '/images/gallery/merc-pizza-cheese.jpg',
    alt: 'Fresh cheese pizza from The Merc — golden crust, bubbling mozzarella in a square pan',
    category: 'food',
    span: '',
  },
  {
    id: 'burger-cowboy',
    src: '/images/gallery/merc-burger-cowboy.jpg',
    alt: 'Cowboy Layer Cake Burger at The Merc — double patty smash burger with melted cheese',
    category: 'food',
    span: '',
  },
  {
    id: 'decor',
    src: '/images/gallery/merc-decor.jpg',
    alt: 'The Merc interior decor — longhorn skull on concrete wall, "Beer Will Change The World" sign',
    category: 'venue',
    span: '',
  },
  {
    id: 'bratwurst',
    src: '/images/gallery/merc-bratwurst.jpg',
    alt: 'Bratwurst with sauerkraut and fries at The Merc — craft beer taps visible in background',
    category: 'food',
    span: '',
  },
]

export default function GalleryPage() {
  return (
    <div className="pt-20 min-h-screen bg-merc-dark">

      {/* Header */}
      <div className="bg-merc-surface border-b border-merc-border py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="The Merc"
            title="Gallery"
            subtitle="A look inside The Merc — the food, the drinks, the music, and the people that make it special."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-merc-black/0 group-hover:bg-merc-black/50 transition-all duration-300 flex items-end p-4">
                <p className="text-merc-cream text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {item.alt.split('—')[0].trim()}
                </p>
              </div>

              {/* Category badge */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="px-2 py-0.5 bg-merc-black/80 text-amber-merc text-[9px] font-bold tracking-widest uppercase rounded-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-merc-muted text-sm mb-4">
            See the latest from The Merc on Instagram.
          </p>
          <Link
            href={socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Follow The Merc on Instagram"
          >
            <Instagram size={16} />
            {socials.instagram.handle}
          </Link>
        </div>
      </div>
    </div>
  )
}
