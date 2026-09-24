'use client'
// components/sections/ContactSection.tsx â€” Professional, modern form

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, Mail, Phone, MapPin } from 'lucide-react'

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
    <section id="contact" className="section-pad bg-[#0C1627] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-white mb-6">Initiate Dialogue</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
              Partner with CodeX Solutions to engineer your next digital platform. Our technical architects are ready to review your requirements.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-teal-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:hello@codexsolutions.dev" className="text-lg font-medium hover:text-teal-500 transition-colors">
                    hello@codexsolutions.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-teal-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+94112345678" className="text-lg font-medium hover:text-teal-500 transition-colors">
                    +94 11 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-teal-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium text-gray-300">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {success ? (
              <div className="h-full min-h-[400px] bg-navy-900 rounded-2xl p-12 border border-white/10 flex flex-col items-center justify-center text-center shadow-glow">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6 shadow-glow">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Transmission Received</h3>
                <p className="text-gray-400">
                  Our systems have securely logged your inquiry. An architect will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-navy-900 rounded-2xl p-8 sm:p-12 border border-white/10 space-y-6 shadow-xl">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                    <input required type="text" className="w-full bg-[#0C1627] rounded-xl border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                    <input required type="email" className="w-full bg-[#0C1627] rounded-xl border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company</label>
                  <input type="text" className="w-full bg-[#0C1627] rounded-xl border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Project Brief</label>
                  <textarea required rows={4} className="w-full bg-[#0C1627] rounded-xl border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : (
                    <>Submit Requirements <ArrowRight size={18} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

