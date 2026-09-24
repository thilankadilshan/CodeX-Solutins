'use client'
// components/ui/SectionHeader.tsx — Light theme

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow:    string
  title:      string
  highlight?: string
  subtitle?:  string
  center?:    boolean
}

export function SectionHeader({ eyebrow, title, highlight, subtitle, center = true }: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {/* Eyebrow */}
      <div className={`flex items-center gap-2 mb-5 ${center ? 'justify-center' : ''}`}>
        <span className="w-5 h-0.5 rounded-full bg-brand-500" />
        <span className="text-brand-500 text-xs font-bold tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
        <span className="w-5 h-0.5 rounded-full bg-brand-500" />
      </div>

      {/* Title */}
      <h2 className="section-title mb-5">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-gradient-red">{highlight}</span>
            {titleParts[1]}
          </>
        ) : title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-gray-600 text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
