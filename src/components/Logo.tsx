interface LogoProps {
  variant?: 'icon' | 'full' | 'wordmark' | 'stacked'
  className?: string
  showGlow?: boolean
}

export function Logo({ variant = 'icon', className = '', showGlow = false }: LogoProps) {
  const gradientId = `vLogoGrad-${Math.random().toString(36).substr(2, 9)}`
  
  if (variant === 'icon') {
    return (
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
            <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
            <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
          </linearGradient>
          {showGlow && (
            <filter id={`glow-${gradientId}`}>
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          )}
        </defs>
        <text
          x="50"
          y="70"
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          fontSize="70"
          fontWeight="300"
          fontFamily="Cormorant Garamond, serif"
          style={{ letterSpacing: '0.05em' }}
          filter={showGlow ? `url(#glow-${gradientId})` : undefined}
        >
          V
        </text>
      </svg>
    )
  }
  
  if (variant === 'wordmark') {
    return (
      <svg 
        viewBox="0 0 200 60" 
        fill="none" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
            <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
            <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
          </linearGradient>
        </defs>
        <text
          x="100"
          y="45"
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          fontSize="40"
          fontWeight="300"
          fontFamily="Cormorant Garamond, serif"
          style={{ letterSpacing: '0.2em' }}
        >
          VLR
        </text>
      </svg>
    )
  }
  
  if (variant === 'stacked') {
    return (
      <svg 
        viewBox="0 0 140 160" 
        fill="none" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
            <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
            <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
          </linearGradient>
        </defs>
        <text
          x="70"
          y="70"
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          fontSize="60"
          fontWeight="300"
          fontFamily="Cormorant Garamond, serif"
          style={{ letterSpacing: '0.05em' }}
        >
          V
        </text>
        <text
          x="70"
          y="115"
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          fontSize="24"
          fontWeight="300"
          fontFamily="Cormorant Garamond, serif"
          style={{ letterSpacing: '0.2em' }}
        >
          VLR
        </text>
        <text
          x="70"
          y="138"
          textAnchor="middle"
          fill="oklch(0.55 0.01 45)"
          fontSize="10"
          fontWeight="300"
          fontFamily="Manrope, sans-serif"
          style={{ letterSpacing: '0.3em' }}
        >
          HOLDINGS
        </text>
      </svg>
    )
  }
  
  return (
    <svg 
      viewBox="0 0 300 100" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
          <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
          <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
        </linearGradient>
      </defs>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fill={`url(#${gradientId})`}
        fontSize="60"
        fontWeight="300"
        fontFamily="Cormorant Garamond, serif"
        style={{ letterSpacing: '0.05em' }}
      >
        V
      </text>
      <text
        x="180"
        y="62"
        textAnchor="middle"
        fill={`url(#${gradientId})`}
        fontSize="36"
        fontWeight="300"
        fontFamily="Cormorant Garamond, serif"
        style={{ letterSpacing: '0.2em' }}
      >
        VLR
      </text>
      <text
        x="180"
        y="82"
        textAnchor="middle"
        fill="oklch(0.55 0.01 45)"
        fontSize="11"
        fontWeight="300"
        fontFamily="Manrope, sans-serif"
        style={{ letterSpacing: '0.3em' }}
      >
        HOLDINGS
      </text>
    </svg>
  )
}
