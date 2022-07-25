import React from "react";

type Props = {
    imagem: string;
    descricao: string;
};
export const Card2 = ({ imagem, descricao }: Props) => {
    return (
        <div className="flex flex-wrap w-full rounded-2xl p-3 items-center hover:bg-hoverServicos transition-colors duration-300 ease-in gap-4 bg-servicos">
            <figure>
                <img src={imagem} alt="" />
            </figure>
            <p className="w-4/5 font-fontPadrao text-lg text-preto font-light text-justify">
                {descricao}
            </p>
        </div>
    );
};
