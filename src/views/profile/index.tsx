import React, { useState } from "react";
import { FaUserCircle, FaPlusCircle } from "react-icons/fa";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";

export const Profile = () => {
    const [perfil, setPerfil] = useState(true);

    const [borda, setBorda] = useState("border-l-4 border-preto");
    const [borda2, setBorda2] = useState(
        "hover:bg-input trasition-all duration-300 ease-in"
    );

    const clickPerfil = () => {
        setPerfil(true);
        setBorda("border-l-4 border-preto");
        setBorda2("hover:bg-input trasition-all duration-300 ease-in");
    };
    const clickSenha = () => {
        setPerfil(false);
        setBorda("hover:bg-input trasition-all duration-300 ease-in");
        setBorda2("border-l-4 border-preto");
    };
    return (
        <>
            <Menu />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-screen">
                <Title Titulo="Perfil" Subtitulo="Edite seus dados pessoais" />
                <main className="w-full mt-8 flex flex-row flex-wrap bg-white mb-8 rounded-md border border-solid border-borderCard">
                    <aside className="w-1/5 flex flex-col justify-start h-full">
                        <nav>
                            <ul className="font-fontPadrao text-lg text-preto">
                                <li
                                    className={`px-4 py-5 ${borda} cursor-pointer`}
                                    onClick={clickPerfil}
                                >
                                    Editar Perfil
                                </li>
                                <li
                                    className={`px-4 py-5 ${borda2} cursor-pointer`}
                                    onClick={clickSenha}
                                >
                                    Alterar Senha
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="w-4/5 border-l border-borderCard">
                        {perfil ? (
                            <form
                                action=""
                                className="flex flex-col w-full h-full items-center py-8 gap-8"
                            >
                                <div className="flex flex-col w-1/2 justify-center items-center gap-1.5">
                                    <figure className="flex items-end gap-0">
                                        <FaUserCircle className="text-7xl text-navMenu" />
                                        <label htmlFor="foto">
                                            <FaPlusCircle className="text-verdeEscuro text-xl -ml-4" />
                                        </label>
                                    </figure>
                                    <input
                                        type="file"
                                        name="foto"
                                        id="foto"
                                        className="hidden"
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 justify-center gap-1.5">
                                    <label
                                        htmlFor="nome"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        className="px-2.5 w-full password py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid"
                                        placeholder="Nome"
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 justify-center gap-1.5">
                                    <label
                                        htmlFor="email"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="px-2.5 w-full password py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid"
                                        placeholder="Email"
                                    />
                                </div>
                                <button
                                    disabled
                                    className="bg-verdeEscuro w-1/2 text-white font-fontPadrao font-semibold leading-4 py-3.5 rounded-input"
                                >
                                    Confirmar Alteração
                                </button>
                            </form>
                        ) : (
                            <form
                                action=""
                                className="flex flex-col w-full h-full items-center py-8 gap-8"
                            >
                                <div className="flex flex-col w-1/2 justify-center gap-1.5">
                                    <label
                                        htmlFor="senha"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Senha Atual
                                    </label>
                                    <input
                                        type="password"
                                        id="senha"
                                        name="senha"
                                        className="px-2.5 w-full password py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid"
                                        placeholder="Senha"
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 justify-center gap-1.5">
                                    <label
                                        htmlFor="senha2"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Nova Senha
                                    </label>
                                    <input
                                        type="password"
                                        id="senha2"
                                        name="senha2"
                                        className="px-2.5 w-full password py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid"
                                        placeholder="Senha"
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 justify-center gap-1.5">
                                    <label
                                        htmlFor="senha3"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Confirmar Senha
                                    </label>
                                    <input
                                        type="password"
                                        id="senha3"
                                        name="senha3"
                                        className="px-2.5 w-full password py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid"
                                        placeholder="Senha"
                                    />
                                </div>
                                <button
                                    disabled
                                    className="bg-verdeEscuro w-1/2 text-white font-fontPadrao font-semibold leading-4 py-3.5 rounded-input"
                                >
                                    Confirmar Alteração
                                </button>
                            </form>
                        )}
                    </div>
                </main>
            </section>
        </>
    );
};
