/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },
};

module.exports = nextConfig;
