// types/index.ts — Shared TypeScript types and interfaces

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// ─── Services ────────────────────────────────────────────────────────────────
export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  color: string
}

// ─── Portfolio / Projects ─────────────────────────────────────────────────────
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

// ─── Team ────────────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  socials?: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar?: string
  content: string
  rating: number
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

// ─── Process Steps ────────────────────────────────────────────────────────────
export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}
