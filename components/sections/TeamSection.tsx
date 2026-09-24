'use client'
// components/sections/TeamSection.tsx — Professional, monochrome

import { motion } from 'framer-motion'
import { TEAM_MEMBERS } from '@/lib/data'
import { Linkedin, Github, Twitter } from 'lucide-react'

export function TeamSection() {
  return (
    <section id="team" className="section-pad bg-gray-50 border-t border-gray-200">
      <div className="container-max">
        
        <div className="max-w-2xl mb-16">
          <h2 className="section-title mb-6">Leadership</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our team comprises senior engineers and product strategists who have shipped software for Fortune 500 companies and high-growth startups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="w-full aspect-square bg-gray-200 mb-6 flex items-center justify-center text-5xl font-black text-gray-400 grayscale transition-all group-hover:grayscale-0 group-hover:bg-gray-900 group-hover:text-white">
                {member.name.split(' ').map(w => w[0]).join('')}
              </div>

              <h3 className="font-display font-semibold text-gray-900 text-xl mb-1">
                {member.name}
              </h3>
              <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-4">
                {member.role}
              </p>
              
              {/* Minimal social links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Linkedin size={16} />
                  </a>
                )}
                {member.socials?.github && (
                  <a href={member.socials.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Github size={16} />
                  </a>
                )}
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Twitter size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
