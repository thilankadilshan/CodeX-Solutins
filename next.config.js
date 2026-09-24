/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for optimized Docker production builds
  output: 'standalone',

  // Image optimization
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Strict mode for better development experience
  reactStrictMode: true,

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
