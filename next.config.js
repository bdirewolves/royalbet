/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com']
  },
  env: {
    API_URL: "https://backoffice.royalbet65.com/v1/api",
    test_signature: "V1hwT1YyUXlUblJQVkZaYVZqTm9jRmRzYUZKTmF6VlNVRkU5"
  }
}

module.exports = nextConfig
