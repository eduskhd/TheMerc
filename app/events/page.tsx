import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Music, Clock, Instagram } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  getUpcomingEvents,
  getTonightEvents,
  formatTime,
  formatEventDate,
  type MercEvent,
} from '@/data/events'
import { socials } from '@/data/socials'

export const metadata: Metadata = {
  title: 'Events & Live Music',
  description:
    "Live music, trivia nights, and community events at The Merc in Flandreau, SD. Check out what's coming up.",
}

function EventRow({ event }: { event: MercEvent }) {
  const { dayOfWeek, month, day } = formatEventDate(event.date)
  const formattedTime = formatTime(event.startTime)

  return (
    <article
      className="group bg-merc-surface border border-merc-border rounded-sm overflow-hidden hover:border-amber-merc/40 transition-all duration-300"
      aria-label={`${event.artist} — ${dayOfWeek}, ${month} ${day}`}
    >
      <div className="flex flex-col sm:flex-row">

        {/* Date sidebar */}
        <div className="sm:w-24 shrink-0 bg-merc-card border-b sm:border-b-0 sm:border-r border-merc-border flex sm:flex-col items-center justify-center py-4 px-6 sm:px-3 gap-3 sm:gap-1">
          <span className="text-[10px] font-bold tracking-widest uppercase text-amber-merc sm:block hidden">{month}</span>
          <span className="text-3xl sm:text-4xl font-display font-bold text-merc-cream leading-none"
                style={{ fontFamily: 'var(--font-playfair)' }}>
            {day}
          </span>
          <span className="text-xs text-merc-muted sm:hidden">{dayOfWeek.slice(0, 3)}, {month} — </span>
          <span className="text-[9px] text-merc-muted tracking-wider sm:block hidden">{dayOfWeek.slice(0, 3).toUpperCase()}</span>
        </div>

        {/* Event image */}
        <div className="sm:w-48 shrink-0 relative overflow-hidden hidden sm:block min-h-[120px]">
          <Image
            src={event.image ?? '/images/merc-events.jpg'}
            alt={event.image ? event.artist : `Live music at The Merc — ${event.artist}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="192px"
          />
          {event.eventType === 'live-music' && (
            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-merc text-merc-black text-[9px] font-bold tracking-wider uppercase rounded-sm">
                <Music size={8} />
                Live Music
              </span>
            </div>
          )}
        </div>

        {/* Event content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-start gap-2 mb-1">
              <h3
                className="font-display font-bold text-merc-cream text-lg sm:text-xl leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {event.artist}
              </h3>
              {event.isFeatured && (
                <span className="px-2 py-0.5 bg-amber-merc/20 text-amber-merc text-[9px] font-bold tracking-widest uppercase border border-amber-merc/30 rounded-sm shrink-0">
                  Featured
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-merc-muted mb-3">
              <Clock size={11} />
              <span>{formattedTime}</span>
              {event.endTime && <span>– {formatTime(event.endTime)}</span>}
            </div>
            <p className="text-sm text-merc-cream/60 leading-relaxed">{event.description}</p>
          </div>

          <div className="flex items-center gap-3 mt-4">
            {event.ticketUrl ? (
              <Link
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-4 py-2"
                aria-label={`Get tickets for ${event.artist}`}
              >
                Get Tickets
              </Link>
            ) : (
              <span className="text-xs text-merc-muted italic">Free / No tickets required</span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents()
  const tonightEvents = getTonightEvents()
  const hasTonightEvent = tonightEvents.length > 0

  return (
    <div className="pt-20 min-h-screen bg-merc-dark">

      {/* Hero */}
      <div className="relative bg-merc-surface border-b border-merc-border overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/merc-events.jpg"
            alt=""
            fill
            className="object-cover object-top opacity-20"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-merc-surface/70" aria-hidden="true" />
        </div>
        <div className="relative py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <SectionHeader
            label="Live at The Merc"
            title="Events & Music"
            subtitle="From local live music to community trivia nights — something's always happening at The Merc."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Tonight Banner */}
        {hasTonightEvent && (
          <div className="mb-10 p-6 bg-amber-merc/10 border border-amber-merc/40 rounded-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-merc animate-pulse" aria-hidden="true" />
                  <p className="section-label">Tonight at The Merc</p>
                </div>
                {tonightEvents.map((e) => (
                  <div key={e.id}>
                    <h2
                      className="text-2xl font-display font-bold text-merc-cream"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {e.artist}
                    </h2>
                    <p className="text-merc-cream/60 text-sm mt-1">
                      {formatTime(e.startTime)}{e.endTime ? ` – ${formatTime(e.endTime)}` : ''} · {e.description}
                    </p>
                  </div>
                ))}
              </div>
              {tonightEvents[0]?.ticketUrl && (
                <Link href={tonightEvents[0].ticketUrl} className="btn-primary shrink-0">
                  Get Tickets
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 ? (
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-merc-muted mb-6">
              Upcoming Events
            </h2>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-merc-border rounded-sm">
            <Calendar size={40} className="text-merc-muted mb-4" aria-hidden="true" />
            <h2 className="text-merc-cream font-display font-bold text-xl mb-2"
                style={{ fontFamily: 'var(--font-playfair)' }}>
              Schedule coming soon
            </h2>
            <p className="text-merc-muted text-sm mb-6 max-w-sm">
              Our upcoming events are being finalized. Follow us on social media
              to be the first to know about live music nights and special events.
            </p>
            <Link
              href={socials.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              aria-label="Follow The Merc on Facebook for event updates"
            >
              Follow on Facebook
            </Link>
          </div>
        )}

        {/* Social CTA */}
        <div className="mt-12 p-6 bg-merc-surface border border-merc-border rounded-sm text-center">
          <p className="text-merc-cream font-semibold mb-1">Never miss a show</p>
          <p className="text-merc-muted text-sm mb-4">
            Follow The Merc on Instagram and Facebook for live music announcements
            and event updates.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href={socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
              aria-label="Follow on Instagram"
            >
              <Instagram size={14} />
              Instagram
            </Link>
            <Link
              href={socials.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
              aria-label="Follow on Facebook"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
