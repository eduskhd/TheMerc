import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import TikTokIcon from '@/components/ui/TikTokIcon'
import { socials } from '@/data/socials'

const socialCards = [
  {
    platform: 'Instagram',
    handle: socials.instagram.handle,
    url: socials.instagram.url,
    description: 'Daily food, drinks, and behind-the-scenes from The Merc.',
    icon: Instagram,
    color: '#E1306C',
  },
  {
    platform: 'Facebook',
    handle: 'The Merc',
    url: socials.facebook.url,
    description: 'Events, announcements, and community news.',
    icon: Facebook,
    color: '#1877F2',
  },
  {
    platform: 'TikTok',
    handle: socials.tiktok.handle,
    url: socials.tiktok.url,
    description: 'Clips from the bar, the kitchen, and live music nights.',
    icon: TikTokIcon,
    color: '#69C9D0',
  },
]

export default function SocialFollow() {
  return (
    <section
      className="py-section bg-merc-surface"
      aria-labelledby="social-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Stay Connected</p>
          <h2
            id="social-heading"
            className="display-md font-display text-merc-cream"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Follow The Merc
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-merc-cream/60 text-sm mt-4 max-w-md mx-auto">
            See what&apos;s happening at The Merc — food, music, events, and the
            everyday life of your favorite local spot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {socialCards.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group p-6 text-center hover:border-amber-merc/40 transition-colors"
                aria-label={`Follow The Merc on ${social.platform}: ${social.handle}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${social.color}20`, border: `1px solid ${social.color}30` }}
                >
                  <Icon size={22} style={{ color: social.color }} />
                </div>
                <p className="font-semibold text-merc-cream text-sm">{social.platform}</p>
                <p className="text-merc-muted text-xs mt-0.5 mb-3">{social.handle}</p>
                <p className="text-merc-cream/50 text-xs leading-snug">{social.description}</p>
                <p className="text-amber-merc text-xs font-semibold tracking-wider uppercase mt-4 group-hover:underline">
                  Follow →
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
