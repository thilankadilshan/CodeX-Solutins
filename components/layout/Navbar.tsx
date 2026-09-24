'use client'
// components/layout/Navbar.tsx — Professional, dark theme, modern

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/data'

export function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const go = (href: string) => {
    setMobileOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0C1627]/90 backdrop-blur-md shadow-nav border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button onClick={() => go('#home')} className="focus:outline-none" aria-label="Home">
              <Logo size={130} />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.href}
                    onClick={() => go(link.href)}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-teal-500' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button
                id="nav-cta-button"
                onClick={() => go('#contact')}
                className="btn-primary text-sm px-6 py-2.5"
              >
                Start a Project
              </button>
            </div>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(p => !p)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-[#0C1627] border-b border-white/10 shadow-xl lg:hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className={`text-left text-lg font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-teal-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => go('#contact')}
                className="btn-primary mt-4 w-full justify-center"
                id="mobile-cta-button"
              >
                Start a Project
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}