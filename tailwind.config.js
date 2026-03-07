/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fcfaf6',
                    100: '#f8f4ed',
                    200: '#f0e5d4',
                    300: '#e5d1b3',
                    400: '#d7ba8d',
                    500: '#ca9e65',
                    600: '#bd844f',
                    700: '#9d6641',
                    800: '#805338',
                    900: '#67442f',
                    950: '#382216',
                },
                light: {
                    900: '#FFFFFF',
                    800: '#FDFBF7',
                    700: '#F5F5F5',
                },
                dark: {
                    900: '#1a1f24',
                    800: '#2a313b', // 稍柔和的深沉灰藍色，增加對比但不死黑
                },
                accent: {
                    DEFAULT: '#F39C12', // 更有活力與吸睛的陽光金橘
                    light: '#F8C471',
                    dark: '#D68910',
                    glow: 'rgba(243, 156, 18, 0.6)',
                },
                aura: {
                    peach: '#FFDAB9',
                    pink: '#FFB6C1',
                    lavender: '#E6E6FA',
                    cyan: '#E0FFFF',
                }
            },
            fontFamily: {
                sans: ['"Noto Sans TC"', 'sans-serif'],
                serif: ['"Noto Serif TC"', 'serif'],
                editorial: ['"Cormorant Garamond"', 'serif'],
                display: ['"Playfair Display"', 'serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                'glow': '0 0 25px rgba(243, 156, 18, 0.5)',
                'glow-hover': '0 0 40px rgba(243, 156, 18, 0.8)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-vibrant': "url('/hero-bg-vibrant.png')",
            }
        },
    },
    plugins: [],
}
