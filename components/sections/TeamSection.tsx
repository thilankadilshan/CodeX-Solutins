'use client'
// components/sections/TeamSection.tsx

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TEAM_MEMBERS } from '@/lib/data'
import { Linkedin, Github, Twitter } from 'lucide-react'

// Avatar fallback — initials inside gradient circle
function AvatarFallback({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div
      className="w-full h-full flex items-center justify-center text-3xl font-black text-white"
      style={{
        background: 'linear-gradient(135deg, #e8000d 0%, #7c0005 100%)',
      }}
    >
      {initials}
    </div>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="section-pad relative overflow-hidden bg-dark-800/30">
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(232,0,13,0.4) 0%, transparent 70%)' }}
      />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="The Team"
          title="Minds Behind the "
          highlight="Magic"
          subtitle="Passionate engineers, designers, and strategists united by one goal — your success."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="card-glass rounded-2xl overflow-hidden text-center group"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="h-52 w-full overflow-hidden">
                  <AvatarFallback name={member.name} />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 pt-4">
                <h3 className="font-display font-bold text-white text-lg leading-snug">
                  {member.name}
                </h3>
                <p className="text-brand-500 text-sm font-medium mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Socials */}
                <div className="flex justify-center gap-3">
                  {member.socials?.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="p-2 rounded-lg glass border border-white/10 text-gray-500 hover:text-brand-500 hover:border-brand-500/40 transition-all"
                    >
                      <Linkedin size={15} />
                    </a>
                  )}
                  {member.socials?.github && (
                    <a
                      href={member.socials.github}
                      aria-label={`${member.name} GitHub`}
                      className="p-2 rounded-lg glass border border-white/10 text-gray-500 hover:text-white hover:border-white/30 transition-all"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {member.socials?.twitter && (
                    <a
                      href={member.socials.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="p-2 rounded-lg glass border border-white/10 text-gray-500 hover:text-sky-400 hover:border-sky-400/40 transition-all"
                    >
                      <Twitter size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
