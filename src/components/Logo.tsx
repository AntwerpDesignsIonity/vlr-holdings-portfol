import logoImage from '@/assets/images/Vlr_Golden_Black_Logo_general.jpeg'

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
}

export function Logo({ variant = 'icon', className = '' }: LogoProps) {
  if (variant === 'full') {
    return (
      <img 
        src={logoImage} 
        alt="VLR Holdings - Kasvukapital" 
        className={`object-contain ${className}`}
      />
    )
  }

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
            <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
            <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
          </linearGradient>
        </defs>
        
        <path
          d="M60 95 C60 95, 50 75, 40 60 C30 45, 20 30, 15 20"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M60 95 C60 95, 70 75, 80 60 C90 45, 100 30, 105 20"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M40 60 C30 50, 25 40, 20 35"
          stroke="url(#logoGrad)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M80 60 C90 50, 95 40, 100 35"
          stroke="url(#logoGrad)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <ellipse cx="15" cy="20" rx="4" ry="2" fill="url(#logoGrad)" opacity="0.8" />
        <ellipse cx="105" cy="20" rx="4" ry="2" fill="url(#logoGrad)" opacity="0.8" />
        <ellipse cx="20" cy="35" rx="3" ry="1.5" fill="url(#logoGrad)" opacity="0.8" />
        <ellipse cx="100" cy="35" rx="3" ry="1.5" fill="url(#logoGrad)" opacity="0.8" />
        
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fill="url(#logoGrad)"
          fontSize="32"
          fontWeight="300"
          fontFamily="Cormorant Garamond, serif"
          letterSpacing="0.15em"
        >
          VLR
        </text>
      </svg>
    </div>
  )
}
