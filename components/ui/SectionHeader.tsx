'use client'
// components/ui/SectionHeader.tsx

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow:    string
  title:      string
  highlight?: string  // word inside title to color red
  subtitle?:  string
  center?:    boolean
}

export function SectionHeader({ eyebrow, title, highlight, subtitle, center = true }: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {/* Eyebrow */}
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
        <div className="h-px w-8 bg-brand-500" />
        <span className="text-brand-500 text-sm font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
        <div className="h-px w-8 bg-brand-500" />
      </div>

      {/* Title */}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-gradient-red">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-gray-400 text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
