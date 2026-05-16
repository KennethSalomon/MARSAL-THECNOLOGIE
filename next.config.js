/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow images from external domains (Supabase, WhatsApp CDN, Unsplash, etc.)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'wa.me',
      },
    ],
    // Disable layout shift for local images by enforcing explicit dimensions
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/avif', 'image/webp'],
  },
  // Reduce logs in dev
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

module.exports = nextConfig;
