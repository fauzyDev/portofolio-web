import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
    minimumCacheTTL: 3600
  },
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  experimental: {
    optimizePackageImports: [
      "@heroui/react",
      "@mui/icons-material",
      "framer-motion",
      "gsap",
      "@gsap/react",
      "lenis",
      "@uiw/react-json-view"
    ]
  },
};

export default nextConfig;
