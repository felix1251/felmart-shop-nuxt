import formkit from '@formkit/themes/tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./formkit.config.ts"
	],
	theme: {
		extend: {
			colors: {
				primary: "#007BC5",
				secondary: "#2E2A2A"
			},
			fontFamily: {
				sans: [
					'"Inter"',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [formkit]
}