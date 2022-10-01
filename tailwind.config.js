module.exports = {
    mode: 'jit',
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/features/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                screens: {
                    sm: '100%',
                    md: '100%',
                    lg: '1024px',
                    xl: '1280px',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
