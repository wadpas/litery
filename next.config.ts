import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content1.rozetka.com.ua",
      },
    ],
  },
};

export default nextConfig;
