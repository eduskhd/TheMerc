'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FileText, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'
import { menuSections } from '@/data/menu'
import { business } from '@/data/business'

const sectionImages: Record<string, { src: string; alt: string }> = {
  pizza: { src: '/images/menu-pizza.jpg', alt: 'BBQ pizza at The Merc — loaded toppings, fresh from the oven' },
  burgers: { src: '/images/menu-burgers.jpg', alt: 'Garlic Parmesan Burger at The Merc — handcrafted and award-winning' },
  'good-eats': { src: '/images/menu-good-eats.jpg', alt: 'Chili cheese fries at The Merc — loaded with toppings' },
  coffee: { src: '/images/merc-interior-sign.jpg', alt: 'Dakota Joe Coffee bar at The Merc — morning coffee, espresso drinks' },
  drinks: { src: '/images/menu-drinks.jpg', alt: 'Craft cocktails and drinks at The Merc outdoor bar' },
}

export default function MenuPageClient() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const [activeTab, setActiveTab] = useState(tabParam ?? menuSections[0].id)

  useEffect(() => {
    if (tabParam && menuSections.find((s) => s.id === tabParam)) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  const activeSection = menuSections.find((s) => s.id === activeTab) ?? menuSections[0]

  return (
    <div className="pt-20 min-h-screen bg-merc-dark">

      {/* Page Header */}
      <div className="bg-merc-surface border-b border-merc-border py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            as="h1"
            label="The Merc"
            title="Our Menu"
            subtitle="From breakfast coffee to late-night drinks. We've got you covered."
          />
          <div className="mt-6">
            <OrderOnlineButton variant="full" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 lg:top-20 z-30 bg-merc-black/95 backdrop-blur-md border-b border-merc-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className="flex overflow-x-auto gap-0 scrollbar-none -mb-px"
            aria-label="Menu categories"
            role="tablist"
          >
            {menuSections.map((section) => (
              <button
                key={section.id}
                role="tab"
                aria-selected={activeTab === section.id}
                aria-controls={`panel-${section.id}`}
                onClick={() => setActiveTab(section.id)}
                className={`shrink-0 flex items-center gap-2 px-5 py-4 text-sm font-semibold tracking-wider uppercase border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === section.id
                    ? 'border-amber-merc text-amber-merc'
                    : 'border-transparent text-merc-muted hover:text-merc-cream hover:border-merc-border'
                }`}
              >
                <span aria-hidden="true">{section.icon}</span>
                {section.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div
        id={`panel-${activeSection.id}`}
        role="tabpanel"
        aria-label={`${activeSection.name} menu`}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
      >
        {/* Section intro */}
        <div className="mb-10 flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2
              className="display-md font-display text-merc-cream mb-2"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {activeSection.name}
            </h2>
            {activeSection.description && (
              <p className="text-merc-cream/60 text-base">{activeSection.description}</p>
            )}
          </div>

          {/* PDF Menu Link */}
          {activeSection.categories[0]?.pdfUrl && (
            <Link
              href={activeSection.categories[0].pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm shrink-0"
              aria-label={`Download ${activeSection.name} menu PDF`}
            >
              <FileText size={14} />
              View PDF Menu
              <ExternalLink size={12} />
            </Link>
          )}
        </div>

        {/* Menu Hero Image */}
        {sectionImages[activeSection.id] && (
          <div className="mb-10 rounded-sm overflow-hidden relative aspect-[21/6]">
            <Image
              src={sectionImages[activeSection.id].src}
              alt={sectionImages[activeSection.id].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-merc-black/60 to-transparent" aria-hidden="true" />
          </div>
        )}

        {/* Categories */}
        {activeSection.categories.map((category) => (
          <div key={category.id} className="mb-12">
            {category.name !== activeSection.name && (
              <div className="mb-6">
                <h3 className="text-lg font-display font-bold text-merc-cream border-b border-merc-border pb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}>
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-sm text-merc-muted mt-2">{category.description}</p>
                )}
              </div>
            )}

            {category.items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-merc-surface border border-merc-border rounded-sm p-4 hover:border-amber-merc/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-merc-cream text-sm">{item.name}</h4>
                        {item.description && (
                          <p className="text-xs text-merc-muted mt-1 leading-snug">{item.description}</p>
                        )}
                        {item.note && (
                          <p className="text-xs text-amber-merc/70 italic mt-1">{item.note}</p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="px-1.5 py-0.5 bg-merc-card text-merc-muted text-[9px] tracking-wider uppercase rounded-sm border border-merc-border">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      {item.price && (
                        <span className="text-amber-merc font-bold text-sm shrink-0">{item.price}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty state — menu items not yet entered */
              <div className="border border-dashed border-merc-border rounded-sm p-8 text-center">
                <FileText size={28} className="text-merc-muted mx-auto mb-3" aria-hidden="true" />
                <p className="text-merc-cream font-semibold text-sm mb-1">
                  Full menu coming to the website soon
                </p>
                <p className="text-merc-muted text-xs mb-4 max-w-sm mx-auto">
                  We&apos;re working on bringing our complete menu online. In the meantime,
                  call us or come on in — we&apos;ll take good care of you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/visit"
                    className="btn-ghost text-xs"
                    aria-label="Visit The Merc"
                  >
                    Visit Us
                  </Link>
                  <Link
                    href={business.contact.phoneHref}
                    className="text-xs text-merc-muted hover:text-amber-merc transition-colors flex items-center gap-1.5"
                    aria-label="Call The Merc"
                  >
                    Or call {business.contact.phone}
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Order Online CTA */}
        <div className="mt-8 pt-8 border-t border-merc-border text-center">
          <p className="text-merc-cream/60 text-sm mb-4">Ready to order?</p>
          <OrderOnlineButton variant="full" />
        </div>
      </div>
    </div>
  )
}
