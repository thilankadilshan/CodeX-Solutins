'use client'
// components/sections/HeroSection.tsx — Professional, modern, rounded, eye-catching

import { motion } from 'framer-motion'
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react'

export function HeroSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#0C1627] bg-grid-premium pt-20 overflow-hidden">
      
      {/* Glowing Orbs for background effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crimson-500/20 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-max relative z-10 px-4 py-20 lg:py-32 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 px-4 py-2 bg-navy-800/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-teal-500 tracking-widest uppercase mb-8 shadow-glow"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </span>
          Next-Gen Enterprise Engineering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="hero-title max-w-5xl"
        >
          Architecting digital <span className="text-gradient">infrastructure</span> for the modern business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          We partner with industry leaders to design, build, and scale mission-critical software solutions using uncompromising technical standards and modern aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <button onClick={() => go('contact')} className="btn-primary group">
            Engage Our Team
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button onClick={() => go('portfolio')} className="btn-outline">
            Review Case Studies
          </button>
        </motion.div>
        
        {/* Floating Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          {[
            { icon: Code, title: 'Custom Software', desc: 'Scalable applications built for high performance.' },
            { icon: Globe, title: 'Web Platforms', desc: 'Stunning websites optimized for conversion.' },
            { icon: Cpu, title: 'AI Integration', desc: 'Smart automation for modern enterprises.' }
          ].map((feature, i) => (
            <div key={i} className="card-premium p-8 text-left group">
              <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center text-teal-500 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
      
      {/* Decorative Gradient Bottom Border */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
    </section>
  )
}
