const path = require("path");
/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const productURL = "https://lchoish.github.io/portfolio";

const nextConfig = {
  assetPrefix: isProduction ? productURL : "",
  images: {
    reactStrictMode: true,
    assetPrefix: isProduction ? productURL : "",
    trailingSlash: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
};

module.exports = nextConfig
