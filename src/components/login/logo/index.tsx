import logo from "../../../assets/images/Logo.svg";
import React from "react";
export const HeaderLogo = () => {
    return (
        <figure className="flex justify-start items-center gap-6 pt-16 pb-5">
            <img src={logo} alt="logo" />
            <h2 className="text-5xl font-fontPadrao font-semibold leading-12 text-verdeClaro">
                Apito Final
            </h2>
        </figure>
    );
};
