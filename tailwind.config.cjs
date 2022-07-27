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
                titleLoginFont: "#3C3C3C",
                subtitleLogin: "#A2A2A2",
                label: "#7c7c7c",
                input: "#f9f9f9",
                borderInput: "#E6E6E6",
                borderFocus: "#2563EB",
                navMenu: "#959FA8",
                borderForm: "#f3f4f7",
                bgExcluir: "rgba(245, 74, 72, 0.2)",
                fontExcluir: "#F54A48",
                bgEditar: "rgba(250, 193, 47, 0.2)",
                fontEditar: "#FAC12F",
            },
            boxShadow: {
                menu: "0px 4px 4px rgba(0, 0, 0, 0.05)",
            },
            fontSize: {
                title: "42px",
            },
            borderWidth: {
                inputBorder: "0.0625rem",
            },
            borderRadius: {
                input: "0.1875rem",
            },
            height: {
                13: "54px",
            },
            width: {
                45: "48%",
                telaCards: "70%",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
