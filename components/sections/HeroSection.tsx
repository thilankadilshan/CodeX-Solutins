'use client'
// components/sections/HeroSection.tsx — Professional, typographic, sharp

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center bg-white bg-grid-premium pt-20">
      
      {/* Absolute strict gradient accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-brand-500 to-red-600" />

      <div className="container-max relative z-10 px-4 py-20 lg:py-32 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-600 tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-brand-500 rounded-none" />
          Enterprise Engineering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="hero-title max-w-5xl"
        >
          Architecting digital infrastructure for the next generation of business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-gray-500 text-lg max-w-2xl leading-relaxed"
        >
          We partner with industry leaders to design, build, and scale mission-critical software solutions using uncompromising technical standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <button onClick={() => go('contact')} className="btn-primary">
            Engage Our Team
            <ArrowRight size={16} />
          </button>
          <button onClick={() => go('portfolio')} className="btn-outline">
            Review Case Studies
          </button>
        </motion.div>
        
      </div>
      
      {/* Decorative strictly horizontal bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />
    </section>
  )
}
