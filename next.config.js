/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "task.com",
      "img.freepik.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**.com",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["cloudinary", "graphql-request"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
