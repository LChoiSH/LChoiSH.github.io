/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
      process.env.NODE_ENV === "production"
          ? "https://LChoiSH.github.io/portfolio"
          : "",
  images: { unoptimized: true },
};

module.exports = nextConfig
