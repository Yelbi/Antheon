import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    imageSizes: [256, 384, 480],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    qualities: [75, 90],
  },
};

export default nextConfig;
