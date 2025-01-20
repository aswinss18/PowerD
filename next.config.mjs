/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for highlighting potential problems
  swcMinify: true, // Use SWC for faster builds
  experimental: {
    appDir: true, // Ensure the `app` directory works (if using Next.js 13+ features)
  },
};

export default nextConfig;
