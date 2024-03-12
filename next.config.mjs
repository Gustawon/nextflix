/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["images.unsplash.com", "i.ytimg.com"],
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
