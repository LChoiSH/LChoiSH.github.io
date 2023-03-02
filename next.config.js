/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const productURL = "https://lchoish.github.io/portfolio/";

const nextConfig = {
  assetPrefix: isProduction ? productURL : "",
  images: {
    loader: 'imgix',
    path: isProduction ? productURL : "https://localhost:3000",
  },
};

module.exports = nextConfig
