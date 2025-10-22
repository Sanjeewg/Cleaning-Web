/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable static export for Hostinger deployment
  output: 'export',
  trailingSlash: true,
  
  // Image optimization settings for static export
  images: {
    unoptimized: true, // Required for static export
    domains: [
      'images.unsplash.com',
      'maps.googleapis.com',
      'maps.gstatic.com',
      'threeboyscleaning.com'
    ]
  },
  
  // Additional optimizations for SEO
  env: {
    SITE_URL: 'https://threeboyscleaning.com',
    SITE_NAME: 'Three Boys Cleaning Services',
    SITE_DESCRIPTION: 'Professional cleaning services in Christchurch, New Zealand. House cleaning, commercial cleaning, car detailing, move-in/out cleaning.'
  }
  
  // Note: Headers and redirects don't work with static export
  // Security headers can be added via .htaccess file for static hosting
}

module.exports = nextConfig