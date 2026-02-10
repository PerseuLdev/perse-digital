import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect antigo URL do gardening
      {
        source: '/demos/gardening/index.html',
        destination: '/pt/gardening',
        permanent: true,
      },
      {
        source: '/demos/gardening',
        destination: '/pt/gardening',
        permanent: true,
      },
      // Redirects para modelos do diretório antigo (models-live)
      {
        source: '/models-live/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
