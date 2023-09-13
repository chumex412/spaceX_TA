/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '480px',
				// => @media (min-width: 480px) { ... }

				md: '640px',
				// => @media (min-width: 640px) { ... }

				lg: '768px',
				// => @media (min-width: 768px) { ... }

				xl: '992px',
				// => @media (min-width: 1024px) { ... }

				'2xl': '1140px',
				// => @media (min-width: 1280px) { ... }

				'3xl': '1210px',
				// => @media (min-width: 1536px) { ... }

				'4xl': '1360px'
			},
			fontFamily: {
				manrope: ['Manrope Variable', 'sans-serif']
			},
			colors: {
				gray: {
					50: 'rgb(var(--gray-50) / 1)',
					100: 'rgb(var(--gray-100) / 1)',
					200: 'rgb(var(--gray-200) / 1)',
					300: 'rgb(var(--gray-300) / 1)',
					700: 'rgb(var(--gray-700) / 1)'
				},
				primary: 'rgb(var(--primary-color) / 1)',
				secondary: 'rgb(var(--secondary-color) / 1)',
				red: {
					100: 'rgb(var(--red-100) / 1)',
					500: 'rgb(var(--red-500) / 1)'
				},
				white: 'rgb(var(--white) / 1)'
			},
			fontSize: {
				sm: 'var(--sm)',
				base: 'var(--base-text)',
				md: 'var(--md)',
				lg: 'var(--lg)'
			},
			lineHeight: {
				3: 'var(--slh)',
				5: 'var(--llh)'
			}
		}
	},
	plugins: []
};
