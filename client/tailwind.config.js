/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        darkMode: "class",
        screens: {
            xxl: { max: "1450px" },
            xl: { max: "1400px" },
            lg4: { max: "1280px" },
            lg3: { max: "1080px" },
            lg2: { max: "980px" },
            lg1: { max: "900px" },
            md4: { max: "768px" },
            md3: { max: "680px" },
            md2: { max: "640px" },
            md1: { max: "550px" },
            sm3: { max: "480px" },
            sm2: { max: "420px" },
            sm1: { max: "360px" },
        },
        colors: {},
        extend: {
            colors: {
                "sky-blue": "rgb(0, 149, 246)",
                "sky-blue-2": "#0095f6",
                "blue-text": "#385185",
                "blue-text-2": " #776b99",
                "text-black": "#000",
                "light-grey": "#dbdbdb",
                "light-grey-2": "#efefef",
                "text-grey": "#737373",
                "text-white": "#fff",
            },
        },
    },
    plugins: [],
};
