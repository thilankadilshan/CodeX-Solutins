// lib/data.ts — All static content for CodeX Solutions website

import { Service, Project, TeamMember, Testimonial, Stat, ProcessStep } from '@/types'

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Services',  href: '#services' },
  { label: 'About',     href: '#about' },
  { label: 'Process',   href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team',      href: '#team' },
  { label: 'Contact',   href: '#contact' },
]

// ── Services ──────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    icon: '🌐',
    title: 'Web Development',
    description: 'Modern, fast, and scalable web applications built with cutting-edge technologies tailored to your business needs.',
    features: ['React / Next.js', 'Node.js APIs', 'Database Design', 'CMS Integration'],
    color: '#e8000d',
  },
  {
    id: 'mobile-app',
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.',
    features: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin'],
    color: '#ff3333',
  },
  {
    id: 'qa-testing',
    icon: '🔬',
    title: 'QA & Testing',
    description: 'Comprehensive quality assurance services ensuring your software is bug-free, performant, and reliable.',
    features: ['Manual Testing', 'Automation Testing', 'Performance Testing', 'Security Audits'],
    color: '#e8000d',
  },
  {
    id: 'devops',
    icon: '☁️',
    title: 'DevOps & Cloud',
    description: 'Streamline your development pipeline with CI/CD, containerization, and cloud infrastructure management.',
    features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
    color: '#ff3333',
  },
  {
    id: 'uiux',
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user psychology and brand identity at the forefront.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#e8000d',
  },
  {
    id: 'ai-ml',
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to automate processes and gain data-driven insights.',
    features: ['Custom ML Models', 'NLP Solutions', 'Computer Vision', 'AI Integration'],
    color: '#ff3333',
  },
  {
    id: 'cybersecurity',
    icon: '🛡️',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security audits, penetration testing, and compliance.',
    features: ['Pen Testing', 'Vulnerability Assessment', 'Security Compliance', 'Data Encryption'],
    color: '#e8000d',
  },
  {
    id: 'consulting',
    icon: '💡',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align your IT infrastructure with your business objectives and growth.',
    features: ['Digital Transformation', 'Tech Stack Review', 'Architecture Design', 'Team Augmentation'],
    color: '#ff3333',
  },
]

// ── Stats ─────────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { label: 'Projects Delivered',  value: 150, suffix: '+' },
  { label: 'Happy Clients',       value: 80,  suffix: '+' },
  { label: 'Years of Experience', value: 6,   suffix: '+' },
  { label: 'Team Members',        value: 30,  suffix: '+' },
]

// ── Process ───────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We dive deep into your requirements, analyze your market, and craft a comprehensive project roadmap.',
    icon: '🔍',
  },
  {
    step: 2,
    title: 'UI/UX Design',
    description: 'Our designers create stunning wireframes and interactive prototypes, ensuring perfect UX before any code is written.',
    icon: '🎨',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Our engineers build your solution using agile methodology with bi-weekly sprints and continuous delivery.',
    icon: '⚙️',
  },
  {
    step: 4,
    title: 'Testing & QA',
    description: 'Rigorous manual and automated testing ensures your product is bug-free, performant, and production-ready.',
    icon: '🧪',
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'We handle the entire deployment process, from CI/CD pipeline setup to cloud infrastructure configuration.',
    icon: '🚀',
  },
  {
    step: 6,
    title: 'Support & Growth',
    description: 'Post-launch we provide ongoing maintenance, performance monitoring, and feature enhancements.',
    icon: '📈',
  },
]

// ── Portfolio ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'ecommerce',
    title: 'ShopFlow — E-Commerce Platform',
    description: 'A full-featured multi-vendor marketplace with real-time inventory, AI recommendations, and seamless checkout.',
    image: '/images/portfolio/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    category: 'Web',
  },
  {
    id: 'healthcare',
    title: 'MedConnect — Healthcare App',
    description: 'Telemedicine platform connecting patients with doctors via secure video calls, prescriptions, and health tracking.',
    image: '/images/portfolio/healthcare.jpg',
    tags: ['React Native', 'Node.js', 'WebRTC', 'HIPAA Compliant'],
    category: 'Mobile',
  },
  {
    id: 'fintech',
    title: 'FinEdge — Banking Dashboard',
    description: 'Real-time financial analytics dashboard with ML-powered fraud detection and automated reporting.',
    image: '/images/portfolio/fintech.jpg',
    tags: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'D3.js'],
    category: 'Web',
  },
  {
    id: 'logistics',
    title: 'FleetTrack — Logistics System',
    description: 'End-to-end fleet management system with live GPS tracking, route optimization, and driver analytics.',
    image: '/images/portfolio/logistics.jpg',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Google Maps API'],
    category: 'Web',
  },
  {
    id: 'social',
    title: 'ConnectHub — Social Platform',
    description: 'Feature-rich social media platform with stories, live streaming, and AI-powered content moderation.',
    image: '/images/portfolio/social.jpg',
    tags: ['React Native', 'GraphQL', 'AWS', 'TensorFlow'],
    category: 'Mobile',
  },
  {
    id: 'iot',
    title: 'SmartMonitor — IoT Dashboard',
    description: 'Industrial IoT monitoring system with real-time sensor data, predictive maintenance alerts, and analytics.',
    image: '/images/portfolio/iot.jpg',
    tags: ['React', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
    category: 'Web',
  },
]

// ── Technologies ──────────────────────────────────────────────────────────────
export const TECH_ROW_1 = [
  { name: 'React',        icon: '⚛️' },
  { name: 'Next.js',      icon: '▲' },
  { name: 'Node.js',      icon: '🟩' },
  { name: 'TypeScript',   icon: '📘' },
  { name: 'Python',       icon: '🐍' },
  { name: 'AWS',          icon: '☁️' },
  { name: 'Docker',       icon: '🐳' },
  { name: 'Kubernetes',   icon: '☸️' },
  { name: 'MongoDB',      icon: '🍃' },
  { name: 'PostgreSQL',   icon: '🐘' },
]

export const TECH_ROW_2 = [
  { name: 'Flutter',      icon: '🐦' },
  { name: 'React Native', icon: '📱' },
  { name: 'GraphQL',      icon: '◈' },
  { name: 'Redis',        icon: '🔴' },
  { name: 'TensorFlow',   icon: '🧠' },
  { name: 'Firebase',     icon: '🔥' },
  { name: 'Vue.js',       icon: '💚' },
  { name: 'Tailwind',     icon: '🎨' },
  { name: 'GitHub',       icon: '🐙' },
  { name: 'Figma',        icon: '🖌️' },
]

// ── Team ──────────────────────────────────────────────────────────────────────
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Thilanka Dilshan',
    role: 'CEO & Founder',
    bio: "Visionary leader with 10+ years in software engineering, driving CodeX's mission to deliver transformative digital solutions.",
    avatar: '/images/team/ceo.jpg',
    socials: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    id: 'cto',
    name: 'Kavindu Perera',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect specializing in cloud infrastructure, microservices, and scaling enterprise applications.',
    avatar: '/images/team/cto.jpg',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 'lead-dev',
    name: 'Nimasha Fernando',
    role: 'Lead Full-Stack Developer',
    bio: 'Expert in React, Node.js, and mobile development with a passion for clean, scalable code and exceptional UX.',
    avatar: '/images/team/dev.jpg',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 'lead-design',
    name: 'Ruwani Jayasinghe',
    role: 'Lead UI/UX Designer',
    bio: 'Creative designer bridging the gap between business goals and beautiful user experiences across web and mobile.',
    avatar: '/images/team/designer.jpg',
    socials: { linkedin: '#', twitter: '#' },
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Mitchell',
    role: 'CTO',
    company: 'TechVenture Inc.',
    content: 'CodeX Solutions transformed our entire digital infrastructure. Their team delivered a complex fintech platform 2 weeks ahead of schedule with zero critical bugs. Truly exceptional work.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Anderson',
    role: 'Product Manager',
    company: 'HealthFirst Ltd.',
    content: 'The mobile app CodeX built for us has 98% crash-free sessions and a 4.8-star App Store rating. Their attention to HIPAA compliance and user experience was outstanding.',
    rating: 5,
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Founder',
    company: 'LogiTrack Solutions',
    content: 'From discovery to deployment in 3 months, CodeX delivered a logistics platform that handles 50,000+ daily transactions without a hiccup. Highly recommended.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Emma Williams',
    role: 'VP Engineering',
    company: 'RetailMax Group',
    content: 'Their DevOps team reduced our deployment time by 80% and our infrastructure costs by 35%. CodeX doesn\'t just write code — they solve real business problems.',
    rating: 5,
  },
]
