'use client'
// components/layout/Footer.tsx

import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/data'
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react'

const SOCIAL_LINKS = [
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Github,    href: '#', label: 'GitHub' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Logo size={36} />
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
              Full-service software development company delivering enterprise-grade
              solutions with a passion for excellence.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-brand-500/40 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-500 text-sm hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'DevOps & Cloud', 'UI/UX Design', 'AI & ML', 'Cybersecurity'].map(s => (
                <li key={s}>
                  <span className="text-gray-500 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} CodeX Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Terms of Service</a>
            <button
              id="scroll-to-top"
              onClick={scrollTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-brand-500/40 transition-all"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
