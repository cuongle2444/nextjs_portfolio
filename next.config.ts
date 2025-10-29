import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/nextjs_portfolio" : "",
  output: "export",
  distDir: "dist",
};

module.exports = nextConfig;

export default nextConfig;
