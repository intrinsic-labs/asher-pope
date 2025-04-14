import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
