import React from "react";
type titulo = {
    title: string;
    subtitle: string;
};
export const HeaderForm = ({ title, subtitle }: titulo) => {
    return (
        <header className="gap-2">
            <h1 className="text-4xl font-fontPadrao font-normal text-titleLoginFont">
                {title}
            </h1>
            <p className="text-subtitleLogin font-fontPadrao font-normal text-base mb-8">
                {subtitle}
            </p>
        </header>
    );
};
