import React from "react";
import Logo from "../../../assets/images/Logo.svg";
export const Header = () => {
    return (
        <header className="fixed bg-white z-10 flex flex-wrap w-full h-32 justify-between px-16 items-center shadow-menu border-b border-solid border-borderMenu top-0">
            <figure>
                <img src={Logo} alt="Logo do Apito Final" />
            </figure>
            <nav>
                <ul className="flex flex-wrap gap-8 uppercase font-fontPadrao text-2xl font-extralight">
                    <li>Início</li>
                    <li>Apito Final</li>
                    <li>Sobre</li>
                    <li>Login</li>
                    <li>Cadastre-se</li>
                </ul>
            </nav>
        </header>
    );
};
