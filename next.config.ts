import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },

      {
        protocol: "https",
        hostname: "demowp.vegatheme.com",
        pathname: "/ananke/wp-content/uploads/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ ignora TODOS os erros de tipo
  },
};

export default nextConfig;
