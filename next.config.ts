import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The old promo pages are gone; links to them may still live in ads and QR codes.
  async redirects() {
    return [{ source: '/promo/:path*', destination: '/', permanent: true }]
  },
}

export default nextConfig
