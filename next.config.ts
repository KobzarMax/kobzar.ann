import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com'
      }
    ]
  }
};

export default nextConfig;
