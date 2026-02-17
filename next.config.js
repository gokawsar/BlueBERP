/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Ensure trailing slashes are handled properly
    trailingSlash: false,
    // Ensure proper asset prefixes
    assetPrefix: undefined,
};

module.exports = nextConfig;