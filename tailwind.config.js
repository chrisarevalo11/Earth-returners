/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				green: 'var(--green)',
				lightBgGreen: 'var(--light-bg-green)',
				lightGreen: 'var(--light-green)',
				secondaryGreen: 'var(--secondary-green)',
				lightSecondaryGreen: 'var(--light-secondary-green)'
			},
			fontFamily: {
				sen: ['Sen Variable', 'sans-serif'],
				inter: ['Inter Variable', 'sans-serif']
			}
		}
	},
	plugins: []
}
