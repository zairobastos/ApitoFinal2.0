import React from "react";

export const Sobre = () => {
    return (
        <footer className="flex flex-col gap-3 mb-8" id="sobre">
            <h1 className="uppercase text-5xl font-fontPadrao font-normal text-preto">
                sobre
            </h1>
            <div className="text-justify flex flex-col gap-2">
                <h3 className="text-3xl font-fontPadrao font-normal text-preto">
                    Para os apaixonados por futebol!
                </h3>
                <div className="flex flex-col gap-1">
                    <p className="text-preto font-fontPadrao font-light text-xl">
                        Essa paixão nos moveu para desenvolver uma ferramenta
                        indispensável para quem adora futebol. Com ela é
                        possível organizar e participar de campeonatos
                        desportivos de forma justa.
                    </p>
                    <p className="text-preto font-fontPadrao font-light text-xl">
                        Com o Apito Final é possível otimizar e automatizar
                        processos de classificação, estatísticas e cumprir as
                        normas de organização dos campeonatos criados, além de
                        ter todo o processo tratado com imparcialidade.
                    </p>
                    <p className="text-preto font-fontPadrao font-light text-xl">
                        Traga o seu campeonato para o Apito Final e se livre de
                        papeis, estresse e cobranças de organização. Seja livre
                        para disfrutar o melhor do futebol, com ousadia e
                        alegria.
                    </p>
                </div>
            </div>
            <p className="text-preto font-fontPadrao text-lg font-light mt-3">
                Feito com &#128154; pela equipe Apito Final - 2022.
            </p>
        </footer>
    );
};
