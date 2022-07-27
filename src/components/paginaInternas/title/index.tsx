import React from "react";
type Props = {
    Titulo: string;
    Subtitulo: string;
};
export const Title = ({ Titulo, Subtitulo }: Props) => {
    return (
        <div className="titulo flex flex-col gap-3">
            <h1 className="uppercase text-3xl font-fontPadrao font-light text-verdeClaro">
                {Titulo}
            </h1>
            <h4 className="text-lg font-fontPadrao font-normal text-preto2">
                {Subtitulo}
            </h4>
        </div>
    );
};
