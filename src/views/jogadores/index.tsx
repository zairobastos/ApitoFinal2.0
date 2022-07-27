import React from "react";
import { Listagem } from "../../components/paginaInternas/listagem";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";
import CANO from "../../assets/images/paginaInterna/CANO.png";
import { Cards } from "../../components/paginaInternas/cards";

export const Jogadores = () => {
    return (
        <div>
            <Menu ativo3="ativo" />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-screen">
                <Title
                    Titulo="Jogadores"
                    Subtitulo="Lista de seus jogadores de futebol cadastrados"
                />
                <div className="flex flex-row flex-wrap gap-gapCards mt-8 items-start">
                    <Cards>
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                    </Cards>

                    <div className="flex flex-col w-1/4 border-2 border-solid border-borderForm bg-white shadow-menu rounded-xl pt-8 px-5">
                        <h2 className="font-fontPadrao font-bold text-2xl text-preto mb-10">
                            Novo Jogador
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    );
};
