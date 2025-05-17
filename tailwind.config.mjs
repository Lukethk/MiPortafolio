/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: 'rgb(var(--primary-50))',
					100: 'rgb(var(--primary-100))',
					200: 'rgb(var(--primary-200))',
					300: 'rgb(var(--primary-300))',
					400: 'rgb(var(--primary-400))',
					500: 'rgb(var(--primary-500))',
					600: 'rgb(var(--primary-600))',
					700: 'rgb(var(--primary-700))',
					800: 'rgb(var(--primary-800))',
					900: 'rgb(var(--primary-900))',
					950: 'rgb(var(--primary-950))',
				},
				accent: {
					50: 'rgb(var(--accent-50))',
					100: 'rgb(var(--accent-100))',
					200: 'rgb(var(--accent-200))',
					300: 'rgb(var(--accent-300))',
					400: 'rgb(var(--accent-400))',
					500: 'rgb(var(--accent-500))',
					600: 'rgb(var(--accent-600))',
					700: 'rgb(var(--accent-700))',
					800: 'rgb(var(--accent-800))',
					900: 'rgb(var(--accent-900))',
					950: 'rgb(var(--accent-950))',
				},
			},
		},
	},
	plugins: [],
} 