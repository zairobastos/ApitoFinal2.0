import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lista } from "./style";
import Logo from "../../../assets/images/paginaInterna/logoHeader.svg";

import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";

type ativos = {
    ativo?: string;
    ativo1?: string;
    ativo2?: string;
    ativo3?: string;
};

export const Menu = ({ ativo, ativo1, ativo2, ativo3 }: ativos) => {
    const [janela, setJanela] = useState(false);
    const aparecer = () => {
        setJanela(!janela);
    };
    const deleteUser = () => {
        Swal.fire({
            title: "Deseja deletar a conta?",
            text: "O processo não é reversível!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, deletar!",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deletado!", "Sua conta foi deletada.", "success");
            }
        });
    };
    return (
        <>
            <header className="flex bg-white z-10 top-0 w-full fixed flex-row flex-wrap justify-between h-20 shadow-menu  px-10 border-b border-solid border-borderMenu">
                <nav className="flex flex-wrap flex-row items-center gap-x-12">
                    <figure>
                        <img src={Logo} alt="Logo" />
                    </figure>
                    <Lista className="text-navMenu">
                        <Link
                            to={"/home"}
                            className={`h-full ${ativo} items-center flex cursor-pointer hover:text-preto transition-colors`}
                        >
                            INÍCIO
                        </Link>
                        <Link
                            to={"/campeonato"}
                            className={`h-full ${ativo1} items-center flex cursor-pointer hover:text-preto transition-colors`}
                        >
                            CAMPEONATOS
                        </Link>
                        <Link
                            to={"/times"}
                            className={`h-full ${ativo2} items-center flex cursor-pointer hover:text-preto transition-colors`}
                        >
                            TIMES
                        </Link>
                        <Link
                            to={"/jogadores"}
                            className={`h-full ${ativo3} items-center flex cursor-pointer hover:text-preto transition-colors`}
                        >
                            JOGADORES
                        </Link>
                    </Lista>
                </nav>
                <div className="flex items-center gap-3">
                    <figure className=" h-full items-center justify-center flex">
                        <FaUserCircle className="text-5xl text-navMenu" />
                    </figure>
                    <div
                        className="flex flex-row flex-wrap items-center gap-3 cursor-pointer"
                        onClick={aparecer}
                    >
                        <h2 className="text-xl font-fontPadrao font-medium text-navMenu">
                            Zairo Bastos
                        </h2>
                        {janela ? (
                            <IoIosArrowUp className="text-xl text-navMenu" />
                        ) : (
                            <IoIosArrowDown className="text-xl text-navMenu" />
                        )}
                    </div>
                </div>
            </header>
            {janela && (
                <div className="bg-white shadow-menu fixed top-24 right-10 z-20 w-80 h-80 rounded-xl px-2 items-center border-2 border-solid border-borderForm">
                    <ul className="flex flex-col h-full justify-center items-center text-lg font-fontPadrao font-bold  gap-2">
                        <li>
                            <FaUserCircle size={100} className="text-navMenu" />
                        </li>
                        <li className="text-preto flex flex-col items-center">
                            <h2 className="font-fontPadrao font-normal">
                                Luiz Zairo Bastos Viana
                            </h2>
                            <h3 className="text-preto font-normal">
                                zairo_vianahd@hotmail.com
                            </h3>
                        </li>
                        <li className="flex w-full justify-between items-center py-3">
                            <Link
                                to="/profile"
                                className="bg-bgEditar text-fontEditar font-fontPadrao w-45 text-center rounded-sm"
                            >
                                Editar
                            </Link>
                            <Link
                                to={""}
                                onClick={deleteUser}
                                className="bg-bgExcluir text-fontExcluir font-fontPadrao w-45 text-center rounded-sm"
                            >
                                Excluir
                            </Link>
                        </li>
                        <Link
                            to="/login"
                            className="py-1 rounded-sm bg-fontExcluir w-full text-white cursor-pointer"
                        >
                            <li className="flex flex-row flex-wrap items-center justify-center gap-2">
                                Sair <FiLogOut />
                            </li>
                        </Link>
                    </ul>
                </div>
            )}
        </>
    );
};
