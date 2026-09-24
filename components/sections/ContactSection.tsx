'use client'
// components/sections/ContactSection.tsx — Professional strict dark/light form

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'

export function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
  }

  return (
    <section id="contact" className="section-pad bg-gray-950 text-white border-t border-gray-900">
      <div className="container-max">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="section-title text-white mb-6">Initiate Dialogue</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
              Partner with CodeX Solutions to engineer your next digital platform. Our technical architects are ready to review your requirements.
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:hello@codexsolutions.dev" className="text-xl font-medium hover:text-brand-500 transition-colors">
                  hello@codexsolutions.dev
                </a>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:+94112345678" className="text-xl font-medium hover:text-brand-500 transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Location</p>
                <p className="text-xl font-medium text-gray-300">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </div>

          <div>
            {success ? (
              <div className="h-full min-h-[400px] bg-gray-900 p-12 border border-gray-800 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mb-6">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Transmission Received</h3>
                <p className="text-gray-400">
                  Our systems have securely logged your inquiry. An architect will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-900 p-8 sm:p-12 border border-gray-800 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                    <input required type="text" className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                    <input required type="email" className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Company</label>
                  <input type="text" className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Project Brief</label>
                  <textarea required rows={4} className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full mt-4">
                  {loading ? <Loader2 size={16} className="animate-spin" /> : 'Submit Requirements'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
