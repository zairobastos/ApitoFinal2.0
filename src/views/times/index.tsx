import React from "react";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";

export const Times = () => {
    return (
        <div>
            <Menu ativo2="ativo" />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-screen">
                <Title
                    Titulo="Times"
                    Subtitulo="Lista de suas equipes de futebol cadastrados"
                />
            </section>
        </div>
    );
};
