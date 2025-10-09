/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for traditional hosting (Namecheap, etc.)
  output: 'export',
  
  // Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Configure asset prefix (leave empty for root domain)
  assetPrefix: '',
  
  // Configure base path (leave empty for root domain)
  basePath: ''
};

export default nextConfig;