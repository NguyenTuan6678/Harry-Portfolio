import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.185", "192.168.1.76"],
};

export default nextConfig;
