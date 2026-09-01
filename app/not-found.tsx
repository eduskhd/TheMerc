import Link from 'next/link'
import { Home, UtensilsCrossed, Calendar } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-merc-dark flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-amber-merc font-display text-8xl font-bold mb-4"
           style={{ fontFamily: 'var(--font-playfair)' }}>
          404
        </p>
        <h1 className="text-2xl font-display font-bold text-merc-cream mb-3"
            style={{ fontFamily: 'var(--font-playfair)' }}>
          This seat&apos;s empty
        </h1>
        <p className="text-merc-muted text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist — but there&apos;s always
          something good waiting for you at The Merc.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Back Home
          </Link>
          <Link href="/menu" className="btn-secondary">
            <UtensilsCrossed size={16} />
            View Menu
          </Link>
          <Link href="/events" className="btn-ghost">
            <Calendar size={16} />
            Events
          </Link>
        </div>
      </div>
    </div>
  )
}
