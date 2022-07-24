import React from "react";

type Props = {
    children: React.ReactNode;
};
export const Conteudo = (props: Props) => {
    return (
        <section className="z-0 absolute w-full mt-32 flex flex-col px-16">
            {props.children}
        </section>
    );
};
