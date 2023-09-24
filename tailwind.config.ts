import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-primary':
					'linear-gradient(270deg, rgba(127, 143, 215, 0.8) 0%, rgba(51, 40, 133, 0.8) 100%)',
			},
			colors: {
				'primary-blue-dark': '#332885',
				'primary-blue-light': '#7F8FD7',
				primary: '#211D3D',
				purple: '#7665EE',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
