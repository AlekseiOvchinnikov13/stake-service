/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'cdn-images-1.medium.com', 'miro.medium.com']
  }
};

module.exports = nextConfig;
