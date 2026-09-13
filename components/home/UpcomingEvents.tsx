import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Music, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  getUpcomingEvents,
  getTonightEvents,
  formatTime,
  formatEventDate,
  type MercEvent,
} from '@/data/events'

function EventCard({ event }: { event: MercEvent }) {
  const { dayOfWeek, month, day } = formatEventDate(event.date)
  const formattedTime = formatTime(event.startTime)

  return (
    <article
      className="card group flex gap-0 overflow-hidden"
      aria-label={`Event: ${event.artist} on ${dayOfWeek}, ${month} ${day}`}
    >
      {/* Date sidebar */}
      <div className="w-16 shrink-0 bg-amber-merc/10 border-r border-amber-merc/20 flex flex-col items-center justify-center py-4 gap-0.5">
        <span className="text-[10px] font-bold tracking-widest uppercase text-amber-merc">
          {month}
        </span>
        <span className="text-3xl font-display font-bold text-merc-cream leading-none"
              style={{ fontFamily: 'var(--font-playfair)' }}>
          {day}
        </span>
        <span className="text-[9px] text-merc-muted tracking-wider">
          {dayOfWeek.slice(0, 3).toUpperCase()}
        </span>
      </div>

      {/* Event Image */}
      <div className="w-24 sm:w-28 shrink-0 relative overflow-hidden">
        <Image
          src={event.image ?? '/images/venue/merc-events.jpg'}
          alt={event.image ? event.artist : `Live music at The Merc`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="112px"
        />
        {/* Event type badge */}
        <div className="absolute top-2 left-2">
          {event.eventType === 'live-music' && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-merc-black/80 text-amber-merc text-[9px] font-bold tracking-wider uppercase rounded-sm">
              <Music size={8} />
              Live
            </span>
          )}
        </div>
      </div>

      {/* Event Info */}
      <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-display font-bold text-merc-cream text-base leading-tight truncate"
              style={{ fontFamily: 'var(--font-playfair)' }}>
            {event.artist}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-merc-muted">
            <Clock size={11} />
            <span>{formattedTime}</span>
            {event.endTime && (
              <span>– {formatTime(event.endTime)}</span>
            )}
          </div>
          <p className="text-xs text-merc-cream/50 mt-2 line-clamp-2 leading-snug">
            {event.description}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <Link
            href={`/events`}
            className="text-xs font-semibold tracking-wider uppercase text-amber-merc hover:text-amber-light transition-colors flex items-center gap-1"
            aria-label={`Event details for ${event.artist}`}
          >
            Details <ArrowRight size={11} />
          </Link>
          {event.ticketUrl && (
            <Link
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-wider uppercase text-merc-cream/50 hover:text-merc-cream transition-colors ml-3"
              aria-label={`Get tickets for ${event.artist}`}
            >
              Tickets
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default function UpcomingEvents() {
  const upcomingEvents = getUpcomingEvents(3)
  const tonightEvents = getTonightEvents()
  const hasTonightEvent = tonightEvents.length > 0

  return (
    <section
      className="py-section bg-merc-dark"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Tonight banner */}
        {hasTonightEvent && (
          <div className="mb-10 p-5 bg-amber-merc/10 border border-amber-merc/30 rounded-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full bg-amber-merc animate-pulse"
                    aria-hidden="true"
                  />
                  <p className="section-label">Tonight at The Merc</p>
                </div>
                {tonightEvents.map((e) => (
                  <div key={e.id}>
                    <h3
                      className="text-xl font-display font-bold text-merc-cream"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {e.artist}
                    </h3>
                    <p className="text-sm text-merc-cream/60 mt-0.5">
                      {formatTime(e.startTime)}
                      {e.endTime ? ` – ${formatTime(e.endTime)}` : ''}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/events" className="btn-primary shrink-0 text-sm">
                See Event
              </Link>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <SectionHeader
            id="events-heading"
            label="Live at The Merc"
            title="Upcoming Events"
            subtitle="Music, community, and good times. Check out what's coming up."
          />
          <Link
            href="/events"
            className="btn-ghost shrink-0 self-start sm:self-auto text-sm"
            aria-label="View all events"
          >
            All Events
            <ArrowRight size={14} />
          </Link>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-merc-border rounded-sm">
            <Calendar size={36} className="text-merc-muted mb-4" aria-hidden="true" />
            <p className="text-merc-cream font-semibold mb-1">No upcoming events listed yet</p>
            <p className="text-merc-muted text-sm mb-4">
              Check back soon or follow us on social media for the latest schedule.
            </p>
            <Link href="/events" className="btn-ghost text-sm">
              View Events Page
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
