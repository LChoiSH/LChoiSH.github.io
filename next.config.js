/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://lchoish.github.io/portfolio" : "",
}

module.exports = nextConfig
