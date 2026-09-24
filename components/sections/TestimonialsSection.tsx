'use client'
// components/sections/TestimonialsSection.tsx

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TESTIMONIALS } from '@/lib/data'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-700'}>★</span>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const go = (dir: 1 | -1) => {
    setDirection(dir)
    setCurrent(c => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients "
          highlight="Say"
          subtitle="Don't take our word for it — hear from the people who've worked with us."
        />

        {/* Testimonial carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl glass-red flex items-center justify-center">
              <Quote size={24} className="text-brand-500" />
            </div>
          </div>

          {/* Slide */}
          <div className="relative overflow-hidden min-h-[220px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="text-center px-4"
              >
                <StarRating rating={TESTIMONIALS[current].rating} />
                <blockquote className="mt-5 text-gray-200 text-lg sm:text-xl leading-relaxed italic font-light max-w-2xl mx-auto">
                  "{TESTIMONIALS[current].content}"
                </blockquote>
                <div className="mt-8">
                  <p className="font-display font-bold text-white text-lg">
                    {TESTIMONIALS[current].name}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {TESTIMONIALS[current].role} · {TESTIMONIALS[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              id="testimonial-prev"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-brand-500/40 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-brand-500' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-brand-500/40 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
