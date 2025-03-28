/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'greatVibes': ['Great Vibes', 'cursive'],
				'cinzelDecorative': ['Cinzel Decorative', 'system-ui'],
				'playfairDisplay': ['Playfair Display Variable', 'serif'],
			},
			backgroundImage: {
				'marfil': 'linear-gradient(to bottom, #ddd4c0, #e5dece, #eee8dc, #f6f3ea, #fffdf8)',
			},
			boxShadow: {
				'cImage': ' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'
			}
		},
	},
	plugins: [],
}
