// =============================================================================
// THE MERC — BUSINESS DATA
// Edit this file to update address, phone, hours, and other business info.
// =============================================================================

export const business = {
  name: 'The Merc',
  tagline: 'Eat. Drink. Coffee. Music. Community.',
  description:
    'Gastropub with the best pizza around. We specialize in craft beers and liquors as well as unique local food and spirits. Live music and event space as well.',
  shortDescription:
    'Your neighborhood gastropub & coffee bar in the heart of Flandreau, South Dakota.',

  address: {
    street: '113 E 2nd Ave',
    city: 'Flandreau',
    state: 'SD',
    zip: '57028',
    full: '113 E 2nd Ave, Flandreau, SD 57028',
    googleMapsUrl:
      'https://maps.google.com/?q=The+Merc+113+E+2nd+Ave+Flandreau+SD+57028',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=113+E+2nd+Ave+Flandreau+SD+57028&output=embed',
  },

  contact: {
    phone: '(605) 573-0913',
    phoneHref: 'tel:+16055730913',
    // TODO: Add email when confirmed
    email: null,
  },

  // Hours are in 24h format for calculation logic.
  // display field is the human-readable string shown on the site.
  // timezone: Flandreau, SD is in Central Time (America/Chicago)
  hours: [
    { day: 'Monday', open: '07:00', close: '14:00', display: '7:00 AM – 2:00 PM' },
    { day: 'Tuesday', open: '07:00', close: '21:00', display: '7:00 AM – 9:00 PM' },
    { day: 'Wednesday', open: '07:00', close: '21:00', display: '7:00 AM – 9:00 PM' },
    { day: 'Thursday', open: '07:00', close: '21:00', display: '7:00 AM – 9:00 PM' },
    { day: 'Friday', open: '07:00', close: '23:00', display: '7:00 AM – 11:00 PM' },
    { day: 'Saturday', open: '08:00', close: '23:00', display: '8:00 AM – 11:00 PM' },
    { day: 'Sunday', open: '08:00', close: '20:00', display: '8:00 AM – 8:00 PM' },
  ],

  timezone: 'America/Chicago', // Flandreau, SD — Central Time

  // Google Reviews
  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJ0ef0dNBpgYcRfX7z9WVmHj8',

  // TODO: Add Square ordering URL when available
  // squareOrderUrl: process.env.NEXT_PUBLIC_SQUARE_ORDER_URL || '',

  features: [
    'Craft Beers & Cocktails',
    'Award-Winning Pizza',
    'Fresh Burgers',
    'Dakota Joe Coffee',
    'Live Music',
    'Private Events',
    'Liquor Store',
  ],
} as const

export type HoursEntry = (typeof business.hours)[number]

// Helper: get today's hours object based on Central Time
export function getTodayHours(): HoursEntry | null {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  // Get current time in Central Time
  const now = new Date()
  const centralTime = new Date(
    now.toLocaleString('en-US', { timeZone: 'America/Chicago' })
  )
  const dayName = days[centralTime.getDay()]
  return business.hours.find((h) => h.day === dayName) ?? null
}

export type OpenStatus =
  | { status: 'open'; closesAt: string }
  | { status: 'closed'; opensAt: string | null }

// Helper: returns whether The Merc is currently open based on Central Time
export function getOpenStatus(): OpenStatus {
  const todayHours = getTodayHours()
  if (!todayHours) return { status: 'closed', opensAt: null }

  const now = new Date()
  const centralTime = new Date(
    now.toLocaleString('en-US', { timeZone: 'America/Chicago' })
  )

  const [openH, openM] = todayHours.open.split(':').map(Number)
  const [closeH, closeM] = todayHours.close.split(':').map(Number)

  const currentMinutes =
    centralTime.getHours() * 60 + centralTime.getMinutes()
  const openMinutes = openH * 60 + openM
  const closeMinutes = closeH * 60 + closeM

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    const closesAt = todayHours.display.split('–')[1]?.trim() ?? ''
    return { status: 'open', closesAt }
  }

  const opensAt =
    currentMinutes < openMinutes ? todayHours.display.split('–')[0]?.trim() ?? null : null
  return { status: 'closed', opensAt }
}
