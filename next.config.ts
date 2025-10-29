import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/nextjs_portfolio" : "",
  devIndicators: false,
  output: "export",
  distDir: "dist",
};

export default nextConfig;
