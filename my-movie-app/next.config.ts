import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cinemadamgan.fr',
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
};

export default nextConfig;
