import { createClient, type SanityClient } from 'next-sanity'

export const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

let _client: SanityClient | null = null

export function getClient(): SanityClient | null {
  if (!isSanityConfigured) return null
  if (!_client) {
    _client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  }
  return _client
}
