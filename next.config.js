/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  sassOptions: {
    fiber: false,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/holistichealthcoach",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;