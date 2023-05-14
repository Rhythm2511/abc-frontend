/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    format: ['images/avif', 'images/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ticketing-system-production.up.railway.app',
        port: '3000'
      },
    ],
  },
  nextConfig
}





