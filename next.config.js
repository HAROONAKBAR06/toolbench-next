/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    // The tool page route lazy-loads ~49 different tool widgets via
    // next/dynamic. Webpack's default chunk-splitting limits merge small
    // async chunks back into the parent bundle once a route has too many
    // dynamic imports, which would pull heavy libraries (pdf-lib, qrcode)
    // into every single tool page. Raising these limits keeps each tool's
    // code in its own chunk, loaded only when that specific tool page runs.
    if (config.optimization && config.optimization.splitChunks) {
      config.optimization.splitChunks.maxInitialRequests = 100;
      config.optimization.splitChunks.maxAsyncRequests = 100;
    }
    return config;
  },
};
module.exports = nextConfig;
