/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                // primary: '#14b8a6',
                // secondary: '#64748b',
                // dark: '#0f172a'
                primary: '#1363DF',
                secondary: '#0e7490',
                dark: '#06283D',
                bcolor: '#47B5FF',
                // primary: '#615DEC',
                // secondary: '#301781',
                // dark: '#301781'
            },
            screens: {
                '2xl': '1320px',
            },
        },
    },

    // #06283D
    // #1363DF
    plugins: [],
}