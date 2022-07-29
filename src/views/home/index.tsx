import React from "react";
import { Placar } from "../../components/paginaInternas/listagem/home/partidasRecentes";
import { Menu } from "../../components/paginaInternas/menu";

import Fluminense from "../../assets/images/paginaInterna/fluminense.svg";
import fortaleza from "../../assets/images/paginaInterna/fortaleza.png";
import comecarCampeonato from "../../assets/images/paginaInterna/ComecarCampeonato.png";
import Brasileiro from "../../assets/images/paginaInterna/Brasileiro.svg";

import { FormCampeonato } from "../../components/paginaInternas/formCampeonato";
import { Link } from "react-router-dom";
import { ListaCampeonatos } from "../../components/paginaInternas/listagem/home/campeonatos";

export const Home = () => {
    return (
        <div>
            <Menu ativo="ativo" />
            <section className="flex bg-input flex-row flex-wrap px-10 pt-32 h-full gap-7 pb-11">
                <aside className="bg-white flex flex-col w-1/5 border-2 border-solid border-borderForm shadow-menu rounded-xl py-8 px-5 h-full">
                    <h2 className="font-fontPadrao font-semibold text-xl text-navMenuAtivo mb-10 ">
                        Partidas Recentes
                    </h2>
                    <div className="flex flex-col flex-wrap gap-6 mx-2">
                        <Placar
                            timeX="Fortaleza"
                            golsX={0}
                            timeY="Fluminense"
                            golsY={1}
                            escudoX={fortaleza}
                            escudoY={Fluminense}
                        />
                        <Placar
                            timeX="Fortaleza"
                            golsX={0}
                            timeY="Fluminense"
                            golsY={1}
                            escudoX={fortaleza}
                            escudoY={Fluminense}
                        />
                        <Placar
                            timeX="Fortaleza"
                            golsX={0}
                            timeY="Fluminense"
                            golsY={1}
                            escudoX={fortaleza}
                            escudoY={Fluminense}
                        />
                    </div>
                </aside>
                <main className="flex flex-col w-1/2">
                    <figure>
                        <img
                            src={comecarCampeonato}
                            alt="Começar Campeonato"
                            className="w-full h-52"
                        />
                    </figure>
                    <main className="flex flex-col flex-wrap mt-9">
                        <header className="mb-5 flex flex-row justify-between items-center">
                            <h2 className="text-2xl font-fontPadrao font-semibold">
                                Últimos Campeonatos
                            </h2>
                            <Link
                                to="/campeonato"
                                className="font-fontPadrao text-lg font-semibold text-verdeClaro"
                            >
                                Ver Todos
                            </Link>
                        </header>
                        <ListaCampeonatos
                            nomeCampeonato="Brasileiro"
                            statusCampeonato="ABERTO"
                            tipoCampeonato="PONTOS"
                            logoCampeonato={Brasileiro}
                            id={"1"}
                            key={"1"}
                        />
                    </main>
                </main>
                <FormCampeonato />
            </section>
        </div>
    );
};
