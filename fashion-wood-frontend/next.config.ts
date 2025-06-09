/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        // Path ini memastikan kita hanya mengizinkan gambar dari project Sanity kita
        pathname: "/images/alcq73xh/production/**",
      },
    ],
  },
};

module.exports = nextConfig;
