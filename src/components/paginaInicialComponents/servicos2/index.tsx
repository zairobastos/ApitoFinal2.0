import React from "react";
import campeonato from "../../../assets/images/paginainicial/campeonato.svg";
import soccer from "../../../assets/images/paginainicial/soccer.svg";
import uniforme from "../../../assets/images/paginainicial/uniforme.svg";
import campo from "../../../assets/images/paginainicial/campo.svg";
import escudo from "../../../assets/images/paginainicial/escudo.png";
import { Card2 } from "../card2";
export const Servicos2 = () => {
    return (
        <div className="mt-16 w-full flex flex-col gap-5">
            <h1 className="uppercase font-fontPadrao text-5xl font-normal text-preto">
                Serviços
            </h1>
            <div className="w-full flex flex-wrap">
                <div className="w-3/5 flex flex-col gap-4">
                    <Card2
                        imagem={campeonato}
                        descricao="Crie, edite e organize campeonatos de futebol. Com o
                            Apito Final, você tem a liberdade de gerenciar seus
                            campeonatos da forma que achar melhor."
                    />
                    <Card2
                        imagem={uniforme}
                        descricao="Cadastre, edite e gerencie os jogadores do campeonato. Com o
                            Apito Final, você tem a liberdade de adicionar estatísticas e dados dos jogadores."
                    />
                    <Card2
                        imagem={campo}
                        descricao="Defina a data, horário e local de cada partida. Com o
                        Apito Final, você pode gerenciar todas as informações de cada partida."
                    />
                    <Card2
                        imagem={escudo}
                        descricao="Cadastre, edite e gerencie os times do campeonato. Com o
                        Apito Final, você tem a liberdade de adicionar estatísticas e dados dos times."
                    />
                </div>
                <div className="w-2/5">
                    <figure>
                        <img src={soccer} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};
