import logoImage from '@/assets/images/Vlr_Golden_Black_Logo_general.jpeg'

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
}

export function Logo({ variant = 'icon', className = '' }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="VLR Holdings - Kasvukapital" 
      className={`object-contain ${className}`}
    />
  )
}
