/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
      process.env.NODE_ENV === "production"
          ? "https://LChoiSH.github.io/portfolio"
          : "",
  images: {
    loader: 'imgix',
    path: "https://LChoiSH.github.io/portfolio/"
  },
};

module.exports = nextConfig
