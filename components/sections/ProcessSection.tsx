'use client'
// components/sections/ProcessSection.tsx â€” Professional, strict timeline

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-[#0C1627] border-t border-white/10">
      <div className="container-max">
        
        <div className="max-w-2xl mb-16">
          <h2 className="section-title mb-6">Methodology</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our delivery pipeline is optimized for risk reduction, transparency, and speed to market. We follow a strict agile framework tailored for enterprise development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-6 border-l border-white/20"
            >
              <div className="absolute top-0 -left-[17px] w-8 h-8 bg-navy-900 border-2 border-teal-500 flex items-center justify-center text-xs font-bold text-white">
                0{step.step}
              </div>
              <h3 className="font-display font-semibold text-white text-xl mb-3 mt-1">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-teal-500 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">Initiate a Technical Assessment</h3>
            <p className="text-gray-400 max-w-lg">
              Schedule a consultation with our system architects to evaluate your project feasibility and architectural requirements.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold hover:bg-[#2D7A7A] transition-colors"
          >
            Request Consultation
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}

