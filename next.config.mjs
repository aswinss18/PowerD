/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for highlighting potential problems
  swcMinify: true, // Use SWC for faster builds
  experimental: {
    appDir: true, // Ensure the `app` directory works (if using Next.js 13+ features)
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
