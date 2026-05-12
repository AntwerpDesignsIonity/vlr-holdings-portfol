# Planning Guide

A sophisticated venture capital landing page that embodies luxury, patience, and long-term vision through refined aesthetics and innovative interaction patterns with side-tab navigation.

**Experience Qualities**:
1. **Luxurious** - Every detail should whisper exclusivity and refined taste, from typography to micro-interactions
2. **Contemplative** - The pacing and animations should encourage thoughtful engagement rather than rushed scrolling
3. **Innovative** - Modern UI patterns like pull-out tabs and magnetic interactions create memorable moments

**Complexity Level**: Light Application (multiple features with basic state)
This is a marketing showcase with interactive navigation, scroll animations, and state management for tab visibility and user interactions.

## Essential Features

**Pull-Out Side Tab Navigation**
- Functionality: Vertical tabs on the left edge that expand into the page when hovered/clicked
- Purpose: Provides elegant, space-efficient navigation that doesn't interfere with content
- Trigger: Mouse hover or tap on tab edge
- Progression: User hovers tab edge → tab slides out revealing full label → clicks to navigate → smooth scroll to section
- Success criteria: Tabs respond within 100ms, navigation is smooth, tabs retract elegantly

**Animated Tree Growth Visualization**
- Functionality: SVG tree that grows organically when scrolled into view
- Purpose: Visual metaphor for patient capital and organic growth
- Trigger: Section enters viewport
- Progression: User scrolls to growth section → tree trunk draws → branches extend → leaves appear with scale animation
- Success criteria: Animation feels natural and completes within 3 seconds

**Scroll-Triggered Content Reveals**
- Functionality: Staggered fade-in animations as content enters viewport
- Purpose: Creates rhythm and guides attention through the narrative
- Trigger: Element reaches viewport threshold
- Progression: User scrolls → observer detects element → content fades in with upward motion → delays create cascade effect
- Success criteria: Animations feel cohesive, no jank, proper timing between elements

**Counter Animation for Statistics**
- Functionality: Numbers count up from zero when visible
- Purpose: Creates engagement and emphasizes impressive metrics
- Trigger: Stat section enters viewport
- Progression: User scrolls to stats → counters animate from 0 to target value → easing makes it feel premium
- Success criteria: Counts feel smooth, complete in ~2 seconds, trigger only once

**Custom Cursor Effects**
- Functionality: Custom cursor with follower element that responds to interactions
- Purpose: Reinforces luxury brand and adds playful sophistication
- Trigger: Mouse movement and clicks
- Progression: User moves mouse → cursor tracks immediately → follower lags slightly → cursor scales on interactive elements
- Success criteria: No lag on movement, transforms feel natural, doesn't interfere with usability

## Edge Case Handling

- **Mobile Experience**: Hide custom cursor and pull-out tabs, use standard mobile nav patterns
- **Reduced Motion Preference**: Respect `prefers-reduced-motion` to disable animations for accessibility
- **Slow Connections**: Show preloader with timeout fallback, ensure content is readable without animations
- **JavaScript Disabled**: Core content remains accessible, navigation works via anchor links
- **Narrow Viewports**: Tabs stack into hamburger menu, single column layout for all sections

## Design Direction

The design should evoke the feeling of walking into a private wealth management office: hushed luxury, timeless elegance, and absolute confidence. Think old-world refinement meets contemporary minimalism. Dark, sophisticated palette with gold accents that catch the light. Every interaction should feel considered and premium.

## Color Selection

A monochromatic dark base with luxurious gold accents, inspired by fine jewelry and aged cognac.

- **Primary Color**: Rich Gold `oklch(0.75 0.12 85)` - Communicates wealth, success, and timelessness without being garish
- **Secondary Colors**: 
  - Deep Black `oklch(0.15 0 0)` - Sophisticated base that makes gold pop
  - Elevated Black `oklch(0.22 0 0)` - Subtle layering for cards and sections
  - Warm Gray `oklch(0.55 0.01 45)` - Body text that's easier to read than pure gray
- **Accent Color**: Light Gold `oklch(0.88 0.08 90)` - For hover states and highlights, creates hierarchy
- **Foreground/Background Pairings**: 
  - Background (Deep Black `oklch(0.15 0 0)`): Light Cream text (`oklch(0.96 0.01 85)`) - Ratio 13.2:1 ✓
  - Primary Gold (`oklch(0.75 0.12 85)`): Deep Black text (`oklch(0.15 0 0)`) - Ratio 8.1:1 ✓
  - Elevated Black (`oklch(0.22 0 0)`): Warm Gray text (`oklch(0.55 0.01 45)`) - Ratio 5.2:1 ✓

## Font Selection

Typography should balance classical elegance with modern readability, using a sophisticated serif for display and a refined sans-serif for body text.

- **Display Font**: Cormorant Garamond - Elegant serif that conveys heritage and sophistication
- **Body Font**: Manrope or DM Sans - Clean, professional sans-serif with excellent readability

- **Typographic Hierarchy**:
  - H1 (Hero Title): Cormorant Garamond Light / 96px / 0.15em tracking / tight leading
  - H2 (Section Headings): Cormorant Garamond Light / 56px / 0.1em tracking / 1.2 line-height
  - H3 (Card Titles): Cormorant Garamond Regular / 28px / 0.05em tracking
  - Body Large: Manrope Light / 18px / 0.02em tracking / 1.8 line-height
  - Body: Manrope Regular / 16px / normal tracking / 1.7 line-height
  - Labels: Manrope Medium / 11px / 0.3em tracking / uppercase
  - Nav Links: Manrope Medium / 12px / 0.25em tracking / uppercase

## Animations

Animations should feel like silk - smooth, luxurious, and purposeful. Use them to guide attention and create moments of delight, but never delay the user.

Key principles: Physics-based easing (`cubic-bezier(0.76, 0, 0.24, 1)` for dramatic reveals), appropriate duration (150-500ms for most interactions), and spatial consistency (elements move along logical paths).

Specific animations:
- Pull-out tabs: 400ms ease-out with slight spring
- Scroll reveals: 800ms eased fade + translate
- Tree growth: 2000ms custom timing with sequential branching
- Counters: 2000ms with easeOutCubic
- Magnetic hover: Real-time transform following cursor position

## Component Selection

- **Components**: 
  - Button (shadcn) - Primary CTA with custom gold styling and hover effects
  - Card (shadcn) - Service cards with custom borders and backdrop blur
  - Separator (shadcn) - Subtle dividers between sections
  - Tabs (shadcn) - Will be heavily customized for vertical pull-out navigation
  - ScrollArea (shadcn) - For smooth scrolling in longer content sections
  - Dialog (shadcn) - For any modal interactions (contact forms, etc.)

- **Customizations**: 
  - Custom vertical tab component with pull-out animation on hover
  - Magnetic button effect using framer-motion
  - Custom cursor implementation with follower element
  - Animated SVG tree with stroke-dasharray animation
  - Parallax scroll effects on hero section
  - Floating particles system in hero background

- **States**: 
  - Buttons: Default (gold border), Hover (gold fill, black text, glow), Active (scale down), Focus (ring)
  - Tabs: Collapsed (icon only), Expanded (full label), Active (gold accent), Hover (slight expansion)
  - Cards: Default (subtle border), Hover (elevated shadow, gold top border, translate up)
  - Navigation: Transparent (hero section), Solid backdrop blur (scrolled)

- **Icon Selection**: 
  - Phosphor Icons - thin weight for sophistication
  - Custom SVG logo and tree illustrations
  - Geometric service icons (custom designed for brand consistency)

- **Spacing**: 
  - Sections: `py-40` (10rem) for breathing room
  - Cards: `p-12` (3rem) for luxury spacing
  - Grid gaps: `gap-8` (2rem) to prevent crowding
  - Content max-width: 1200px for optimal reading
  - Generous whitespace using `space-y-6` and `space-y-12`

- **Mobile**: 
  - Pull-out tabs collapse into top navbar with hamburger menu
  - Hero logo scales down to 200px
  - Grid layouts switch to single column at 768px breakpoint
  - Font sizes use `clamp()` for fluid scaling
  - Touch targets minimum 44px for accessibility
  - Disable custom cursor and magnetic effects on touch devices
