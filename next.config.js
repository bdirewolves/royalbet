/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com']
  },
  env: {
    API_URL: "https://backoffice.royalbet65.com/v1/api",
    test_signature: "V1hwT1YyUXlUblJQVkZaYVZqTm9jRmRzYUZKTmF6VlNVRkU5",
    AWS_ACCESS_KEY_ID: "AKIARL7QTKAEIV4M5U6L",
    AWS_SECRET_ACCESS_KEY: "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",
    AWS_REGION: "ap-southeast-1"
  }
}

module.exports = nextConfig
