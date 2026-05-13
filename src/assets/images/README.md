# VLR Holdings Logo Assets

## Available Logo Files

### Primary Logo
- **Vlr_Golden_Black_Logo_general.jpeg** - Full color logo with golden tree design on dark background
  - Used for: Social media sharing, general marketing materials
  - Format: JPEG
  - Features: Full "VLR HOLDINGS" text with "kasvukapital" tagline

## Logo Usage Throughout the Website

### Navigation (Top Left)
The navigation bar uses an SVG version of the logo icon via the `<Logo>` component:
- Component: `src/components/Logo.tsx`
- Variant: `icon` - Shows tree design with VLR letters
- Size: 48x48px (w-12 h-12)
- Interactive: Scales up 10% on hover

### Social Media / Open Graph
The full logo image is referenced in meta tags for social sharing:
- Facebook/Open Graph: `og:image` meta tag
- Twitter Card: `twitter:image` meta tag
- Displays when links are shared on social media platforms

### Hero Section
The hero section features an animated SVG tree illustration based on the logo design.

## Component API

### Logo Component
```tsx
import { Logo } from '@/components/Logo'

// Icon variant (SVG - tree with VLR text)
<Logo variant="icon" className="w-12 h-12" />

// Full variant (Original JPEG image)
<Logo variant="full" className="w-full h-auto" />
```

## Recommended Additional Assets

For a complete brand asset library, consider creating:

1. **Favicon formats** (based on the tree icon):
   - favicon.ico (16x16, 32x32, 48x48)
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png (180x180)
   - android-chrome-192x192.png
   - android-chrome-512x512.png

2. **Transparent PNG versions**:
   - vlr-logo-transparent.png (for use on varied backgrounds)
   - vlr-icon-transparent.png (icon only, square format)

3. **Social media optimized**:
   - vlr-og-image.png (1200x630 for Open Graph)
   - vlr-twitter-card.png (1200x675 for Twitter)
   - vlr-linkedin-banner.png (1128x191)

4. **Print formats** (if needed):
   - vlr-logo-print.svg (vector for scalability)
   - vlr-logo-cmyk.pdf (for professional printing)

## Color Palette

The logo uses golden gradient colors matching the theme:
- Primary Gold: `oklch(0.75 0.12 85)`
- Light Gold: `oklch(0.88 0.08 90)`
- Deep Gold: `oklch(0.65 0.12 85)`

These colors are consistent throughout the website theme.
