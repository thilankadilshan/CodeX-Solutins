'use client'
// components/sections/ServicesSection.tsx

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SERVICES } from '@/lib/data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ServicesSection() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      {/* Subtle background dots */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="What We Do"
          title="Services Built for "
          highlight="Growth"
          subtitle="From concept to deployment, we deliver full-stack solutions that drive measurable business outcomes."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              className="card-glass rounded-2xl p-6 flex flex-col group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-lg mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              {/* Feature tags */}
              <ul className="flex flex-wrap gap-2">
                {service.features.map(f => (
                  <li
                    key={f}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10 text-gray-400"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
