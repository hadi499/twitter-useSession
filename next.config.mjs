/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["help.twitter.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "help.twitter.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
