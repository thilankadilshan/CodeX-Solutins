'use client'
// components/sections/PortfolioSection.tsx — Professional, sharp cards

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

type Category = 'All' | 'Web' | 'Mobile' | 'Design' | 'AI'
const FILTERS: Category[] = ['All', 'Web', 'Mobile', 'Design', 'AI']

export function PortfolioSection() {
  const [active, setActive] = useState<Category>('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <section id="portfolio" className="section-pad bg-white">
      <div className="container-max">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Selected Works</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Examine our portfolio of deployed solutions. We architect platforms that process millions of transactions and scale effortlessly.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2 text-sm font-medium border transition-colors ${
                  active === filter
                    ? 'bg-gray-900 border-gray-900 text-white'
                    : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group border border-gray-200 bg-white hover:border-gray-900 transition-colors cursor-pointer flex flex-col"
              >
                <div className="h-48 bg-gray-50 border-b border-gray-200 flex items-center justify-center text-4xl relative overflow-hidden">
                  <span className="opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                    {project.title.charAt(0)}
                  </span>
                  
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white border border-gray-200 text-xs font-bold text-gray-900 uppercase tracking-widest">
                    {project.category}
                  </div>
                  
                  {/* Arrow reveal */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} className="text-gray-900" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-gray-900 text-xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {project.tags.slice(0,3).map(tag => (
                      <span key={tag} className="text-xs font-medium text-gray-400">
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
