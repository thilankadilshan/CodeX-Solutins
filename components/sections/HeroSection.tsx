'use client'
// components/sections/HeroSection.tsx

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Code2, Sparkles } from 'lucide-react'
import { STATS } from '@/lib/data'

export function HeroSection() {
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  // Subtle mouse parallax on orbs
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const handleScroll = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-900 bg-hero-mesh"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Glowing orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, rgba(232,0,13,0.12) 0%, transparent 70%)' }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, rgba(100,0,180,0.10) 0%, transparent 70%)' }}
      />

      {/* Floating code badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex items-center gap-2 glass border border-brand-500/20 rounded-full px-5 py-2 mb-8"
      >
        <Sparkles size={14} className="text-brand-500" />
        <span className="text-sm text-gray-300 font-medium">
          Transforming Ideas into Digital Reality
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        className="font-display text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight px-4 max-w-6xl"
      >
        We Build{' '}
        <span className="text-gradient">Software</span>
        <br />
        That{' '}
        <span className="relative inline-block">
          <span className="text-white">Scales</span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-2 left-0 right-0 h-1 bg-brand-500 rounded-full origin-left"
          />
        </span>
        {' '}&{' '}
        <span className="text-gradient-red">Converts</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 text-center text-gray-400 text-lg sm:text-xl max-w-2xl px-4 leading-relaxed"
      >
        CodeX Solutions delivers enterprise-grade web apps, mobile apps, DevOps pipelines,
        and AI solutions — on time, on budget, and beyond expectations.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          id="hero-start-project-btn"
          onClick={() => handleScroll('contact')}
          className="btn-primary text-base px-8 py-4 animate-pulse-glow"
        >
          Start Your Project
          <ArrowRight size={18} />
        </button>
        <button
          id="hero-view-work-btn"
          onClick={() => handleScroll('portfolio')}
          className="btn-outline text-base px-8 py-4"
        >
          <Code2 size={18} />
          View Our Work
        </button>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 px-4"
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-4xl sm:text-5xl font-black text-white">
              {stat.prefix}{stat.value}
              <span className="text-brand-500">{stat.suffix}</span>
            </div>
            <div className="mt-1 text-sm text-gray-500 tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
