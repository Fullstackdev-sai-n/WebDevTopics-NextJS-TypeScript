/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["stack-web-dv.s3.ap-south-1.amazonaws.com"],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	compress: true,
};

module.exports = nextConfig;
