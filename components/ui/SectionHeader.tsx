interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  as?: 'h1' | 'h2'
  id?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  as: Tag = 'h2',
  id,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <p className="section-label mb-3">{label}</p>
      )}
      <Tag
        id={id}
        className={`display-md font-display ${light ? 'text-merc-black' : 'text-merc-cream'}`}
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''} ${light ? 'text-merc-black/60' : 'text-merc-cream/60'}`}>
          {subtitle}
        </p>
      )}
      <div className={`section-divider mt-4 ${centered ? 'mx-auto' : ''}`} />

    </div>
  )
}
