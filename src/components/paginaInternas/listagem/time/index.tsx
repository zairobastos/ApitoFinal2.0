import React from "react";
import { Link } from "react-router-dom";
import { Figure } from "../style";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
    foto: string;
    nome: string;
    id?: string;
};

export const Listagem = ({ foto, nome, id }: Props) => {
    return (
        <Figure>
            <figure className="flex items-center">
                <img
                    src={foto}
                    alt={`foto do: ${nome}`}
                    className="h-16 w-16"
                />
            </figure>
            <div className="flex flex-col justify-between">
                <h2 className="text-xl font-fontPadrao font-semibold text-white text-right">
                    {nome}
                </h2>
                <Link to={`/detalhesTime/${id}`}>
                    <p className="text-base flex flex-row flex-wrap items-center gap-1 justify-end font-fontPadrao font-semibold text-white text-right">
                        <span>Ver Detalhes</span> <IoIosArrowForward />
                    </p>
                </Link>
            </div>
        </Figure>
    );
};
