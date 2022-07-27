import React from "react";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";

export const Jogadores = () => {
    return (
        <div>
            <Menu ativo3="ativo" />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-screen">
                <Title
                    Titulo="Jogadores"
                    Subtitulo="Lista de seus jogadores de futebol cadastrados"
                />
            </section>
        </div>
    );
};
