import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/uc'
      },
      {
        protocol: 'https',
        hostname: 'drive.usercontent.google.com',
        port: '',
        pathname: '/uc'
      }
    ],
    loader: 'default',
    unoptimized: true
  }
};

export default nextConfig;
