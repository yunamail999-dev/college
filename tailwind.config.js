/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 主色系 — 沉穩深邃的暖棕，傳達信任與文化底蘊
                primary: {
                    50: '#FAF8F5',
                    100: '#F5F0EA',
                    200: '#E8DDD0',
                    300: '#D4C4AC',
                    400: '#BCA682',
                    500: '#A38A62',
                    600: '#8B714D',
                    700: '#705A3E',
                    800: '#5A4732',
                    900: '#3D2F22',
                    950: '#231B14',
                },
                // 強調色 — 柔和高雅的古銅金，取代刺眼的橘黃
                accent: {
                    DEFAULT: '#B8860B',  // 暗金色（dark goldenrod），比 #F39C12 更沉穩
                    light: '#D4A843',
                    dark: '#8B6914',
                    muted: '#C9A96E',
                    glow: 'rgba(184, 134, 11, 0.4)',
                },
                // 背景色 — 乾淨溫暖的奶白、象牙白
                surface: {
                    primary: '#FDFBF7',    // 主要背景 — 暖白
                    secondary: '#F7F3EC',  // 次要背景 — 象牙色
                    tertiary: '#EDE7DC',   // 卡片背景
                    warm: '#F9F5EE',       // 暖色區塊
                },
                // 深色系 — 用於文字和深色區塊
                dark: {
                    900: '#1C1917',  // 石墨色，最深
                    800: '#292524',  // 深棕灰
                    700: '#44403C',  // 中棕灰
                    600: '#57534E',  // 輔助文字色
                },
                // 輔助裝飾色 — 克制使用，僅用於小面積裝飾
                muted: {
                    rose: '#E8C4C4',     // 極淡玫瑰
                    lavender: '#D5D0E5', // 極淡薰衣草
                    sage: '#C5CFC0',     // 極淡鼠尾草
                    sand: '#E6DDD1',     // 暖沙色
                },
            },
            fontFamily: {
                sans: ['"Noto Sans TC"', 'sans-serif'],
                serif: ['"Noto Serif TC"', 'serif'],
                editorial: ['"Cormorant Garamond"', 'serif'],
                display: ['"Playfair Display"', 'serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.06)',
                'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
                'card': '0 8px 30px rgba(0, 0, 0, 0.04)',
                'card-hover': '0 12px 40px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 20px rgba(184, 134, 11, 0.3)',
                'glow-hover': '0 0 30px rgba(184, 134, 11, 0.5)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-vibrant': "url('/hero-bg-vibrant.png')",
            }
        },
    },
    plugins: [],
}
