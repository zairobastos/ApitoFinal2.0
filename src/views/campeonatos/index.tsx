import React from "react";
import { Cards } from "../../components/paginaInternas/cards";
import { Card } from "../../components/paginaInternas/listagem/campeonato";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";
import Brasileiro from "../../assets/images/paginaInterna/Brasileiro.svg";
import { FormCampeonato } from "../../components/paginaInternas/formCampeonato";

export const Campeonatos = () => {
    return (
        <div>
            <Menu ativo1="ativo" />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-full">
                <Title
                    Titulo="Campeonatos"
                    Subtitulo="Lista de seus campeonatos cadastrados"
                />
                <div className="flex flex-row flex-wrap  mt-8 items-start mb-8">
                    <Cards>
                        <Card
                            dataFim="20/05/2020"
                            logo={Brasileiro}
                            nome="Brasileiro"
                            tipoCampeonato="teste"
                            id="teste"
                        />
                    </Cards>
                    <FormCampeonato />
                </div>
            </section>
        </div>
    );
};
