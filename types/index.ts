// types/index.ts — TypeScript interfaces

export interface NavItem {
  label: string
  href:  string
}

export interface Service {
  id:          string
  icon:        string
  title:       string
  description: string
  features:    string[]
  color:       string
}

export interface Project {
  id:          string
  title:       string
  description: string
  image:       string
  tags:        string[]
  category:    'Web' | 'Mobile' | 'Design' | 'AI'
  link?:       string
  github?:     string
}

export interface TeamMember {
  id:     string
  name:   string
  role:   string
  bio:    string
  avatar: string
  socials?: {
    linkedin?: string
    github?:   string
    twitter?:  string
  }
}

export interface Testimonial {
  id:      string
  name:    string
  role:    string
  company: string
  avatar?: string
  content: string
  rating:  number
}

export interface Stat {
  label:   string
  value:   number
  suffix?: string
  prefix?: string
}

export interface ProcessStep {
  step:        number
  title:       string
  description: string
  icon:        string
}
