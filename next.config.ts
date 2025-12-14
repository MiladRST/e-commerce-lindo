import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://fakestoreapi.com/**'),
      new URL('https://cdn.dummyjson.com/**'),
      new URL('https://swiperjs.com/demos/images/**'),
    ],
  },
};

export default nextConfig;
