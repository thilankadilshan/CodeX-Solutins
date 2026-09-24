'use client'
// components/sections/PortfolioSection.tsx

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PROJECTS } from '@/lib/data'
import { ExternalLink, Github } from 'lucide-react'

type Category = 'All' | 'Web' | 'Mobile' | 'Design' | 'AI'

const FILTERS: Category[] = ['All', 'Web', 'Mobile', 'Design', 'AI']

// Placeholder gradient backgrounds for each project (no external images needed)
const PROJECT_GRADIENTS: Record<string, string> = {
  ecommerce: 'linear-gradient(135deg, #1a0a2e 0%, #2d0037 50%, #e8000d20 100%)',
  healthcare: 'linear-gradient(135deg, #0a1a2e 0%, #003366 50%, #0066cc20 100%)',
  fintech:    'linear-gradient(135deg, #001a0a 0%, #003322 50%, #00cc6620 100%)',
  logistics:  'linear-gradient(135deg, #1a1a00 0%, #332200 50%, #ffaa0020 100%)',
  social:     'linear-gradient(135deg, #1a0a1a 0%, #330033 50%, #cc00cc20 100%)',
  iot:        'linear-gradient(135deg, #001a1a 0%, #003333 50%, #00cccc20 100%)',
}

const PROJECT_ICONS: Record<string, string> = {
  ecommerce: '🛒', healthcare: '🏥', fintech: '📊',
  logistics: '🚛', social: '💬', iot: '⚡',
}

export function PortfolioSection() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="Our Work"
          title="Projects That "
          highlight="Speak"
          subtitle="A curated selection of our most impactful projects across industries and technologies."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map(filter => (
            <button
              key={filter}
              id={`portfolio-filter-${filter.toLowerCase()}`}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === filter
                  ? 'bg-brand-500 text-white shadow-glow-sm'
                  : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group card-glass rounded-2xl overflow-hidden"
              >
                {/* Visual header */}
                <div
                  className="relative h-48 flex items-center justify-center overflow-hidden"
                  style={{ background: PROJECT_GRADIENTS[project.id] }}
                >
                  <span className="text-7xl filter drop-shadow-lg">{PROJECT_ICONS[project.id]}</span>

                  {/* Category badge */}
                  <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400">
                    {project.category}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark-900/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        className="p-3 rounded-full glass border border-white/20 text-white hover:border-brand-500 transition-colors"
                        aria-label={`View ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="p-3 rounded-full glass border border-white/20 text-white hover:border-brand-500 transition-colors"
                        aria-label={`GitHub for ${project.title}`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
