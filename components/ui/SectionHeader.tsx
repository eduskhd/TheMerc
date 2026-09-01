interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <p className="section-label mb-3">{label}</p>
      )}
      <h2
        className={`display-md font-display ${light ? 'text-merc-black' : 'text-merc-cream'}`}
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''} ${light ? 'text-merc-black/60' : 'text-merc-cream/60'}`}>
          {subtitle}
        </p>
      )}
      <div className={`section-divider mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
