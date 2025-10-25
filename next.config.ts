import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {},
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default nextConfig;