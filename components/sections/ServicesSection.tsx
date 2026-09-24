'use client'
// components/sections/ServicesSection.tsx — Professional, sharp, static

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/data'

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-gray-50">
      <div className="container-max">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Core Capabilities</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We deliver end-to-end engineering excellence across the entire technology stack, specializing in scalable, secure, and resilient systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 lg:p-10 border-b border-r border-gray-200 hover:bg-gray-50 transition-colors group"
            >
              <div className="text-gray-900 mb-8 transition-transform group-hover:-translate-y-1">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-xl mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1 h-1 bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
