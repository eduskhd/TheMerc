'use client'

import Link from 'next/link'
import { ShoppingBag, Clock } from 'lucide-react'
import { squareOrderUrl } from '@/lib/square/config'

interface OrderOnlineButtonProps {
  variant?: 'navbar' | 'hero' | 'full' | 'mobile'
  className?: string
}

export default function OrderOnlineButton({
  variant = 'full',
  className = '',
}: OrderOnlineButtonProps) {
  const hasOrderUrl = squareOrderUrl && squareOrderUrl.trim() !== ''

  if (variant === 'navbar') {
    if (hasOrderUrl) {
      return (
        <Link
          href={squareOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary text-xs px-4 py-2.5 whitespace-nowrap ${className}`}
          aria-label="Order online from The Merc"
        >
          <ShoppingBag size={14} />
          Order Online
        </Link>
      )
    }
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold tracking-widest uppercase bg-merc-surface text-merc-muted rounded-sm cursor-not-allowed border border-merc-border whitespace-nowrap ${className}`}
        title="Online ordering coming soon"
        aria-label="Online ordering coming soon"
      >
        <Clock size={12} />
        Order Online
      </span>
    )
  }

  if (variant === 'mobile') {
    if (hasOrderUrl) {
      return (
        <Link
          href={squareOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center gap-1 text-amber-merc ${className}`}
          aria-label="Order online"
        >
          <ShoppingBag size={22} />
          <span className="text-[10px] font-semibold tracking-widest uppercase">Order</span>
        </Link>
      )
    }
    return (
      <span
        className={`flex flex-col items-center gap-1 text-merc-muted cursor-not-allowed ${className}`}
        title="Coming soon"
      >
        <ShoppingBag size={22} />
        <span className="text-[10px] font-semibold tracking-widest uppercase">Order</span>
      </span>
    )
  }

  // Full button variants (hero, full)
  if (hasOrderUrl) {
    return (
      <Link
        href={squareOrderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-primary ${className}`}
        aria-label="Order online from The Merc"
      >
        <ShoppingBag size={16} />
        Order Online
      </Link>
    )
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex flex-col items-center gap-2 px-8 py-5 bg-merc-surface border border-merc-border rounded-sm">
        <Clock size={20} className="text-amber-merc" />
        <div>
          <p className="text-sm font-bold tracking-widest uppercase text-merc-cream">
            Online Ordering
          </p>
          <p className="text-xs text-merc-muted tracking-wider uppercase mt-0.5">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  )
}
