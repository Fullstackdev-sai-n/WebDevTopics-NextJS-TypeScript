/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		mongoUrl:
			"mongodb+srv://sainathdigi:saibaba1987@cluster0.7i7clvv.mongodb.net/properties-info",
	},
	images: {
		domains: ["stack-web-dv.s3.ap-south-1.amazonaws.com"],
	},
};

module.exports = nextConfig;
