import React from "react";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";

export const Campeonatos = () => {
    return (
        <div>
            <Menu ativo1="ativo" />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-screen">
                <Title
                    Titulo="Campeonatos"
                    Subtitulo="Lista de seus campeonatos cadastrados"
                />
            </section>
        </div>
    );
};
