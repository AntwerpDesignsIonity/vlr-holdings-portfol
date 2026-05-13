import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { 
  ChartLine, 
  Tree, 
  Users, 
  Target,
  Lightbulb,
  TrendUp,
  Globe,
  Scroll,
  Buildings,
  Cpu,
  Leaf,
  Handshake,
  Plant,
  Coins
} from '@phosphor-icons/react'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      const sections = ['hero', 'philosophy', 'growth', 'services', 'investments', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="grain-overlay" />
      <GoldDust />
      <CustomCursor />
      <Preloader isLoading={isLoading} />
      <Navigation isScrolled={isScrolled} />
      <PullOutTabs activeSection={activeSection} />
      <HeroSection />
      <PhilosophySection />
      <GrowthSection />
      <ServicesSection />
      <InvestmentOpportunitiesSection />
      <ParallaxDivider />
      <ContactSection />
      <Footer />
    </>
  )
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.left = `${e.clientX}px`
            followerRef.current.style.top = `${e.clientY}px`
          }
        }, 100)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 border border-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-100"
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, oklch(0.75 0.12 85 / 0.15) 0%, transparent 70%)'
        }}
      />
    </>
  )
}

function Preloader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-background z-[10000] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-32 h-32"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                stroke="oklch(0.75 0.12 85)"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="22"
                stroke="oklch(0.75 0.12 85)"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              />
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fill="oklch(0.75 0.12 85)"
                fontSize="24"
                fontWeight="300"
                fontFamily="Cormorant Garamond, serif"
              >
                VLR
              </text>
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-primary text-xl tracking-[0.3em] mt-8"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Kasvukapital
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 2, delay: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Navigation({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6 flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl py-4' : ''
      }`}
    >
      <a
        href="#hero"
        className="text-2xl tracking-[0.2em] font-light relative group"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        VLR
        <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
      </a>

      <ul className="hidden md:flex items-center gap-12">
        {[
          { label: 'Philosophy', href: '#philosophy' },
          { label: 'Growth', href: '#growth' },
          { label: 'Services', href: '#services' },
          { label: 'Investments', href: '#investments' },
          { label: 'Contact', href: '#contact' }
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-right group-hover:origin-left" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

function PullOutTabs({ activeSection }: { activeSection: string }) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  const tabs = [
    { id: 'hero', label: 'Home', icon: <Scroll size={20} weight="thin" />, href: '#hero' },
    { id: 'philosophy', label: 'Philosophy', icon: <Lightbulb size={20} weight="thin" />, href: '#philosophy' },
    { id: 'growth', label: 'Growth', icon: <Tree size={20} weight="thin" />, href: '#growth' },
    { id: 'services', label: 'Services', icon: <Target size={20} weight="thin" />, href: '#services' },
    { id: 'investments', label: 'Investments', icon: <ChartLine size={20} weight="thin" />, href: '#investments' },
    { id: 'contact', label: 'Contact', icon: <Users size={20} weight="thin" />, href: '#contact' }
  ]

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <motion.a
            key={tab.id}
            href={tab.href}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`flex items-center overflow-hidden ${
              activeSection === tab.id ? 'text-accent' : 'text-foreground'
            }`}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 3 + tabs.indexOf(tab) * 0.1 }}
          >
            <motion.div
              className="flex items-center gap-4 bg-card/90 backdrop-blur-sm border border-primary/30 px-4 py-3 relative shadow-lg"
              animate={{
                width: hoveredTab === tab.id ? 'auto' : '48px'
              }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              {activeSection === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
              )}
              <div className="shrink-0 text-primary">{tab.icon}</div>
              <motion.span
                className="text-xs tracking-[0.2em] uppercase whitespace-nowrap text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredTab === tab.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {tab.label}
              </motion.span>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-card/80 to-background" />
      
      <Particles />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
          className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8"
        >
          <TreeLogo />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] mb-4 bg-gradient-to-br from-accent via-primary to-primary/70"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          VLR Holdings
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 60, opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.2 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="text-xl md:text-2xl tracking-[0.3em] text-muted-foreground italic mb-8"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Cultivating Tomorrow's Giants
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="text-xs tracking-[0.4em] uppercase text-primary"
        >
          Est. Kasvukapital
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Discover</span>
        <motion.div
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent origin-top"
        />
      </motion.div>
    </section>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%'
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

function TreeLogo() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full drop-shadow-[0_0_40px_oklch(0.75_0.12_85/0.2)]">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
          <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
          <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
        </linearGradient>
      </defs>
      
      <motion.path
        d="M200 320 C200 320, 180 280, 160 240 C140 200, 120 160, 100 140 C80 120, 60 110, 50 105"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M200 320 C200 320, 220 280, 240 240 C260 200, 280 160, 300 140 C320 120, 340 110, 350 105"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 3.2, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M160 240 C140 220, 120 200, 110 190"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 4, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M240 240 C260 220, 280 200, 290 190"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 4.2, ease: "easeInOut" }}
      />
      
      {[
        { cx: 50, cy: 105, delay: 5 },
        { cx: 350, cy: 105, delay: 5.1 },
        { cx: 95, cy: 120, delay: 5.2 },
        { cx: 305, cy: 120, delay: 5.3 }
      ].map((leaf, i) => (
        <motion.ellipse
          key={i}
          cx={leaf.cx}
          cy={leaf.cy}
          rx="8"
          ry="4"
          fill="url(#goldGrad)"
          opacity="0.8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: leaf.delay }}
        />
      ))}
    </svg>
  )
}

function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="philosophy" className="relative py-40 px-4 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,20vw,20rem)] opacity-[0.03] whitespace-nowrap pointer-events-none select-none"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        GROWTH
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-8 text-[11px] tracking-[0.4em] uppercase text-primary mb-8"
        >
          <span className="w-8 h-px bg-primary" />
          Our Philosophy
          <span className="w-8 h-px bg-primary" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
        >
          We don't just invest in companies.
          <br />
          We <span className="shimmer-text">nurture potential</span> into permanence.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-loose text-muted-foreground max-w-3xl mx-auto"
        >
          Like the ancient tree that withstands seasons, we believe in organic growth rooted in strong fundamentals.
          VLR Holdings operates at the intersection of vision and patience — where strategic capital meets
          timeless business principles. Every investment is a seed planted with intention, watered with expertise,
          and given the time to reach its natural height.
        </motion.p>
      </div>
    </section>
  )
}

function GrowthSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="growth" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <AnimatedTree isInView={isInView} />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-8 text-[11px] tracking-[0.4em] uppercase text-primary mb-8"
            >
              <span className="w-8 h-px bg-primary" />
              The Art of Growth
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl leading-tight mb-6"
            >
              Patience is the ultimate competitive advantage
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg leading-loose text-muted-foreground mb-12"
            >
              In a world obsessed with speed, we choose depth. Our investment horizon is measured in decades,
              not quarters. We partner with founders who share our conviction that extraordinary outcomes
              require extraordinary patience.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 25, label: 'Years of Excellence', delay: 0.3 },
                { value: 40, label: 'Portfolio Companies', delay: 0.4 },
                { value: 12, label: 'Markets Served', delay: 0.5 },
                { value: 98, label: 'Partner Retention %', delay: 0.6, suffix: '%' }
              ].map((stat) => (
                <StatCard key={stat.label} stat={stat} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedTree({ isInView }: { isInView: boolean }) {
  return (
    <div className="w-full max-w-md">
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_oklch(0.75_0.12_85/0.15)]">
        <defs>
          <linearGradient id="treeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.12 85)" />
            <stop offset="50%" stopColor="oklch(0.75 0.12 85)" />
            <stop offset="100%" stopColor="oklch(0.88 0.08 90)" />
          </linearGradient>
        </defs>

        {[
          "M200 380 C200 380, 195 350, 190 320 C185 290, 180 260, 170 240",
          "M200 380 C200 380, 205 350, 210 320 C215 290, 220 260, 230 240",
          "M190 320 C170 300, 150 280, 130 270",
          "M210 320 C230 300, 250 280, 270 270",
          "M170 240 C150 220, 130 200, 110 190",
          "M230 240 C250 220, 270 200, 290 190"
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#treeGrad)"
            strokeWidth={i < 2 ? 3 : i < 4 ? 2 : 1.5}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}

        {[
          { cx: 110, cy: 190 },
          { cx: 130, cy: 270 },
          { cx: 270, cy: 270 },
          { cx: 290, cy: 190 },
          { cx: 200, cy: 240 }
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r={i === 0 || i === 3 ? 4 : 3}
            fill="oklch(0.75 0.12 85)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
          />
        ))}
      </svg>
    </div>
  )
}

function StatCard({ stat, isInView }: { stat: { value: number; label: string; delay: number; suffix?: string }; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = stat.value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: stat.delay }}
    >
      <Card className="p-6 border-border bg-card hover:border-primary hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="text-4xl mb-2 text-primary" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {count}{stat.suffix || '+'}
          </div>
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</div>
        </div>
      </Card>
    </motion.div>
  )
}

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      number: '01',
      icon: <ChartLine size={50} weight="thin" />,
      title: 'Strategic Capital',
      description: 'Patient, long-term investment structures designed to support sustainable scaling without compromising vision or culture.'
    },
    {
      number: '02',
      icon: <TrendUp size={50} weight="thin" />,
      title: 'Operational Excellence',
      description: 'Hands-on partnership with access to our network of operators, advisors, and industry specialists across sectors.'
    },
    {
      number: '03',
      icon: <Globe size={50} weight="thin" />,
      title: 'Market Expansion',
      description: 'Global reach with local expertise. We open doors to new markets, partnerships, and opportunities across continents.'
    }
  ]

  return (
    <section ref={ref} id="services" className="py-40 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-8 text-[11px] tracking-[0.4em] uppercase text-primary mb-8"
          >
            <span className="w-8 h-px bg-primary" />
            What We Do
            <span className="w-8 h-px bg-primary" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl"
          >
            Comprehensive Growth Capital
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isInView }: { service: any; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="p-12 h-full bg-background border-border/50 hover:border-primary/30 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-600 relative overflow-hidden group">
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        <div className="absolute top-8 right-8 text-8xl opacity-5" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {service.number}
        </div>

        <div className="relative">
          <div className="text-primary mb-8">{service.icon}</div>
          <h3 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

function ParallaxDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <motion.div style={{ y }} className="relative z-10 max-w-4xl px-4 text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl italic text-accent/90 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          "The best time to plant a tree was 20 years ago.
          <br />
          The second best time is now."
        </p>
      </motion.div>
    </section>
  )
}

function GoldDust() {
  interface Particle {
    id: number
    x: number
    delay: number
    duration: number
    scale: number
  }

  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 20 + Math.random() * 15,
      scale: 0.3 + Math.random() * 1
    }))
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: '110%',
            background: 'radial-gradient(circle, oklch(0.75 0.12 85) 0%, oklch(0.88 0.08 90) 50%, transparent 70%)',
            boxShadow: '0 0 8px oklch(0.75 0.12 85 / 0.6), 0 0 15px oklch(0.75 0.12 85 / 0.3)'
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0, particle.scale, particle.scale * 1.5, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

function InvestmentOpportunitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const investments = [
    {
      title: 'Technology Innovation',
      icon: <Cpu size={40} weight="thin" />,
      description: 'Investing in cutting-edge technologies that shape the future of industries and create sustainable competitive advantages.'
    },
    {
      title: 'Assets of Value',
      icon: <Coins size={40} weight="thin" />,
      description: 'Strategic acquisition of high-value assets with proven track records and strong fundamentals for long-term appreciation.'
    },
    {
      title: 'Real Estate',
      icon: <Buildings size={40} weight="thin" />,
      description: 'Premium property investments in strategic locations, focusing on sustainable development and value creation.'
    },
    {
      title: 'Agriculture',
      icon: <Plant size={40} weight="thin" />,
      description: 'Modern agricultural ventures that combine traditional wisdom with innovative practices for sustainable food production.'
    },
    {
      title: 'Green Tomorrow',
      icon: <Leaf size={40} weight="thin" />,
      description: 'Environmental sustainability initiatives and renewable energy projects that build a better future for generations.'
    },
    {
      title: 'Business Growth Sustainability Program',
      icon: <TrendUp size={40} weight="thin" />,
      description: 'Comprehensive programs designed to accelerate business growth while maintaining environmental and social responsibility.'
    },
    {
      title: 'Business Opportunities',
      icon: <Handshake size={40} weight="thin" />,
      description: 'Strategic partnerships and joint ventures that unlock new markets and create mutual value for all stakeholders.'
    }
  ]

  return (
    <section ref={ref} id="investments" className="py-40 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-8 text-[11px] tracking-[0.4em] uppercase text-primary mb-8"
          >
            <span className="w-8 h-px bg-primary" />
            Investment Opportunities
            <span className="w-8 h-px bg-primary" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl mb-6"
          >
            Diverse Portfolio, <span className="shimmer-text">Unified Vision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our investment philosophy spans multiple sectors, united by a commitment to sustainable growth and long-term value creation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment, index) => (
            <InvestmentCard key={investment.title} investment={investment} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function InvestmentCard({ investment, index, isInView }: { investment: any; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + (index % 3) * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="p-8 h-full bg-card border-border/50 hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative">
          <motion.div
            className="text-primary mb-6"
            animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {investment.icon}
          </motion.div>
          
          <h3 className="text-xl mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {investment.title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {investment.description}
          </p>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </Card>
    </motion.div>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="contact" className="py-40 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-8 text-[11px] tracking-[0.4em] uppercase text-primary mb-8"
        >
          <span className="w-8 h-px bg-primary" />
          Begin the Journey
          <span className="w-8 h-px bg-primary" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl mb-8"
        >
          Let's cultivate something extraordinary
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-loose text-muted-foreground mb-12"
        >
          Whether you're a founder seeking a partner who understands the long game,
          or an investor aligned with our philosophy of patient capital, we invite you to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-muted-foreground mb-8"
        >
          <a href="mailto:info@vlr-holdings.co.za" className="text-primary hover:text-accent transition-colors duration-300 text-lg">
            info@vlr-holdings.co.za
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <MagneticButton href="mailto:info@vlr-holdings.co.za">
            Initiate Dialogue
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block relative"
    >
      <Button
        size="lg"
        className="px-12 py-6 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs tracking-[0.3em] uppercase transition-all duration-600 relative overflow-hidden group"
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-primary"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'right' }}
        />
      </Button>
    </motion.a>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border/50 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-3xl tracking-[0.2em] mb-4 text-primary" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          VLR
        </div>
        <div className="text-xs tracking-[0.3em] text-muted-foreground mb-8">
          Kasvukapital — Growth Capital
        </div>
        
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {['Privacy', 'Terms', 'LinkedIn', 'Twitter'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <Separator className="mb-8 bg-border/30" />

        <div className="text-[11px] text-muted-foreground/70 tracking-[0.1em] mb-4">
          Created by Ionity Global (Pty) Ltd | Antwerp Designs
        </div>
        <div className="text-[11px] text-muted-foreground/50 tracking-[0.1em]">
          © 2018-2026 VLR Holdings. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  )
}

export default App
