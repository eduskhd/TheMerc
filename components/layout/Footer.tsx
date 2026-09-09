import Link from 'next/link'
import { MapPin, Phone, Instagram, Facebook, Star, ExternalLink } from 'lucide-react'
import { business } from '@/data/business'
import { socials } from '@/data/socials'
import TikTokIcon from '@/components/ui/TikTokIcon'
import { footerNavLinks as navLinks } from '@/config/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-merc-black border-t border-merc-border"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Review CTA */}
      <div className="bg-amber-merc/10 border-b border-amber-merc/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-amber-merc font-display font-bold text-xl tracking-tight">
              Love The Merc?
            </p>
            <p className="text-merc-cream/70 text-sm mt-0.5">
              Your review helps the whole community discover us.
            </p>
          </div>
          <Link
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
            aria-label="Leave a Google review for The Merc"
          >
            <Star size={16} />
            Leave a Review
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="The Merc — Home">
              <span
                className="font-display text-2xl font-bold text-merc-cream hover:text-amber-merc transition-colors"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                THE MERC
              </span>
            </Link>
            <p className="text-merc-muted text-xs tracking-[0.15em] uppercase mt-1">
              Flandreau, South Dakota
            </p>
            <p className="text-merc-cream/60 text-sm mt-4 leading-relaxed max-w-xs">
              {business.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6" aria-label="Social media links">
              <Link
                href={socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-merc-surface border border-merc-border flex items-center justify-center text-merc-muted hover:text-amber-merc hover:border-amber-merc transition-colors"
                aria-label="Follow The Merc on Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href={socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-merc-surface border border-merc-border flex items-center justify-center text-merc-muted hover:text-amber-merc hover:border-amber-merc transition-colors"
                aria-label="Follow The Merc on Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href={socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-merc-surface border border-merc-border flex items-center justify-center text-merc-muted hover:text-amber-merc hover:border-amber-merc transition-colors"
                aria-label="Follow The Merc on TikTok"
              >
                <TikTokIcon size={18} />
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="section-label mb-5">Find Us</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-merc-cream/70 hover:text-amber-merc transition-colors group"
                  aria-label={`Get directions to ${business.address.full}`}
                >
                  <MapPin size={16} className="shrink-0 mt-0.5 text-amber-merc" />
                  <span className="text-sm leading-snug group-hover:underline">
                    {business.address.street}<br />
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={business.contact.phoneHref}
                  className="flex items-center gap-3 text-merc-cream/70 hover:text-amber-merc transition-colors"
                  aria-label={`Call The Merc at ${business.contact.phone}`}
                >
                  <Phone size={16} className="shrink-0 text-amber-merc" />
                  <span className="text-sm">{business.contact.phone}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="section-label mb-5">Hours</h3>
            <ul className="space-y-1.5">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-sm">
                  <span className="text-merc-muted font-medium w-8 shrink-0">{h.day.slice(0, 3)}</span>
                  <span className="text-merc-cream/70 text-right">{h.display}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="section-label mb-5">Explore</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-merc-cream/70 hover:text-amber-merc transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-merc-border">
                <Link
                  href={business.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-merc-cream/70 hover:text-amber-merc transition-colors flex items-center gap-1.5"
                  aria-label="Leave a Google review"
                >
                  Google Reviews
                  <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-merc-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-merc-muted text-xs">
            © {currentYear} The Merc — Flandreau, South Dakota. All rights reserved.
          </p>
          <p className="text-merc-muted/50 text-xs">
            113 E 2nd Ave · Flandreau, SD 57028 · (605) 573-0913
          </p>
        </div>
      </div>

      {/* Mobile bottom bar spacer */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </footer>
  )
}
