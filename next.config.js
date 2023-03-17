/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com']
  },
  env: {
    API_URL: "https://nanotech-cloud.com/v1/api"
  }
}

module.exports = nextConfig
