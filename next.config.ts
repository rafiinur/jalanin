/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "qvdrcvzbjakmpplvqjgz.supabase.co",
      },
    ],
  },
  devIndicators: false,
};

module.exports = nextConfig;
