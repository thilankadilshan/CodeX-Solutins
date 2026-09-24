'use client'
// components/sections/AboutSection.tsx — Professional, sharp, data-driven

import { motion } from 'framer-motion'
import { STATS, TECH_ROW_1, TECH_ROW_2 } from '@/lib/data'
import { Check } from 'lucide-react'

const VALUES = [
  'Rigorous quality assurance',
  'Transparent, metric-driven progress',
  'Strict IP protection & security',
  'Scalable architecture by default',
]

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-max">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-6">Engineered for Scale</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              CodeX Solutions bridges the gap between ambitious business objectives and technical execution. We combine enterprise engineering standards with startup agility to deliver platforms that perform under pressure.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
              {VALUES.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <Check size={18} className="text-brand-500 mt-1 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-700 font-medium">{v}</span>
                </div>
              ))}
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              Discuss Your Requirements
            </button>
          </div>

          {/* Right Stats & Tech */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 bg-gray-50 border border-gray-200"
                >
                  <div className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.prefix}{stat.value}
                    <span className="text-brand-500">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 bg-gray-950 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {[...TECH_ROW_1, ...TECH_ROW_2].slice(0, 8).map(tech => (
                  <div key={tech.name} className="flex items-center gap-2">
                    <span className="text-gray-400">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
