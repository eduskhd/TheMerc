'use client'

import Link from 'next/link'
import { ShoppingBag, Phone } from 'lucide-react'
import { squareOrderUrl } from '@/lib/square/config'
import { business } from '@/data/business'

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
      <Link
        href={business.contact.phoneHref}
        className={`btn-primary text-xs px-4 py-2.5 whitespace-nowrap ${className}`}
        aria-label={`Call The Merc at ${business.contact.phone} to order`}
      >
        <Phone size={14} />
        Order by Phone
      </Link>
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
      <Link
        href={business.contact.phoneHref}
        className={`flex flex-col items-center gap-1 text-amber-merc ${className}`}
        aria-label={`Call The Merc at ${business.contact.phone}`}
      >
        <Phone size={22} />
        <span className="text-[10px] font-semibold tracking-widest uppercase">Order</span>
      </Link>
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
    <Link
      href={business.contact.phoneHref}
      className={`btn-primary ${className}`}
      aria-label={`Call The Merc at ${business.contact.phone} to order`}
    >
      <Phone size={16} />
      {business.contact.phone}
    </Link>
  )
}
