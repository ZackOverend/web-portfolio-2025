import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        // https://i.ibb.co/SwbpGy1h/image1.png
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
