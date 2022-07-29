import React from "react";

type dados = {
    timeX?: string;
    timeY?: string;
    golsX: number;
    golsY: number;
    escudoX: string;
    escudoY: string;
};

export const Placar = ({
    timeX,
    golsX,
    timeY,
    golsY,
    escudoX,
    escudoY,
}: dados) => {
    return (
        <figure className="flex flex-row flex-wrap items-center justify-between">
            <div className="w-12">
                <img src={escudoX} alt={timeX} />
            </div>
            <p className="text-xl font-fontPadrao font-semibold tracking-widest">
                {golsX} : {golsY}
            </p>
            <div className="w-12">
                <img src={escudoY} alt={timeY} />
            </div>
        </figure>
    );
};
