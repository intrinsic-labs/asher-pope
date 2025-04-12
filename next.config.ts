import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/#work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
