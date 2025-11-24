import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      new URL('https://fakestoreapi.com/**'),
    ],
  },
};

export default nextConfig;
