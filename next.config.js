/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.artzstudio.com",
      "media2.giphy.com",
      "media4.giphy.com",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
