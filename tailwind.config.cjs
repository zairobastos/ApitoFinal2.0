/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                fontPadrao: ["League Spartan", "sans-serif"],
            },
            colors: {
                borderMenu: "#FBFCFF",
                preto: "#020905",
                preto2: "rgba(2, 9, 5, 0.5)",
                verdeClaro: "#00C041",
                verdeEscuro: "#018D30",
                servicos: "rgb(232,230,230)",
                hoverServicos: "rgba(199,199,199)",
            },
            boxShadow: {
                menu: "0px 4px 4px rgba(0, 0, 0, 0.05)",
            },
            fontSize: {
                title: "42px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
