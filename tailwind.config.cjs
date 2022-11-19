/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
 
					"primary": "#a77a5b",
					"secondary": "#ba8d66",
					"accent": "#fb8b24",
					"neutral": "#ec9192",
					"base-100": "#ededf4",
					"info": "#0f4c5c",
					"success": "#9ea93f",
					"warning": "#f2af29",
					"error": "#F87272",
				},
			},
		],
	},
	plugins: [require("daisyui")],
}
