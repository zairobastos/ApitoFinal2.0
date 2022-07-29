import React from "react";
import { Link } from "react-router-dom";
import { Container, Figure } from "./style";
import { IoIosArrowForward, IoMdCalendar } from "react-icons/io";

type dados = {
    logo: string;
    nome: string;
    tipoCampeonato: string;
    id: string;
    dataFim: string;
};

export const Card = ({ logo, nome, tipoCampeonato, id, dataFim }: dados) => {
    return (
        <Container className="mb-8 border-2 border-solid shadow-menu border-borderCard rounded-xl">
            <Figure>
                <img src={logo} alt="logo do campeonato" width={70} />
                <h3 className="font-padrao font-semibold">{nome}</h3>
            </Figure>
            <div className="flex flex-col mt-5 ml-4">
                <ul className="flex flex-col gap-1">
                    <li className="font-fontPadrao font-light text-base text-preto">
                        {tipoCampeonato == "PONTOS"
                            ? "PONTOS CORRIDOS"
                            : "MATA-MATA"}
                    </li>
                </ul>
                <div className="flex flex-row flex-wrap gap-3">
                    <figure className="flex items-center gap-2 h-7">
                        <span>
                            <IoMdCalendar className="h-full text-2xl" />
                        </span>
                        <p className="font-fontPadrao flex items-center font-light text-base leading-none  h-full text-preto">
                            <span>{dataFim}</span>
                        </p>
                    </figure>
                </div>
                <figure className="mb-7 mt-7 pr-7">
                    <Link
                        to={`/detalhesCampeonato/${id}`}
                        className="flex flex-row flex-wrap items-center h-full justify-end gap-1"
                    >
                        <p className="text-verdeClaro font-fontPadrao h-full  flex items-center font-semibold text-base">
                            Ver Detalhes
                        </p>
                        <IoIosArrowForward className="text-verdeClaro" />
                    </Link>
                </figure>
            </div>
        </Container>
    );
};
