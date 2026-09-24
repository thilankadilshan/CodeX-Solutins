'use client'
// components/sections/PortfolioSection.tsx â€” Professional, modern image cards

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

type Category = 'All' | 'Web' | 'Mobile' | 'Design' | 'AI'
const FILTERS: Category[] = ['All', 'Web', 'Mobile', 'Design', 'AI']

export function PortfolioSection() {
  const [active, setActive] = useState<Category>('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <section id="portfolio" className="section-pad bg-navy-900">
      <div className="container-max">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">Selected Works</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Examine our portfolio of deployed solutions. We architect platforms that process millions of transactions and scale effortlessly.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2 text-sm font-medium border transition-colors rounded-full ${
                  active === filter
                    ? 'bg-teal-500 border-teal-500 text-white shadow-glow'
                    : 'bg-transparent border-white/10 text-gray-400 hover:border-teal-500 hover:text-white'
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
                className="group border border-white/10 bg-navy-900 hover:border-teal-500 transition-colors cursor-pointer flex flex-col rounded-2xl overflow-hidden"
              >
                <div className="h-48 bg-[#0C1627] border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                  
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                  ) : (
                    <span className="text-4xl opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                      {project.title.charAt(0)}
                    </span>
                  )}
                  
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest z-10">
                    {project.category}
                  </div>
                  
                  {/* Arrow reveal */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-teal-500 p-2 rounded-full">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col bg-navy-900">
                  <h3 className="font-display font-semibold text-white text-xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.slice(0,3).map(tag => (
                      <span key={tag} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded-full">
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

