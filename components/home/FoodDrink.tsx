import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const menuFeatures = [
  {
    id: 'pizza',
    title: 'Pizza',
    subtitle: 'Award-Winning',
    description: 'Handcrafted pies fresh from the oven. Cauliflower crust available.',
    image: '/images/menu/menu-pizza.jpg',
    imageAlt: 'BBQ pizza from The Merc — loaded with toppings',
    href: '/menu?tab=pizza',
    accentColor: '#D4943A',
    span: 'sm:col-span-2 lg:col-span-1',
  },
  {
    id: 'burgers',
    title: 'Burgers',
    subtitle: 'Built Right',
    description: 'Award-winning burgers. The Garlic Parmesan, the Cowboy Layer Cake, and more.',
    image: '/images/menu/menu-burgers.jpg',
    imageAlt: 'Garlic Parmesan Burger at The Merc with bar in background',
    href: '/menu?tab=burgers',
    accentColor: '#9B3A2E',
    span: '',
  },
  {
    id: 'good-eats',
    title: 'Good Eats',
    subtitle: 'More to Love',
    description: 'Chili cheese fries, bratwurst, daily specials worth coming back for.',
    image: '/images/menu/menu-good-eats.jpg',
    imageAlt: 'Chili cheese fries at The Merc',
    href: '/menu?tab=good-eats',
    accentColor: '#5A7A3A',
    span: '',
  },
  {
    id: 'coffee',
    title: 'Coffee',
    subtitle: 'Dakota Joe',
    description: 'Premium coffee from Dakota Joe Coffee Co. served all morning.',
    image: '/images/venue/merc-interior-sign.jpg',
    imageAlt: 'Coffee bar at The Merc — Dakota Joe Coffee Co.',
    href: '/menu?tab=coffee',
    accentColor: '#6B4423',
    span: 'lg:col-span-2',
  },
  {
    id: 'drinks',
    title: 'Drinks',
    subtitle: 'Craft & Cocktails',
    description: 'Bloody Marys, craft beers on tap, cocktails, and a full liquor selection.',
    image: '/images/venue/merc-cocktail.jpg',
    imageAlt: 'Craft Bloody Mary cocktail at The Merc bar',
    href: '/menu?tab=drinks',
    accentColor: '#2A5C8A',
    span: '',
  },
]

export default function FoodDrink() {
  return (
    <section
      className="py-section bg-merc-surface"
      aria-labelledby="food-drink-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            id="food-drink-heading"
            label="Food & Drink"
            title="What's on the Table"
            subtitle="From morning coffee to late-night cocktails — there's always something good at The Merc."
          />
          <Link
            href="/menu"
            className="btn-ghost shrink-0 self-start sm:self-auto"
            aria-label="View full menu"
          >
            Full Menu
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuFeatures.map((feature) => (
            <Link
              key={feature.id}
              href={feature.href}
              className={`card group relative overflow-hidden ${feature.span}`}
              aria-label={`View ${feature.title} menu`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-merc-black/90 via-merc-black/30 to-transparent" aria-hidden="true" />
                {/* Top accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: feature.accentColor }}
                  aria-hidden="true"
                />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] font-semibold tracking-widest uppercase mb-1"
                   style={{ color: feature.accentColor }}>
                  {feature.subtitle}
                </p>
                <h3
                  className="text-xl font-display font-bold text-merc-cream mb-1"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-merc-cream/60 leading-snug">
                  {feature.description}
                </p>
                <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold tracking-widest uppercase text-merc-cream/80 group-hover:text-amber-merc transition-colors">
                  See Menu <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
