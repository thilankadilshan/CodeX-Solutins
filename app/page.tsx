// app/page.tsx — CodeX Solutions main page, assembling all sections

import { Navbar }               from '@/components/layout/Navbar'
import { Footer }               from '@/components/layout/Footer'
import { HeroSection }          from '@/components/sections/HeroSection'
import { ServicesSection }      from '@/components/sections/ServicesSection'
import { AboutSection }         from '@/components/sections/AboutSection'
import { ProcessSection }       from '@/components/sections/ProcessSection'
import { PortfolioSection }     from '@/components/sections/PortfolioSection'
import { TeamSection }          from '@/components/sections/TeamSection'
import { TestimonialsSection }  from '@/components/sections/TestimonialsSection'
import { ContactSection }       from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
