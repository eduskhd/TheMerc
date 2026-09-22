import type { Metadata } from 'next'
import { Suspense } from 'react'
import MenuPageClient from '@/components/menu/MenuPageClient'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Award-winning pizza, burgers, good eats, Dakota Joe Coffee, craft beers, and cocktails at The Merc in Flandreau, SD.',
}

function MenuLoading() {
  return (
    <div className="pt-20 min-h-screen bg-merc-dark flex items-center justify-center">
      <div className="text-merc-muted text-sm tracking-widest uppercase">
        Loading menu…
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <Suspense fallback={<MenuLoading />}>
      <MenuPageClient />
    </Suspense>
  )
}
