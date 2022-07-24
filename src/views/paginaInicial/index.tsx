import React from "react";
import { ApitoFinal } from "../../components/paginaInicialComponents/apitoFinal";
import { Conteudo } from "../../components/paginaInicialComponents/conteudo";
import { Header } from "../../components/paginaInicialComponents/header";
import { Servicos } from "../../components/paginaInicialComponents/servicos";
import { Servicos2 } from "../../components/paginaInicialComponents/servicos2";

export const PaginaInicial = () => {
    return (
        <>
            <Header />

            <Conteudo>
                <ApitoFinal />
                <Servicos />
                <Servicos2 />
            </Conteudo>
        </>
    );
};
