/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  transpilePackages: ["pannellum-react"],
};

module.exports = nextConfig;
