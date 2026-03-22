import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    imageSizes: [256, 384, 480],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    qualities: [75, 90],
  },
};

export default nextConfig;
