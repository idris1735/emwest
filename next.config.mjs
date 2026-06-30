/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emwestafrica.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
