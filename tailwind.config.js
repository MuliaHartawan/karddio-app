// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                inset : '0px 0px 0px 2px white inset',
                green : '0px 2px 5px 5px rgba(22, 199, 154, 0.15)',      
            }
        },
    },
    variants: {
        extend: {
            variants: {
                backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
              },
        },
    },
    plugins: [],
}