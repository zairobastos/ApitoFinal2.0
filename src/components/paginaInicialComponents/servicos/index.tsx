import React from "react";
import Gratuito from "../../../assets/images/paginainicial/Gratuito.svg";
import Classificacao from "../../../assets/images/paginainicial/Classificacao.svg";
import Flexivel from "../../../assets/images/paginainicial/Flexivel.svg";
import { Card } from "../cards";
export const Servicos = () => {
    return (
        <main className="flex flex-col gap-16 mt-20 " id="apito">
            <div className="flex flex-col gap-24">
                <h1 className="font-fontPadrao uppercase text-5xl font-normal text-verdeClaro text-center">
                    Apito Final
                </h1>
                <div className="flex flex-wrap justify-between w-full">
                    <Card
                        imagem={Gratuito}
                        titulo="Gratuito"
                        descricao="Pronto para usar! Você pode começar a usar imediatamente, sem a
                    necessidade de cadastrar dados financeiros."
                    />
                    <Card
                        imagem={Classificacao}
                        titulo="Classificação e Ranking"
                        descricao="Tabelas de classificação, artilharia e rankings calculados automaticamente."
                    />
                    <Card
                        imagem={Flexivel}
                        titulo="Aplicação Flexível"
                        descricao="Interface simples e prática para criar campeonatos de categorias e com diferente número de fases e rodadas."
                    />
                </div>
            </div>
        </main>
    );
};
