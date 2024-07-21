/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["this-aint-texas.s3.us-east-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
