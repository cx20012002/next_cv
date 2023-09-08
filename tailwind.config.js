/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px',
            }
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend:{
            fontFamily:{
                tasa: ['var(--font-tasa)'],
                tasaText: ['var(--font-tasa-text)'],
                tasaDeck: ['var(--font-tasa-deck)'],
            },
            animation:{
                'spin-slow': 'spin 3s linear infinite',
                'spin-very-slow': 'spin 8s linear infinite'
            }
        }
    },
    plugins: [],
}
