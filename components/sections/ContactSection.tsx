'use client'
// components/sections/ContactSection.tsx

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'

const CONTACT_INFO = [
  { icon: Mail,    label: 'Email Us',    value: 'hello@codexsolutions.dev',  href: 'mailto:hello@codexsolutions.dev' },
  { icon: Phone,   label: 'Call Us',     value: '+94 11 234 5678',           href: 'tel:+94112345678' },
  { icon: MapPin,  label: 'Find Us',     value: 'Colombo, Sri Lanka',        href: '#' },
]

const SERVICES_OPTIONS = [
  'Web Development', 'Mobile App', 'QA & Testing',
  'DevOps & Cloud', 'UI/UX Design', 'AI & ML',
  'Cybersecurity', 'IT Consulting',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [selected, setSelected]  = useState<string[]>([])
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const toggleService = (s: string) =>
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800))
    setFormState('success')
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-dark-800/30">
      {/* Background glows */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(232,0,13,0.25) 0%, transparent 70%)' }}
      />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="Contact Us"
          title="Let's Build Something "
          highlight="Great"
          subtitle="Tell us about your project and we'll get back to you within 24 hours with a tailored proposal."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left sidebar — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 glass-red rounded-xl p-5 group transition-all hover:border-brand-500/40"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <Icon size={18} className="text-brand-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                  <p className="text-white text-sm font-medium mt-0.5">{value}</p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                  Currently Accepting Projects
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We have capacity for 3 new projects this quarter.
                Reach out now to secure your spot.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-glass rounded-2xl p-12 text-center flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 max-w-sm">
                  Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-glass rounded-2xl p-8 space-y-6"
                id="contact-form"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'contact-name',    name: 'name',    label: 'Your Name',        type: 'text',  placeholder: 'John Doe',         required: true },
                    { id: 'contact-email',   name: 'email',   label: 'Email Address',    type: 'email', placeholder: 'john@company.com', required: true },
                  ].map(({ id, name, label, type, placeholder, required }) => (
                    <div key={name}>
                      <label htmlFor={id} className="block text-xs font-medium text-gray-400 mb-2 tracking-wider uppercase">
                        {label}
                      </label>
                      <input
                        id={id}
                        name={name}
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        value={form[name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-500/60 focus:bg-white/8 transition-all"
                      />
                    </div>
                  ))}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="contact-company" className="block text-xs font-medium text-gray-400 mb-2 tracking-wider uppercase">
                    Company (Optional)
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your Company Name"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-500/60 transition-all"
                  />
                </div>

                {/* Services */}
                <div>
                  <p className="text-xs font-medium text-gray-400 mb-3 tracking-wider uppercase">
                    Services Interested In
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_OPTIONS.map(s => (
                      <button
                        key={s}
                        type="button"
                        id={`service-tag-${s.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => toggleService(s)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                          selected.includes(s)
                            ? 'bg-brand-500/20 border-brand-500/60 text-brand-400'
                            : 'bg-white/3 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-gray-400 mb-2 tracking-wider uppercase">
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-500/60 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={formState === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
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
