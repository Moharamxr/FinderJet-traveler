import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // Use the API route for the sitemap
      }
    ];
  },
  compress: true,
};

export default nextConfig;
