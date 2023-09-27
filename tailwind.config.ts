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
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: 'dark', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
	},
}
export default config
