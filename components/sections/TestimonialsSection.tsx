'use client'
// components/sections/TestimonialsSection.tsx â€” Professional layout

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
  const [cur, setCur] = useState(0)

  const go = (d: 1 | -1) => {
    setCur(c => (c + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section id="testimonials" className="section-pad bg-navy-900">
      <div className="container-max">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-4">
            <h2 className="section-title mb-6">Client Impact</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We measure our success by the growth and operational efficiency we deliver to our partners.
            </p>
            
            <div className="flex gap-2">
              <button onClick={() => go(-1)} className="w-12 h-12 flex items-center justify-center border border-white/10 text-gray-400 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => go(1)} className="w-12 h-12 flex items-center justify-center border border-white/10 text-gray-400 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative min-h-[300px] bg-[#0C1627] p-8 sm:p-12 border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(TESTIMONIALS[cur].rating)].map((_, i) => (
                      <span key={i} className="text-teal-500 text-xl">â˜…</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-white text-xl sm:text-2xl font-display font-medium leading-relaxed mb-12">
                    "{TESTIMONIALS[cur].content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 bg-teal-500 flex items-center justify-center text-white font-bold">
                      {TESTIMONIALS[cur].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{TESTIMONIALS[cur].name}</p>
                      <p className="text-sm text-gray-400">{TESTIMONIALS[cur].role}, {TESTIMONIALS[cur].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

