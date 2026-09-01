interface PlaceholderImageProps {
  label: string
  className?: string
  aspectRatio?: string
}

export default function PlaceholderImage({
  label,
  className = '',
  aspectRatio = 'aspect-video',
}: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-img ${aspectRatio} ${className}`}
      role="img"
      aria-label={`Placeholder for: ${label}`}
    >
      <div className="text-center px-4 py-6">
        <div className="text-merc-border text-4xl mb-3">📷</div>
        <p className="text-[11px] tracking-widest uppercase text-merc-muted/60 leading-tight">
          {label}
        </p>
      </div>
    </div>
  )
}
