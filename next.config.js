/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Ensure proper output for Vercel
    output: 'standalone',
    // Handle trailing slashes
    trailingSlash: false,
    // Ensure proper asset handling
    assetPrefix: undefined,
};

module.exports = nextConfig;