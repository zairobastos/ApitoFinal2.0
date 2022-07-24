import React from "react";

type Props = {
    imagem: string;
    titulo: string;
    descricao: string;
};
export const Card = ({ imagem, titulo, descricao }: Props) => {
    return (
        <div className="w-1/4 flex flex-col gap-3 justify-center">
            <figure className="flex justify-center">
                <img src={imagem} alt="Imagem" />
            </figure>
            <h2 className="text-center font-fontPadrao text-preto text-2xl font-normal">
                {titulo}
            </h2>
            <p className="text-center font-fontPadrao text-preto2 text-2xl font-light">
                {descricao}
            </p>
        </div>
    );
};
