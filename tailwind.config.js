/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	mode: "jit",
	theme: {
		extend: {
			backgroundColor: {
				"bg-glass": "rgba(255, 255, 255, 0.2)",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
