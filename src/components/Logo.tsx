interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
}

export function Logo({ variant = 'icon', className = '' }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vLogoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
          <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
          <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
        </linearGradient>
      </defs>
      <text
        x="50"
        y="70"
        textAnchor="middle"
        fill="url(#vLogoGrad)"
        fontSize="70"
        fontWeight="300"
        fontFamily="Cormorant Garamond, serif"
        style={{ letterSpacing: '0.05em' }}
      >
        V
      </text>
    </svg>
  )
}
