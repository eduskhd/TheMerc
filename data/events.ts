// =============================================================================
// THE MERC — EVENTS & LIVE MUSIC
// Add, remove, or edit events here. The site will automatically show the
// next upcoming events and display "Tonight at The Merc" when relevant.
//
// HOW TO ADD AN EVENT:
// Copy one of the event objects below, paste it into the array, and fill in:
//   - id:          Unique string (e.g. 'event-2025-09-15')
//   - artist:      Band or artist name
//   - eventType:   'live-music' | 'trivia' | 'open-mic' | 'private' | 'other'
//   - date:        'YYYY-MM-DD' format
//   - startTime:   '19:00' format (24h, Central Time)
//   - endTime:     Optional
//   - description: Short description
//   - image:       Path to image in /public/images/events/ or null
//   - ticketUrl:   Link to tickets or null if free/no tickets
//   - isFeatured:  Set true to highlight this event
// =============================================================================

export type EventType =
  | 'live-music'
  | 'trivia'
  | 'open-mic'
  | 'private'
  | 'other'

export interface MercEvent {
  id: string
  artist: string
  eventType: EventType
  date: string // 'YYYY-MM-DD'
  startTime: string // '19:00' 24h format
  endTime?: string
  description: string
  image: string | null
  ticketUrl: string | null
  isFeatured?: boolean
}

// ---------------------------------------------------------------------------
// UPCOMING EVENTS
// Keep sorted by date (soonest first). Past events can be removed or archived.
// ---------------------------------------------------------------------------
export const events: MercEvent[] = [
  // TODO: Add real events from The Merc's event schedule.
  // Check https://linktr.ee/themercsd for the current events Google Doc.
  //
  // EXAMPLE (replace with real data):
  // {
  //   id: 'live-2026-09-06',
  //   artist: 'Local Artist Name',
  //   eventType: 'live-music',
  //   date: '2026-09-06',
  //   startTime: '19:00',
  //   description: 'Live music at The Merc. Free admission.',
  //   image: null,
  //   ticketUrl: null,
  //   isFeatured: true,
  // },

  // Placeholder events — replace with real data
  {
    id: 'live-placeholder-1',
    artist: 'Live Music Friday',
    eventType: 'live-music',
    date: '2026-09-05',
    startTime: '19:00',
    endTime: '22:00',
    description:
      'Live music every Friday night at The Merc. Come enjoy great tunes with your favorite drinks.',
    image: null,
    ticketUrl: null,
    isFeatured: true,
  },
  {
    id: 'live-placeholder-2',
    artist: 'Saturday Night Live',
    eventType: 'live-music',
    date: '2026-09-06',
    startTime: '20:00',
    endTime: '23:00',
    description:
      'Saturday night is music night. Grab a craft beer and enjoy the show.',
    image: null,
    ticketUrl: null,
    isFeatured: false,
  },
  {
    id: 'trivia-placeholder-1',
    artist: 'Trivia Night',
    eventType: 'trivia',
    date: '2026-09-10',
    startTime: '19:00',
    description: 'Test your knowledge with Trivia Night at The Merc. Teams welcome.',
    image: null,
    ticketUrl: null,
    isFeatured: false,
  },
]

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

/** Returns events on or after today (Central Time), sorted by date. */
export function getUpcomingEvents(limit?: number): MercEvent[] {
  const nowCentral = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })
  )
  const todayStr = nowCentral.toISOString().split('T')[0]

  const upcoming = events
    .filter((e) => e.date >= todayStr)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date)
      return a.startTime.localeCompare(b.startTime)
    })

  return limit ? upcoming.slice(0, limit) : upcoming
}

/** Returns events happening today (Central Time). */
export function getTonightEvents(): MercEvent[] {
  const nowCentral = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })
  )
  const todayStr = nowCentral.toISOString().split('T')[0]
  return events.filter((e) => e.date === todayStr)
}

/** Formats a 24h time string to 12h display */
export function formatTime(time24: string | undefined | null): string {
  if (!time24 || !time24.includes(':')) return time24 ?? ''
  const [h, m] = time24.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 || 12
  return m === 0 ? `${h12} ${period}` : `${h12}:${m.toString().padStart(2, '0')} ${period}`
}

/** Formats a YYYY-MM-DD date string to display format */
export function formatEventDate(dateStr: string): { dayOfWeek: string; month: string; day: string } {
  const date = new Date(dateStr + 'T12:00:00')
  return {
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.getDate().toString(),
  }
}
