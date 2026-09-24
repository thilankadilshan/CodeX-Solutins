'use client'
// components/sections/AboutSection.tsx

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TECH_ROW_1, TECH_ROW_2, STATS } from '@/lib/data'
import { CheckCircle2 } from 'lucide-react'

const VALUES = [
  'Client-first approach on every project',
  'Agile delivery with bi-weekly sprints',
  'Enterprise-grade security & compliance',
  'Transparent communication, always',
  'Post-launch support & maintenance',
  'Full IP ownership transferred to you',
]

function TechMarquee({ items, reverse = false }: { items: typeof TECH_ROW_1; reverse?: boolean }) {
  // Double items to create seamless loop
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-3">
      <motion.div
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
        className="flex gap-4 w-max"
      >
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-2 glass border border-white/5 rounded-lg px-4 py-2.5 flex-shrink-0"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(232,0,13,0.3) 0%, transparent 70%)' }}
      />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <SectionHeader
              eyebrow="About Us"
              title="A Team That "
              highlight="Delivers"
              subtitle="Founded with a vision to bridge the gap between business goals and technology excellence, CodeX Solutions has grown into a 30+ member powerhouse delivering results across 4 continents."
              center={false}
            />

            {/* Values list */}
            <ul className="space-y-3 mb-10">
              {VALUES.map((v, i) => (
                <motion.li
                  key={v}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <CheckCircle2 size={18} className="text-brand-500 flex-shrink-0" />
                  {v}
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              id="about-contact-btn"
            >
              Work With Us
            </button>
          </motion.div>

          {/* Right — stats grid + tech marquee */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-glass rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-4xl font-black text-white">
                    {stat.prefix}{stat.value}
                    <span className="text-brand-500">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack marquee */}
            <div className="glass rounded-2xl p-4 overflow-hidden">
              <p className="text-xs text-gray-500 text-center mb-3 tracking-widest uppercase">
                Technologies We Master
              </p>
              <TechMarquee items={TECH_ROW_1} />
              <TechMarquee items={TECH_ROW_2} reverse />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
