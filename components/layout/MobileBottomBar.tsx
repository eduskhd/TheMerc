import Link from 'next/link'
import { UtensilsCrossed, Calendar, MapPin } from 'lucide-react'
import OrderOnlineButton from '@/components/ui/OrderOnlineButton'
import { business } from '@/data/business'

export default function MobileBottomBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-merc-black/95 backdrop-blur-md border-t border-merc-border pb-safe"
      aria-label="Quick actions"
    >
      <div className="flex items-center justify-around px-2 py-2">
        <Link
          href="/menu"
          className="flex flex-col items-center gap-1 text-merc-muted hover:text-amber-merc transition-colors min-w-[60px] py-1"
          aria-label="View menu"
        >
          <UtensilsCrossed size={22} />
          <span className="text-[10px] font-semibold tracking-widest uppercase">Menu</span>
        </Link>

        <OrderOnlineButton variant="mobile" className="min-w-[60px] py-1" />

        <Link
          href="/events"
          className="flex flex-col items-center gap-1 text-merc-muted hover:text-amber-merc transition-colors min-w-[60px] py-1"
          aria-label="View events"
        >
          <Calendar size={22} />
          <span className="text-[10px] font-semibold tracking-widest uppercase">Events</span>
        </Link>

        <Link
          href={business.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-merc-muted hover:text-amber-merc transition-colors min-w-[60px] py-1"
          aria-label="Get directions"
        >
          <MapPin size={22} />
          <span className="text-[10px] font-semibold tracking-widest uppercase">Directions</span>
        </Link>
      </div>
    </nav>
  )
}
