import { groq } from 'next-sanity'

export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= $today] | order(date asc) {
    "id": _id,
    artist,
    eventType,
    date,
    startTime,
    endTime,
    description,
    "image": image.asset->url,
    ticketUrl,
    isFeatured
  }
`

export const galleryImagesQuery = groq`
  *[_type == "galleryImage"] | order(order asc, _createdAt desc) {
    "id": _id,
    "src": image.asset->url,
    alt,
    category
  }
`

export const menuItemsQuery = groq`
  *[_type == "menuItem" && available != false] | order(section asc, name asc) {
    "id": _id,
    name,
    description,
    price,
    section,
    tags,
    note,
    "image": image.asset->url
  }
`
