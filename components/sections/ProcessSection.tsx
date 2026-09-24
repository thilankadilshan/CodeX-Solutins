'use client'
// components/sections/ProcessSection.tsx

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PROCESS_STEPS } from '@/lib/data'

export function ProcessSection() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-dark-800/40">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Proven "
          highlight="Process"
          subtitle="A structured, transparent methodology that transforms your vision into a polished product — every time."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-14 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(232,0,13,0.4) 20%, rgba(232,0,13,0.4) 80%, transparent)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step bubble */}
                <div className="relative mb-6">
                  <div
                    className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center card-glass group-hover:border-brand-500/50 transition-all duration-300"
                  >
                    <span className="text-3xl mb-1">{step.icon}</span>
                    <span className="text-[10px] font-bold text-brand-500 tracking-widest">
                      STEP {step.step}
                    </span>
                  </div>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: '0 0 30px rgba(232,0,13,0.2)' }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-white text-sm mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[140px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 text-center glass-red rounded-2xl p-10"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Join 80+ clients who trusted CodeX to build their digital products.
            Let's start with a free discovery call.
          </p>
          <button
            id="process-cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary mx-auto"
          >
            Book a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
