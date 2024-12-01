import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // Use the API route for the sitemap
      },
    ];
  },
  // Add other config options here
};

export default nextConfig;
