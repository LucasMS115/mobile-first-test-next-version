/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  ...withImages(),
  images: {
    disableStaticImages: true
  }
}

module.exports = nextConfig
