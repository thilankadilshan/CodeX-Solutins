'use client'
// components/layout/Footer.tsx — Dark theme strictly

import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/data'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github,   href: '#', label: 'GitHub' },
  { icon: Twitter,  href: '#', label: 'Twitter' },
]

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size={140} className="mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              CodeX Solutions is a premium software engineering agency dedicated to building high-performance, scalable digital products for forward-thinking enterprises.
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">Company</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">Expertise</h3>
            <ul className="space-y-3">
              {['Web Architecture', 'Native Mobile', 'Cloud Infrastructure', 'Enterprise Security', 'Machine Learning'].map(s => (
                <li key={s}>
                  <span className="text-gray-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeX Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms</a>
            <button onClick={scrollTop} aria-label="Scroll to top"
              className="p-2 text-gray-500 hover:text-white transition-colors ml-4"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
