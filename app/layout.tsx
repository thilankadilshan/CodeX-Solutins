import type { Metadata } from 'next'
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'CodeX Solutions — Software Development Company',
    template: '%s | CodeX Solutions',
  },
  description:
    'CodeX Solutions is a full-service software company offering web development, mobile app development, QA testing, DevOps, and digital transformation services.',
  keywords: [
    'software development',
    'mobile app development',
    'web development',
    'QA testing',
    'DevOps',
    'CodeX Solutions',
    'software company',
  ],
  authors: [{ name: 'CodeX Solutions' }],
  creator: 'CodeX Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codexsolutions.dev',
    title: 'CodeX Solutions — Software Development Company',
    description:
      'Full-service software company: web, mobile, QA, DevOps, and more.',
    siteName: 'CodeX Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeX Solutions',
    description: 'Full-service software company.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
