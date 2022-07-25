import React from "react";
import { Link } from "react-router-dom";
import Jogador from "../../../assets/images/paginainicial/Jogador.svg";

export const ApitoFinal = () => {
    return (
        <div className=" flex w-full justify-between" id="inicio">
            <div className="flex flex-col justify-center items-center w-1/2">
                <div className="flex flex-col gap-4 justify-start">
                    <h1 className="font-fontPadrao text-title text-preto w-full">
                        Bem-vindo ao{" "}
                        <span className="uppercase text-verdeClaro">
                            Apito Final
                        </span>{" "}
                        !
                    </h1>
                    <p className="font-fontPadrao text-2xl font-light">
                        Gerencie os melhores campeonatos de futebol, times
                        esportivos, e jogadores incríveis sem sair de casa.
                    </p>
                    <button className="bg-verdeEscuro w-1/3 font-fontPadrao font-normal text-2xl py-2 rounded text-white">
                        <Link to="/singup">Cadastre-se</Link>
                    </button>
                </div>
            </div>
            <figure className="w-1/2">
                <img
                    src={Jogador}
                    alt="Ilustração de Jogador"
                    className="w-full"
                />
            </figure>
        </div>
    );
};
