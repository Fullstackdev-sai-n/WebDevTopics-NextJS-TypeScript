/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongoUrl: "mongodb+srv://sainathdigi:saibaba1987@cluster0.7i7clvv.mongodb.net/properties-info"
  }
}

module.exports = nextConfig
