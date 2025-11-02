/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to allow API routes to work
  // If you need static export, you'll need to deploy API routes separately
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
